'use client';

import Sidebar from '@/components/sidebar';
import Sidemenu from '@/components/sidemenu';
import TabRequest from '@/components/workspace/tab-request';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-gray-900 text-gray-200 dark'>
      {/* <div className='flex flex-row min-h-screen w-screen'> */}
      <PanelGroup direction='horizontal'>
        <Panel defaultSize={10} minSize={20} className='flex'>
          <Sidemenu />
          <Sidebar className='flex-1' />
        </Panel>
        <PanelResizeHandle>
          <div className='cursor-col-resize bg-gray-700/50 hover:bg-indigo-500 h-full w-[3px] flex-grow-0 flex-shrink-0 resize-x'></div>
        </PanelResizeHandle>
        <Panel>
          <div className='flex flex-col w-full h-full'>
            <div className='h-16 bg-gray-700 flex items-center'></div>
            <TabRequest />
            <PanelGroup direction='vertical' units='pixels'>
              <Panel>
                <div className='p-3'>{children}</div>
              </Panel>
              <PanelResizeHandle>
                <div className='cursor-row-resize bg-gray-700/50 hover:bg-indigo-500 w-full h-[2px] flex-grow-0 flex-shrink-0 resize-x'></div>
              </PanelResizeHandle>
              <Panel collapsedSize={32} collapsible minSize={64} maxSize={360}>
                <div className='h-8 w-full border-t mt-auto flex px-3 items-center'>
                  <p>Response</p>
                </div>
              </Panel>
            </PanelGroup>
          </div>
        </Panel>
      </PanelGroup>
    </div>
    // </div>
  );
}
