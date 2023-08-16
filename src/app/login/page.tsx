import LoginForm from '@/components/loginForm';
import Image from 'next/image';

export default function Login() {
  return (
    <div className='bg-gray-900 text-gray-200 dark'>
      <div className="flex">
        <div className="flex flex-grow mt-10 ml-12">
          <Image alt="logo" src="/images/logo.png" width={50} height={50}/>
          <span className="mt-3 ml-2">API Builder</span>  
        </div>
      </div>
      <main className="flex flex-col items-center justify-between py-[73px]">
        <LoginForm/>
      <p className="text-center text-[12px] mt-20">
        By clicking "Continue with Google / GitHub / Email" above, you acknowledge that you have read, understood,<br/>and agreed to Apidog's <span className="text-[#8276c9]">Terms of Service</span> and <span className="text-[#8276c9]"> Privacy Policy</span>
      </p>
      </main>
    </div>
  )
}