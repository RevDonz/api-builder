import Image from 'next/image';
import Link from 'next/link';

const Item = ({ icon = '', label = 'label' }) => {
  return (
    <button className='inline-flex text-sm border border-[#2a2a2b] py-3 px-[95px] rounded-lg self-center mt-[20px]'>
      <div className='flex flex-row'>
        <Image alt='icon' width={20} height={20} src={icon} className='mr-2' />
        <span>{label}</span>
      </div>
    </button>
  );
};

const loginForm = () => {
  return (
    <div className='inline-flex gap-[28px] rounded-lg justify-center items-center bg-[#090910] w-[412px] h-[434px]'>
      <div>
        <form className='flex flex-col'>
          <h1 className='self-center text-[24px]'>Welcome to API Builder</h1>
          <Item icon='/google.png' label='Continue with Google' />
          <Item icon='/github.png' label='Continue with Github' />
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='py-[10px] px-2 text-white bg-[#090910] border border-[#2a2a2b] rounded-lg w-[360px] text-[12px] mt-4'
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='py-[10px] px-2 mt-3 text-white bg-[#090910] border border-[#2a2a2b] rounded-lg w-[360px] text-[12px]'
          />

          <Link href={'/workspace'}>
            <button className='bg-[#8276c9] w-[360px] h-[40px] mt-3 rounded-md text-[#181819] font-semibold'>
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default loginForm;
