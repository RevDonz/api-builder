'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/workspace/ui/accordion';
import { cn } from '@/lib/utils';
import { CollectionProps, DataDummy, ItemProps } from '@/types/collection';
import {
  MagnifyingGlassIcon,
  PlusIcon,
  TriangleDownIcon,
} from '@radix-ui/react-icons';
import { Button } from './workspace/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './workspace/ui/dropdown-menu';

interface DataDisplayProps {
  data: ItemProps[];
  className?: string;
}

interface ISidebar {
  className: string;
}

export default function Sidebar({ className }: ISidebar) {
  const DataItem = ({ data }: { data: CollectionProps }) => {
    return (
      <Accordion type='multiple'>
        <AccordionItem value={`collection-${data.name}`}>
          <AccordionTrigger className=''>{data.name}</AccordionTrigger>
          <AccordionContent>
            <DataRecursive data={data.items} depth={0} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };

  const DataRecursive = ({
    data,
    depth,
  }: {
    data: ItemProps[];
    depth: number;
  }) => {
    return data.map((item, index) => {
      if (item.item)
        return (
          <AccordionItem value={`items-${item.name}-${index}`} key={index}>
            <AccordionTrigger className={`pl-[${20 + 16 * depth}px]`}>
              <svg
                fill='none'
                stroke='currentColor'
                strokeWidth={1.5}
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                className='h-4 w-4 mr-3'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
                />
              </svg>
              {item.name}
            </AccordionTrigger>
            <AccordionContent>
              <DataRecursive data={item.item} depth={depth + 1} />
            </AccordionContent>
          </AccordionItem>
        );

      if (item.request)
        return (
          <button
            className={`flex pl-${
              4 * (3 + depth)
            } hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500`}
            key={index}
          >
            <p
              className={cn(
                'py-1 mr-5 w-7',
                item.request?.method === 'GET'
                  ? 'text-green-500'
                  : item.request?.method === 'POST'
                  ? 'text-yellow-500'
                  : item.request?.method === 'PUT'
                  ? 'text-blue-500'
                  : 'text-red-500'
              )}
            >
              {item.request?.method === 'DELETE' ? 'DEL' : item.request?.method}
            </p>
            <p className='py-1 text-left'>{item.name}</p>
          </button>
        );
    });
  };

  return (
    <div className={cn('bg-gray-800 h-screen', className)}>
      <div className='h-16 border-b border-gray-700/50 flex items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className='mx-3'>
            <Button variant={'ghost'}>
              My Workspace <TriangleDownIcon className='ml-3 h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='flex justify-between items-center gap-3 mx-3 my-3'>
        <div className='flex items-center rounded-md bg-gray-700/50 border hover:border-gray-600 transition p-2 w-full'>
          <MagnifyingGlassIcon className='mr-2 h-4 w-4 shrink-0 opacity-50' />
          <input
            type='text'
            className='outline-none bg-transparent text-sm w-full'
          />
        </div>

        <button className='p-2 rounded bg-gray-700 hover:bg-gray-600'>
          <PlusIcon className='h-4 w-4' />
        </button>
      </div>

      <DataItem data={DataDummy} />

      {/* <Accordion type='multiple'>
        <AccordionItem value='item-1'>
          <AccordionTrigger className=''>Toko Laku</AccordionTrigger>
          <AccordionContent>
            <AccordionItem value='item-2'>
              <AccordionTrigger className='pl-[20px]'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={1.5}
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  className='h-4 w-4 mr-3'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
                  />
                </svg>
                Account
              </AccordionTrigger>
              <AccordionContent>
                <AccordionItem value='item-3'>
                  <AccordionTrigger className='pl-[36px]'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={1.5}
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      className='h-4 w-4 mr-3'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
                      />
                    </svg>
                    Login
                  </AccordionTrigger>
                  <AccordionContent>
                    <AccordionItem value='item-4'>
                      <AccordionTrigger className='pl-[52px]'>
                        <svg
                          fill='none'
                          stroke='currentColor'
                          strokeWidth={1.5}
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          className='h-4 w-4 mr-3'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
                          />
                        </svg>
                        Login Berhasil
                      </AccordionTrigger>
                      <AccordionContent>
                        <AccordionItem value='item-5'>
                          <AccordionTrigger className='pl-[68px]'>
                            <svg
                              fill='none'
                              stroke='currentColor'
                              strokeWidth={1.5}
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                              aria-hidden='true'
                              className='h-4 w-4 mr-3'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
                              />
                            </svg>
                            Login Berhasil
                          </AccordionTrigger>
                          <AccordionContent>
                            <AccordionItem value='item-6'>
                              <AccordionTrigger className='pl-[84px]'>
                                <svg
                                  fill='none'
                                  stroke='currentColor'
                                  strokeWidth={1.5}
                                  viewBox='0 0 24 24'
                                  xmlns='http://www.w3.org/2000/svg'
                                  aria-hidden='true'
                                  className='h-4 w-4 mr-3'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
                                  />
                                </svg>
                                Login Berhasil
                              </AccordionTrigger>
                              <AccordionContent>
                                <AccordionItem value='item-7'>
                                  <AccordionTrigger className='pl-[100px]'>
                                    <svg
                                      fill='none'
                                      stroke='currentColor'
                                      strokeWidth={1.5}
                                      viewBox='0 0 24 24'
                                      xmlns='http://www.w3.org/2000/svg'
                                      aria-hidden='true'
                                      className='h-4 w-4 mr-3'
                                    >
                                      <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
                                      />
                                    </svg>
                                    Login gagal
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <AccordionItem value='item-8'>
                                      <AccordionTrigger className='pl-[116px]'>
                                        <svg
                                          fill='none'
                                          stroke='currentColor'
                                          strokeWidth={1.5}
                                          viewBox='0 0 24 24'
                                          xmlns='http://www.w3.org/2000/svg'
                                          aria-hidden='true'
                                          className='h-4 w-4 mr-3'
                                        >
                                          <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
                                          />
                                        </svg>
                                        Login Berhasil
                                      </AccordionTrigger>
                                      <AccordionContent>
                                        <button className='flex pl-40 hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500'>
                                          <p className='py-1 text-yellow-500'>
                                            POST
                                          </p>
                                          <p className='py-1 ml-5'>Login</p>
                                        </button>
                                      </AccordionContent>
                                    </AccordionItem>
                                    <button className='flex pl-36 hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500'>
                                      <p className='py-1 text-yellow-500'>
                                        POST
                                      </p>
                                      <p className='py-1 ml-5'>Login</p>
                                    </button>
                                  </AccordionContent>
                                </AccordionItem>
                                <button className='flex pl-32 hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500'>
                                  <p className='py-1 text-yellow-500'>POST</p>
                                  <p className='py-1 ml-5'>Login</p>
                                </button>
                              </AccordionContent>
                            </AccordionItem>
                            <button className='flex pl-28 hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500'>
                              <p className='py-1 text-yellow-500'>POST</p>
                              <p className='py-1 ml-5'>Login</p>
                            </button>
                          </AccordionContent>
                        </AccordionItem>
                        <button className='flex pl-24 hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500'>
                          <p className='py-1 text-yellow-500'>POST</p>
                          <p className='py-1 ml-5'>Login</p>
                        </button>
                      </AccordionContent>
                    </AccordionItem>
                    <button className='flex pl-20 hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500'>
                      <p className='py-1 text-yellow-500'>POST</p>
                      <p className='py-1 ml-5'>Register Account</p>
                    </button>
                  </AccordionContent>
                </AccordionItem>
                <button className='flex pl-16 hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500'>
                  <p className='py-1 text-green-500'>GET</p>
                  <p className='py-1 ml-5'>Get All Account</p>
                </button>
              </AccordionContent>
            </AccordionItem>
            <button className='flex pl-12 hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500'>
              <p className='py-1 w-7 mr-5 text-left text-green-500'>GET</p>
              <p className='py-1 text-left'>Get all Product</p>
            </button>
            <button className='flex pl-12 hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500'>
              <p className='py-1 w-7 mr-5 text-left text-yellow-500'>POST</p>
              <p className='py-1 text-left'>Add a Product</p>
            </button>
            <button className='flex pl-12 hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500'>
              <p className='py-1 w-7 mr-5 text-left text-red-500'>DEL</p>
              <p className='py-1 text-left'>Delete Product by Id</p>
            </button>
            <button className='flex pl-12 hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500'>
              <p className='py-1 w-7 mr-5 text-left text-blue-500'>PUT</p>
              <p className='py-1 text-left flex-none'>Update Product by Id</p>
            </button>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
    </div>
  );
}
