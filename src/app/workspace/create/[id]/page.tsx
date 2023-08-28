'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/workspace/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/workspace/ui/select';
import { getAllCollectionsData } from '@/lib/fetch';
import {
  TabsMenu,
  collectionsAtom,
  responseAtom,
  tabsAtom,
} from '@/store/store';
import { MethodType } from '@/types/collection';
import { Editor } from '@monaco-editor/react';
import axios from 'axios';
import { useAtom, useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CreatePage = ({ params }: { params: { id: string } }) => {
  const [method, setMethod] = useState<MethodType>('GET');
  const [url, setUrl] = useState('');
  const [colName, setColName] = useState('');
  const [reqName, setReqName] = useState('');
  const [DataCollections, setDataCollections] = useAtom(collectionsAtom);

  const setResponse = useSetAtom(responseAtom);
  const [tabs, setTabs] = useAtom(tabsAtom);
  const router = useRouter();
  const { toast } = useToast();

  let userId = '';
  let token = '';
  if (typeof window !== 'undefined') {
    userId = localStorage.getItem('userId') as string;
    token = localStorage.getItem('authToken') as string;
  }

  const options = {
    minimap: { enabled: false },
    formatOnPaste: true,
    domReadOnly: true,
  };

  const handleSubmit = async () => {
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

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/request/v1`,
        {
          CollectionID: colName,
          name: reqName,
          method: method,
          bearer_token: '',
          url: url,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 201) {
        const newCollections = await getAllCollectionsData(userId as string);
        setDataCollections(newCollections);
        handleSubmit();
        const newAtom: TabsMenu = {
          id: res.data.data.id,
          name: res.data.data.name,
          method: res.data.data.method,
          url: res.data.data.method,
        };
        toast({
          title: 'Success!',
          description: 'Success add request',
          variant: 'success',
        });

        if (!tabs.some((data) => data.id === newAtom.id)) {
          const indexToRemove = tabs.findIndex((item) => item.id === params.id);

          if (indexToRemove !== -1) {
            const newArray = [...tabs];
            newArray.splice(indexToRemove, 1);
            setTabs(newArray);
          }
          setResponse({
            response: '',
            responseTime: 0,
            status: 0,
            isSend: false,
          });

          setTabs((prevState) => [...prevState, newAtom]);
          router.push(`/workspace/request/${newAtom.id}`);
        }
      }
    } catch (e) {
      toast({
        title: 'Failed!',
        description: 'Failed add request',
        variant: 'destructive',
      });
      console.log(e);
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='flex w-full'>
        <form className='flex items-center justify-center w-full'>
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
          <Button
            className='uppercase ml-3'
            variant={'secondary'}
            type='submit'
            onClick={() => handleSubmit()}
          >
            send
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button className='uppercase ml-3' variant={'default'}>
              save
            </Button>
          </DialogTrigger>
          <DialogContent className=''>
            <DialogHeader>
              <DialogTitle>Add Request</DialogTitle>
              {/* <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription> */}
            </DialogHeader>
            <form onSubmit={handleSave}>
              <div className='flex flex-col gap-4 py-4'>
                <div className='flex items-center gap-4'>
                  <label htmlFor='collection-name' className='text-right w-1/5'>
                    Collection
                  </label>

                  <Select
                    value={colName}
                    onValueChange={(value) => setColName(value)}
                  >
                    <SelectTrigger className='w-full rounded-md'>
                      <SelectValue placeholder='Collection Name' />
                    </SelectTrigger>
                    <SelectContent>
                      {DataCollections.map((data, index) => {
                        return (
                          <SelectItem value={data.id} key={index}>
                            {data.name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex items-center gap-4'>
                  <label htmlFor='collection-name' className='text-right w-1/5'>
                    Name
                  </label>
                  <Input
                    id='collection-name'
                    className='rounded-md'
                    placeholder='Request Name'
                    value={reqName}
                    onChange={(e) => setReqName(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type='submit'>Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
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

export default CreatePage;
