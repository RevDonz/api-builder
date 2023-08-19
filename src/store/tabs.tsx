import { atom } from 'jotai';

export type TabsMenu = {
  id?: string;
  name?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
};

export const tabsAtom = atom<TabsMenu[]>([]);
