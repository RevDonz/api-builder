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

import { Input } from '@/components/workspace/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/workspace/ui/select';
import { getAllCollectionsData } from '@/lib/fetch';
import { collectionsAtom, responseAtom } from '@/store/store';
import { MethodType } from '@/types/collection';
import { Editor } from '@monaco-editor/react';
import axios from 'axios';
import { useAtom, useSetAtom } from 'jotai';

import { useEffect, useState } from 'react';

const FormRequest = ({ params }: { params: { slug: string } }) => {
  const [method, setMethod] = useState<MethodType>('GET');
  const [url, setUrl] = useState('');

  const setResponse = useSetAtom(responseAtom);
  const [collections, setCollections] = useAtom(collectionsAtom);

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

  const getAllData = async () => {
    const res = await getAllCollectionsData(
      '5a4f2e4f-4692-4fc9-8767-8d08f6e72d17'
    );
    setCollections(res);
  };

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    let found = false;

    collections.forEach((collection) => {
      collection.items.forEach((request) => {
        if (!found && params.slug === request.id) {
          setMethod(request.method);
          setUrl(request.url);
          found = true;
        }
      });
    });
  }, [collections, params.slug]);

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

export default FormRequest;
