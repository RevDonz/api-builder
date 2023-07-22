'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { DataDummy, ItemProps } from '@/types/collection';
import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons';

interface DataDisplayProps {
  data: ItemProps[];
  className?: string;
}
export default function Sidebar() {
  const { item } = DataDummy;

  // const DataDisplay = ({ data, className }: DataDisplayProps) => {
  //   return data.map((item, index) => {
  //     console.log(index);

  //     return item.item ? (
  //       <AccordionItem value={`item-${item.name}`} key={index}>
  //         <AccordionTrigger className={cn(className)}>
  //           <svg
  //             fill='none'
  //             stroke='currentColor'
  //             strokeWidth={1.5}
  //             viewBox='0 0 24 24'
  //             xmlns='http://www.w3.org/2000/svg'
  //             aria-hidden='true'
  //             className='h-4 w-4 mr-3'
  //           >
  //             <path
  //               strokeLinecap='round'
  //               strokeLinejoin='round'
  //               d='M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
  //             />
  //           </svg>
  //           {item.name}
  //         </AccordionTrigger>
  //         <AccordionContent className={className}>
  //           {item.item && <DataDisplay data={item.item} className='pl-6' />}
  //         </AccordionContent>
  //       </AccordionItem>
  //     ) : (
  //       <div className='flex hover:bg-gray-700 py-1 px-2 pl-9'>
  //         <p
  //           className={cn(
  //             'mr-3 text-sm font-medium',
  //             item.request?.method === 'GET'
  //               ? 'text-green-500'
  //               : 'text-yellow-500'
  //           )}
  //         >
  //           {item.request?.method}
  //         </p>
  //         <p className='text-sm font-medium '>{item.name}</p>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div className='w-64 bg-gray-800 h-full'>
      <div className='flex justify-between items-center gap-3 mx-3 mb-3'>
        <div className='flex items-center rounded-md bg-gray-700/50 border hover:border-gray-600 transition p-2'>
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

      <Accordion type='multiple' className='w-full'>
        {/* <DataDisplay data={item} /> */}
        <Accordion type='multiple'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className=''>Toko Laku</AccordionTrigger>
            <AccordionContent>
              <AccordionItem value='item-2'>
                <AccordionTrigger className='pl-5'>
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
                    <AccordionTrigger className='pl-9'>
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
                <p className='py-1 w-1/4 text-left text-green-500'>GET</p>
                <p className='py-1 w-3/4 text-left'>Get all Product</p>
              </button>
              <button className='flex pl-12 hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500'>
                <p className='py-1 w-1/4 text-left text-yellow-500'>POST</p>
                <p className='py-1 w-3/4 text-left'>Add a Product</p>
              </button>
              <button className='flex pl-12 hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500'>
                <p className='py-1 w-1/4 text-left text-red-500'>DEL</p>
                <p className='py-1 w-3/4 text-left'>Delete Product by Id</p>
              </button>
              <button className='flex pl-12 hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500'>
                <p className='py-1 w-1/4 text-left text-blue-500'>PUT</p>
                <p className='py-1 w-3/4 text-left'>Update Product by Id</p>
              </button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-backend'>
            <AccordionTrigger className=''>Backend</AccordionTrigger>
            <AccordionContent>
              <AccordionItem value='item-2'>
                <AccordionTrigger className='pl-5'>
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
                    <AccordionTrigger className='pl-9'>
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
                  <div className='flex pl-16 hover:bg-gray-700'>
                    <p className='py-1 text-green-500'>GET</p>
                    <p className='py-1 ml-5'>Get All Account</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <button className='flex pl-12 hover:bg-gray-700 w-full border-l-2 border-gray-800 hover:border-gray-700 focus:border-indigo-500'>
                <p className='py-1 text-yellow-500'>POST</p>
                <p className='py-1 ml-5'>Add a Product</p>
              </button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Accordion>
    </div>
  );
}
