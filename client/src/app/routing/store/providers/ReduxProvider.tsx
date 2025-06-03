// app/providers/ReduxProvider.tsx
import { Provider } from 'react-redux';
import { store } from '@/app/store/store';
import { ReactNode } from 'react';

export const ReduxProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);