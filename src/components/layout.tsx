'use client';
import { cn } from '@/lib/utils';
import { Cross2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import Sidebar from './sidebar';
import Sidemenu from './sidemenu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
const Layout = ({ children }: { children: React.ReactNode }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(256);
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

  const startResizing = useCallback((mouseDownEvent: React.MouseEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing && sidebarRef.current) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            sidebarRef.current.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className='bg-gray-900 text-gray-200 dark'>
      <div className='flex flex-row min-h-screen w-screen'>
        <Sidemenu />
        <div
          className={`relative flex flex-grow-0 flex-shrink-0`}
          ref={sidebarRef}
          // onMouseDown={(e) => e.preventDefault()}
          style={{ width: sidebarWidth, minWidth: '256px', maxWidth: '40vw' }}
        >
          <Sidebar className='flex-1' />
          <div
            className='cursor-col-resize bg-gray-700/50 hover:bg-indigo-500 h-full w-[3px] flex-grow-0 flex-shrink-0 resize-x'
            onMouseDown={startResizing}
          ></div>
        </div>
        <div className='flex flex-col w-full'>
          <div className='h-16 bg-gray-700 flex items-center'>
            {/* <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href='/workspace' legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu> */}
          </div>
          {/* <Tabs defaultValue={tabs[0].name}>
            <div className='w-full border-b flex items-center'>
              <TabsList>
                {tabs.map((tab, index) => {
                  return (
                    <TabsTrigger value={tab.name} asChild key={index}>
                      <div className='items-center gap-5 group flex'>
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
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>
            {tabs.map((tab, index) => {
              return (
                <TabsContent value={tab.name} key={index} className='p-3'>
                  <p>{tab.method}</p>
                  <p>{tab.name}</p>
                  {children}
                </TabsContent>
              );
            })}
          </Tabs> */}
          <div className='flex border-b'>
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
          </div>
          <div className='p-3'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
