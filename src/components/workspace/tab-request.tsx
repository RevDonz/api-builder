'use-client';
import { cn } from '@/lib/utils';
import { tabsAtom } from '@/store/tabs';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const TabRequest = () => {
  const [tabs, setTabs] = useState([
    {
      name: 'Get All Product',
      method: 'GET',
      link: '/workspace/request/get',
    },
    {
      name: 'Add a Product',
      method: 'POST',
      link: '/workspace/request/post',
    },
    {
      name: 'Delete Product by Id',
      method: 'DEL',
      link: '/workspace/request/del',
    },
  ]);
  const pathname = usePathname();

  const [tes] = useAtom(tabsAtom);

  return (
    <div className='flex border-b overflow-hidden'>
      {tabs.map((tab, index) => {
        return (
          <Link key={index} href={tab.link}>
            <div
              className={cn(
                'items-center gap-5 group flex py-3 px-2 text-sm font-medium bg-gray-900 border-b-2 border-gray-900 text-muted-foreground',
                pathname?.startsWith(tab.link) &&
                  'border-indigo-500 text-foreground'
              )}
            >
              <div className='gap-2 flex items-center'>
                <p
                  className={cn(
                    tab.method === 'GET'
                      ? 'text-green-500'
                      : tab.method === 'POST'
                      ? 'text-yellow-500'
                      : 'text-red-500'
                  )}
                >
                  {tab.method}
                </p>
                <p>{tab.name}</p>
              </div>
              <button className='rounded-md invisible group-hover:visible flex hover:bg-accent hover:text-accent-foreground h-5 w-5 items-center justify-center'>
                <Cross2Icon />
              </button>
            </div>
          </Link>
        );
      })}
      {tes?.map((data) => {
        return (
          <div
            className={cn(
              'items-center gap-5 group flex py-3 px-2 text-sm font-medium bg-gray-900 border-b-2 border-gray-900 text-muted-foreground truncate',
              pathname?.startsWith(data?.name as string) &&
                'border-indigo-500 text-foreground'
            )}
          >
            <div className='gap-2 flex items-center'>
              <p
                className={cn(
                  data?.method === 'GET'
                    ? 'text-green-500'
                    : data?.method === 'POST'
                    ? 'text-yellow-500'
                    : 'text-red-500'
                )}
              >
                {data?.method}
              </p>
              <p>{data?.name}</p>
            </div>
            <button className='rounded-md invisible group-hover:visible flex hover:bg-accent hover:text-accent-foreground h-5 w-5 items-center justify-center'>
              <Cross2Icon />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TabRequest;
