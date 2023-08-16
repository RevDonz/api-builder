'use client';

import Sidebar from '@/components/sidebar';
import Sidemenu from '@/components/sidemenu';
import TabRequest from '@/components/workspace/tab-request';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(256);

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
          onMouseDown={(e) => e.preventDefault()}
          style={{ width: sidebarWidth, minWidth: '256px', maxWidth: '40vw' }}
        >
          <Sidebar className='flex-1' />
          <div
            className='cursor-col-resize bg-gray-700/50 hover:bg-indigo-500 h-full w-[3px] flex-grow-0 flex-shrink-0 resize-x'
            onMouseDown={startResizing}
          ></div>
        </div>
        <div className='flex flex-col w-full'>
          <div className='h-16 bg-gray-700 flex items-center'></div>

          <TabRequest />
          <div className='p-3'>{children}</div>
        </div>
      </div>
    </div>
  );
}
