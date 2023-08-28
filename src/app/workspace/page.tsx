'use client';
import { getAllCollectionsData } from '@/lib/fetch';
import { collectionsAtom } from '@/store/store';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

const Workspace = () => {
  const setCollections = useSetAtom(collectionsAtom);
  let userId = '';
  if (typeof window !== 'undefined') {
    userId = localStorage.getItem('userId') as string;
  }

  const getAllData = async () => {
    try {
      const res = await getAllCollectionsData(userId as string);
      setCollections(res);
    } catch (error) {
      console.error('Error fetching collections data:', error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div className='h-[85vh] w-full flex items-center justify-center'>
      Selamat Datang Di Api-Builder
    </div>
  );
};

export default Workspace;
