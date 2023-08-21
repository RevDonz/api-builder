'use-client';
import { cn } from '@/lib/utils';
import { TabsMenu, responseAtom, tabsAtom } from '@/store/store';
import {
  Cross2Icon,
  DotsHorizontalIcon,
  PlusIcon,
} from '@radix-ui/react-icons';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const TabRequest = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [tes, setTes] = useAtom(tabsAtom);
  const [response, setResponse] = useAtom(responseAtom);

  const removeTabs = async (data: TabsMenu) => {
    const indexToRemove = tes.findIndex((item) => item.id === data.id);

    if (indexToRemove !== -1) {
      const newArray = [...tes];
      newArray.splice(indexToRemove, 1);
      setTes(newArray);
    }

    if (indexToRemove !== 0 && tes.length > 1) {
      router.push(`${tes[indexToRemove - 1].id}`);
      // console.log(tes[indexToRemove - 1].id);
    } else if (indexToRemove === 0 && tes.length > 1) {
      router.push(`${tes[1].id}`);
    } else {
      router.push(`/workspace`);
    }
    setResponse('');
  };

  return (
    <div className='flex items-center relative border-b h-12'>
      <ScrollArea>
        <div className='flex'>
          {tes?.map((data, index) => {
            return (
              <Link
                href={`/workspace/request/${data.id}`}
                key={index}
                className={cn(
                  'items-center gap-5 group flex py-3 px-2 text-sm font-medium bg-gray-900 border-b-2 border-gray-900 text-muted-foreground truncate',
                  pathname?.startsWith(`/workspace/request/${data?.id}`) &&
                    'border-indigo-500 text-foreground'
                )}
              >
                <div className='gap-2 flex items-center'>
                  <p
                    className={cn(
                      data?.method === 'GET'
                        ? 'text-green-500'
                        : data?.method === 'POST'
                        ? 'text-yellow-500'
                        : data?.method === 'PUT'
                        ? 'text-blue-500'
                        : 'text-red-500'
                    )}
                  >
                    {data?.method}
                  </p>
                  <p>{data.name}</p>
                </div>
                <button
                  className='rounded-md invisible group-hover:visible flex hover:bg-accent hover:text-accent-foreground h-5 w-5 items-center justify-center'
                  onClick={(e) => {
                    e.preventDefault();
                    removeTabs(data);
                  }}
                >
                  <Cross2Icon />
                </button>
              </Link>
            );
          })}
          <Separator orientation='vertical' />
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
      {tes.length !== 0 && <Separator orientation='vertical' />}

      <div className='mx-2 flex items-center'>
        <Button size={'icon'} variant={'ghost'}>
          <PlusIcon className='h-4 w-4 text-gray-300' />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button size={'icon'} variant={'ghost'} asChild>
              <div>
                <DotsHorizontalIcon className='text-gray-300 h-4 w-4' />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem
              onClick={() => {
                setTes([]);
                router.push('/workspace');
                setResponse('');
              }}
              disabled={tes.length === 0}
            >
              Close All Tabs
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TabRequest;
