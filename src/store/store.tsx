import { AllData } from '@/components/workspace/sidebar';
import { atomWithStorage } from 'jotai/utils';

export type TabsMenu = {
  id?: string;
  name?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url?: string;
};

export type TResponseAPI = {
  response: string;
  status: number;
  responseTime: number;
  isSend: boolean;
};

// atoms

export const responseAtom = atomWithStorage<TResponseAPI>('response', {
  response: '',
  status: 0,
  responseTime: 0,
  isSend: false,
});

if (typeof window !== 'undefined') {
  var localStorageData = localStorage.getItem('tabs');
  var initialData = localStorageData ? JSON.parse(localStorageData) : [];
}
export const tabsAtom = atomWithStorage<TabsMenu[]>('tabs', initialData);

export const collectionsAtom = atomWithStorage<AllData[]>('collections', []);
