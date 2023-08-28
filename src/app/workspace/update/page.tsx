'use client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/workspace/ui/input';
import { getAllCollectionsData } from '@/lib/fetch';
import { collectionsAtom } from '@/store/store';
import axios from 'axios';
import { useAtom } from 'jotai';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

const UpdateCollection = () => {
  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const name = searchParams.get('name');
  const [nameUpdate, setNameUpdate] = useState(name as string);
  let userId = '';
  let token = '';
  if (typeof window !== 'undefined') {
    userId = localStorage.getItem('userId') as string;
    token = localStorage.getItem('authToken') as string;
  }
  const [DataCollections, setDataCollections] = useAtom(collectionsAtom);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/collection/v1/${id}`,
        {
          name: nameUpdate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        const res = await getAllCollectionsData(userId as string);
        setDataCollections(res);
        toast({
          title: 'Success!',
          description: 'Success update collection',
          variant: 'success',
        });
        router.back();
      }
    } catch (e) {
      toast({
        title: 'Failed!',
        description: 'Failed update collection',
        variant: 'destructive',
      });
      console.log(e);
    } finally {
      setNameUpdate('');
    }
  };

  return (
    <div className=''>
      <form
        className='max-w-screen-sm flex flex-col gap-5'
        onSubmit={handleSubmit}
      >
        <label htmlFor='email'>Collection Name</label>
        <Input
          type='text'
          id='nameUpdate'
          className='mt-1 rounded-md'
          value={nameUpdate}
          onChange={(e) => setNameUpdate(e.target.value)}
        />
        <div className=''>
          <Button type='submit'>Update</Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCollection;
