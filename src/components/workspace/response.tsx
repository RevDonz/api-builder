'use client';
import OuterSpace from '@/assets/workspace/space2.svg';
import { responseAtom } from '@/store/store';
import { Editor } from '@monaco-editor/react';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Panel } from 'react-resizable-panels';

const ResponseSection = () => {
  const [response] = useAtom(responseAtom);
  const pathname = usePathname();

  const options = {
    minimap: { enabled: false },
    formatOnPaste: true,
    readOnly: true,
    domReadOnly: true,
  };
  return (
    <Panel
      collapsedSize={32}
      collapsible
      minSize={64}
      defaultSize={360}
      maxSize={720}
      className='px-3'
    >
      <div className='h-8 w-full border-t mt-auto flex items-center justify-between'>
        <div className=''>
          <p>Response</p>
        </div>
        {response.isSend && (
          <div className='flex gap-5'>
            <p>Status : {response.status}</p>
            <p>Time: {response.responseTime} ms</p>
          </div>
        )}
      </div>
      {pathname !== '/workspace' && (
        <div className=' w-full flex flex-col items-center justify-center gap-5 mt-3 rounded'>
          {response.response !== '' ? (
            <Editor
              className='border-2 border-gray-800 h-[640px]'
              defaultLanguage='json'
              theme='vs-dark'
              value={response.response}
              options={options}
              // onMount={handleMount}
            />
          ) : (
            <div className='h-[640px] flex flex-col items-center mt-10'>
              <Image src={OuterSpace} alt='Send Request' height={100} />
              <p className='mt-5'>Click Send to send request</p>
            </div>
          )}
        </div>
      )}
    </Panel>
  );
};

export default ResponseSection;
