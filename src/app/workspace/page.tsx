import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workspace',
};
const Workspace = () => {
  return (
    <div className='h-[85vh] w-full flex items-center justify-center'>
      Selamat Datang Di Api-Builder
    </div>
  );
};

export default Workspace;
