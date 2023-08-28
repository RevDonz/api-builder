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
import { Editor } from '@monaco-editor/react';

const CreatePage = ({ params }: { params: { id: string } }) => {
  console.log(params);

  const options = {
    minimap: { enabled: false },
    formatOnPaste: true,
    domReadOnly: true,
  };
  return (
    <div className='flex flex-col'>
      <form className='flex items-center justify-center'>
        <Select
          // onValueChange={(value) => setMethod(value as MethodType)}
          // value={method}
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
          // value={url}
          // onChange={(e) => setUrl(e.target.value)}
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

export default CreatePage;
