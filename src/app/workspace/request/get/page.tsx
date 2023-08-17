'use client';
import { Button } from '@/components/workspace/ui/button';
import { Input } from '@/components/workspace/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/workspace/ui/select';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import { useState } from 'react';

const RequestGet = () => {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');

  const sendRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse('');
    await axios({
      method: method,
      url: url,
    })
      .then((res) => {
        console.log(res);
        setResponse(JSON.stringify(res, null, '\t'));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const options = {
    minimap: { enabled: false },
    formatOnPaste: true,
    readOnly: true,
    domReadOnly: true,
  };

  return (
    <div className='flex flex-col'>
      <form onSubmit={sendRequest} className='flex items-center justify-center'>
        <Select onValueChange={(value) => setMethod(value)}>
          <SelectTrigger className='rounded-l-md w-32'>
            <SelectValue placeholder='Theme' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='get' className='text-green-500'>
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
        <Button className='uppercase ml-3' type='submit'>
          send
        </Button>
      </form>
      <div className='w-full h-96 flex flex-col gap-5 mt-5'>
        <p>Response</p>
        <Editor
          defaultLanguage='json'
          theme='vs-dark'
          defaultValue='// some comment'
          value={response}
          options={options}
        />
      </div>
    </div>
  );
};

export default RequestGet;
