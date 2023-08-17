import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/workspace/ui/button';

export default function DropdownMenuResources() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='inline-flex items-center border-0 py-2 px-3 rounded hover:bg-purple-950 bg-black text-white'>
          Resources <span className='ml-2 text-2xl'>▾</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 bg-slate-700 text-white'>
        <DropdownMenuGroup>
          <DropdownMenuItem className='text-lg'>
            Help Center
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className='text-lg'>
            Blog
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className='text-lg'>
            Changelog
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className='text-lg'>
            About us
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
