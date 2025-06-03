// client/src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@/app/routing/Router'
import { ReduxProvider } from '@/app/providers/ReduxProvider'
import { store } from '@/app/store/store'

import './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>

  </React.StrictMode>
)