'use client';

import Sidebar from '@/components/sidebar';
import Sidemenu from '@/components/sidemenu';
import TabRequest from '@/components/workspace/tab-request';
import { responseAtom } from '@/store/store';
import { Editor, useMonaco } from '@monaco-editor/react';
import { useAtom } from 'jotai';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [response] = useAtom(responseAtom);

  const options = {
    minimap: { enabled: false },
    formatOnPaste: true,
    readOnly: true,
    domReadOnly: true,
  };
  const mon = useMonaco();

  const handleMount = () => {
    mon?.editor.defineTheme('my-theme', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#111111',
      },
    });
    mon?.editor.setTheme('my-theme');
  };

  return (
    <div className='bg-gray-900 text-gray-200 dark'>
      {/* <div className='flex flex-row min-h-screen w-screen'> */}
      <PanelGroup direction='horizontal'>
        <Panel defaultSize={24} minSize={15} className='flex' id={'sidebar'}>
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
              <Panel
                collapsedSize={32}
                collapsible
                minSize={64}
                defaultSize={360}
                maxSize={360}
                className='px-3'
              >
                <div className='h-8 w-full border-t mt-auto flex items-center'>
                  <p>Response</p>
                </div>
                <div className='h-96 w-full flex flex-col gap-5 mt-3 border-2 border-gray-800 rounded'>
                  <Editor
                    defaultLanguage='json'
                    theme='vs-dark'
                    value={response}
                    options={options}
                    onMount={handleMount}
                  />
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
