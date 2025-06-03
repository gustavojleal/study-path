// src/app/providers/ReduxProvider.tsx
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

interface ReduxProviderProps {
  children: ReactNode;
  store: Store;
}

export const ReduxProvider = ({ children, store }: ReduxProviderProps) => (
  <Provider store={store}>
    {children}
  </Provider>
);