import { atom } from 'jotai';

export type TabsMenu = {
  id?: string;
  name?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
};

export type TResponseAPI = {
  response: string;
  status: number;
  responseTime: number;
  isSend: boolean;
};

export const responseAtom = atom<TResponseAPI>({
  response: '',
  status: 0,
  responseTime: 0,
  isSend: false,
});

export const tabsAtom = atom<TabsMenu[]>([]);
