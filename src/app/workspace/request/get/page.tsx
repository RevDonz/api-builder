'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/workspace/ui/button';
import { Input } from '@/components/workspace/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/workspace/ui/select';
import Editor, { useMonaco } from '@monaco-editor/react';
import axios from 'axios';
import { useState } from 'react';

const RequestGet = () => {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');

  const sendRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse('');
    try {
      const res = await axios({
        method: method,
        url: url,
      });
      setResponse(JSON.stringify(res, null, '\t'));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const mon = useMonaco();

  const options = {
    minimap: { enabled: false },
    formatOnPaste: true,
    // readOnly: true,
    domReadOnly: true,
  };

  const handleMount = () => {
    mon?.editor.defineTheme('my-theme', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#111111',
      },
    });
    mon?.editor.setTheme('my-theme');
  };

  return (
    <div className='flex flex-col'>
      <form onSubmit={sendRequest} className='flex items-center justify-center'>
        <Select onValueChange={(value) => setMethod(value)}>
          <SelectTrigger className='rounded-l-md w-32 mr-[1px]'>
            <SelectValue placeholder='Method' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              value='get'
              className='text-green-500 hover:text-red-500'
            >
              GET
            </SelectItem>
            <SelectItem value='post' className='text-yellow-500'>
              POST
            </SelectItem>
            <SelectItem value='delete' className='text-red-500'>
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
          <div className='h-96 w-full flex flex-col gap-5 mt-5 border-2 border-gray-800 rounded'>
            <Editor
              defaultLanguage='json'
              theme='vs-dark'
              value={response}
              options={options}
              onMount={handleMount}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RequestGet;
