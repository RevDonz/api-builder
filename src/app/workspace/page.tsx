'use client';
import { getAllCollectionsData } from '@/lib/fetch';
import { collectionsAtom } from '@/store/store';
import { useSetAtom } from 'jotai';
import type { Metadata } from 'next';
import { useEffect } from 'react';

export const metadata: Metadata = {
  title: 'Workspace',
};
const Workspace = () => {
  const setCollections = useSetAtom(collectionsAtom);

  const getAllData = async () => {
    const res = await getAllCollectionsData(
      '5a4f2e4f-4692-4fc9-8767-8d08f6e72d17'
    );

    setCollections(res);
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
