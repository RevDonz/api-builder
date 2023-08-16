import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const RequestGet = () => {
  return (
    <div className='flex items-center justify-center'>
      <Select>
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
      />
      <Button>asd</Button>
    </div>
  );
};

export default RequestGet;
