import { atom } from 'jotai';

export type TabsMenu = {
  id?: string;
  name?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
};

export const responseAtom = atom<string>('');

export const tabsAtom = atom<TabsMenu[]>([]);
