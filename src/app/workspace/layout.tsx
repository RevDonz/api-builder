'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import ResponseSection from '@/components/workspace/response';
import Sidebar from '@/components/workspace/sidebar';
import Sidemenu from '@/components/workspace/sidemenu';
import TabRequest from '@/components/workspace/tab-request';
import { useRouter } from 'next/navigation';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { toast } = useToast();

  return (
    <div className='bg-gray-900 text-gray-200 dark'>
      {/* <div className='flex flex-row min-h-screen w-screen'> */}
      <PanelGroup direction='horizontal'>
        <Panel defaultSize={24} minSize={15} className='flex' id={'sidebar'}>
          <Sidemenu />
          <Sidebar />
        </Panel>
        <PanelResizeHandle>
          <div className='cursor-col-resize bg-gray-700/50 hover:bg-indigo-500 h-full w-[3px] flex-grow-0 flex-shrink-0 resize-x'></div>
        </PanelResizeHandle>
        <Panel>
          <div className='flex flex-col w-full h-full'>
            <div className='h-16 bg-gray-700 flex items-center px-3 justify-end'>
              <Button
                variant={'destructive'}
                onClick={() => {
                  router.push('/login');
                  localStorage.clear();
                  toast({
                    title: 'Success',
                    description: 'Success logout',
                    variant: 'success',
                  });
                }}
              >
                Logout
              </Button>
            </div>
            <TabRequest />
            <PanelGroup direction='vertical' units='pixels'>
              <Panel>
                <div className='p-3'>{children}</div>
              </Panel>
              <PanelResizeHandle>
                <div className='cursor-row-resize bg-gray-700/50 hover:bg-indigo-500 w-full h-[2px] flex-grow-0 flex-shrink-0 resize-x'></div>
              </PanelResizeHandle>

              <ResponseSection />
            </PanelGroup>
          </div>
        </Panel>
      </PanelGroup>
    </div>
    // </div>
  );
}
