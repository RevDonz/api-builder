import Sidebar from './sidebar';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-gray-900 text-gray-200 dark'>
      <div className='flex flex-row min-h-screen w-screen'>
        <div className='w-20 bg-gray-700 p-1 flex flex-col justify-between items-center'>
          <div className='flex flex-col w-full gap-1'>
            <div className='p-2 flex flex-col items-center justify-center hover:bg-gray-600 rounded-md gap-1'>
              <svg
                fill='none'
                stroke='currentColor'
                strokeWidth={1.5}
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                className='h-5 w-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z'
                />
              </svg>
              <p className='text-xs'>Collection</p>
            </div>
          </div>
          <div className=''>
            <Button>Logout</Button>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <div className='bg-gray-800 h-16 flex items-center'>
            <DropdownMenu>
              <DropdownMenuTrigger className='outline-none'>
                {/* <Button variant={'ghost'}>
                    My Workspace
                    <TriangleDownIcon className=' ml-3 h-4 w-4' />
                  </Button> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className='flex flex-row h-full'>
            <Sidebar />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
