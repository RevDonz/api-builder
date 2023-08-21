'use client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/workspace/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/workspace/ui/select';
import { responseAtom } from '@/store/store';
import { DataDummy, ItemProps } from '@/types/collection';
import { Editor } from '@monaco-editor/react';
import axios from 'axios';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

const PageRequest = ({ params }: { params: { slug: string } }) => {
  // const [request, setRequest] = useState<ItemProps>();
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');

  const [response, setResponse] = useAtom(responseAtom);

  const GetData = () => {
    GetDataRecursive(DataDummy.items);
  };

  const GetDataRecursive = (items: ItemProps[]) => {
    items.map((item) => {
      if (item.item) {
        GetDataRecursive(item.item);
      }

      if (item.request) {
        if (item.id === params.slug) {
          setUrl(item.request.url?.raw as string);
          setMethod(item.request.method as string);
        }
      }
    });
  };

  const sendRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse('');

    try {
      const startTime = new Date();
      const res = await axios({
        method: method,
        url: url,
      });
      const endTime = new Date(); // Waktu setelah respons diterima
      const elapsed = endTime.getTime() - startTime.getTime();
      console.log(elapsed);
      
      setResponse(JSON.stringify(res, null, '\t'));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const options = {
    minimap: { enabled: false },
    formatOnPaste: true,

    domReadOnly: true,
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className='flex flex-col'>
      <form onSubmit={sendRequest} className='flex items-center justify-center'>
        <Select
          onValueChange={(value) => setMethod(value)}
          value={method}
          defaultValue='GET'
        >
          <SelectTrigger className='rounded-l-md w-32 mr-[1px]'>
            <SelectValue placeholder='Method' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              value='GET'
              className='text-green-500 hover:text-red-500'
            >
              GET
            </SelectItem>
            <SelectItem value='POST' className='text-yellow-500'>
              POST
            </SelectItem>
            <SelectItem value='PUT' className='text-blue-500'>
              PUT
            </SelectItem>
            <SelectItem value='DELETE' className='text-red-500'>
              DEL
            </SelectItem>
          </SelectContent>
        </Select>

        <Input
          type='text'
          placeholder='Enter URL'
          className='rounded-r-md w-full'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button className='uppercase ml-3' variant={'secondary'} type='submit'>
          send
        </Button>
      </form>
      <Tabs defaultValue='params' className='w-full mt-5'>
        <TabsList>
          <TabsTrigger value='params'>Params</TabsTrigger>
          <TabsTrigger value='authorization'>Authorization</TabsTrigger>
          <TabsTrigger value='headers'>Headers</TabsTrigger>
          <TabsTrigger value='body'>Body</TabsTrigger>
        </TabsList>
        <TabsContent value='params'>Parameter</TabsContent>
        <TabsContent value='authorization'>Auth</TabsContent>
        <TabsContent value='headers'>Headers</TabsContent>
        <TabsContent value='body'>
          <div className='h-96 w-full flex flex-col gap-5 border-2 border-gray-800 rounded'>
            <Editor defaultLanguage='json' theme='vs-dark' options={options} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PageRequest;
