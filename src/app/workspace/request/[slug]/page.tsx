'use client';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DataCollection, DataRequest } from '@/components/workspace/sidebar';
import { Input } from '@/components/workspace/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/workspace/ui/select';
import { responseAtom, tabsAtom } from '@/store/store';
import { DataDummy, ItemProps } from '@/types/collection';
import { Editor } from '@monaco-editor/react';
import axios from 'axios';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

const PageRequest = ({ params }: { params: { slug: string } }) => {
  // const [request, setRequest] = useState<ItemProps>();
  const [tes] = useAtomValue(tabsAtom);
  const [method, setMethod] = useState(tes.method);
  const [url, setUrl] = useState(tes.url);

  const setResponse = useSetAtom(responseAtom);

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
          setMethod(item.request.method);
        }
      }
    });
  };

  const sendRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse({
      response: '',
      responseTime: 0,
      status: 0,
      isSend: false,
    });

    try {
      const startTime = new Date();
      const res = await axios({
        method: method,
        url: url,
      });
      const endTime = new Date(); // Waktu setelah respons diterima
      const elapsed = endTime.getTime() - startTime.getTime();

      setResponse({
        response: JSON.stringify(res, null, '\t'),
        responseTime: elapsed,
        status: res.status,
        isSend: true,
      });
    } catch (error: any) {
      setResponse(error.response.data);
    }
  };

  const options = {
    minimap: { enabled: false },
    formatOnPaste: true,

    domReadOnly: true,
  };

  const getDataCollections = async () => {
    const res = await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/collection/v1/5a4f2e4f-4692-4fc9-8767-8d08f6e72d17`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTMwMzM1NTIsInVzZXJJRCI6IjVhNGYyZTRmLTQ2OTItNGZjOS04NzY3LThkMDhmNmU3MmQxNyJ9.Xb_bRGoxXNZcVzUELL-d4EJFRttIaVk4MS_ZW1Xd5Ag',
        },
      }
    );

    return res.data.data;
  };

  const getAllData = async (data: DataCollection[]) => {
    data.map((col) => {
      getDataRequest(col.id).then((data) => {
        data.data.data.map((tes: DataRequest) => {
          if (params.slug === tes.id) {
            setMethod(tes.method);
            setUrl(tes.url);
          }
        });
      });
    });
  };

  const getDataRequest = async (collectionID: string) => {
    const res = await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/request/collection/v1/${collectionID}`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTMwMzM1NTIsInVzZXJJRCI6IjVhNGYyZTRmLTQ2OTItNGZjOS04NzY3LThkMDhmNmU3MmQxNyJ9.Xb_bRGoxXNZcVzUELL-d4EJFRttIaVk4MS_ZW1Xd5Ag',
        },
      }
    );

    return res;
  };

  useEffect(() => {
    GetData();
    getDataCollections().then((data) => getAllData(data));
  }, []);
  type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';
  return (
    <div className='flex flex-col'>
      <form onSubmit={sendRequest} className='flex items-center justify-center'>
        <Select
          onValueChange={(value) => setMethod(value as MethodType)}
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
        <TabsContent value='params'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Key</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className='font-medium'>INV001</TableCell>
                <TableCell>
                  <input
                    type='text'
                    className='bg-transparent outline-none border border-transparent focus:border-gray-7 00 p-1 w-full'
                    placeholder='key'
                  />
                </TableCell>
                <TableCell>Credit Card</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
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
