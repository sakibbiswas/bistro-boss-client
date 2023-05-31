import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import Authprovider from './Components/Providers/Authprovider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Authprovider>

        <QueryClientProvider client={queryClient}>
          <div className="max-w-screen-xl mx-auto ">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>

      </Authprovider>
    </HelmetProvider>
  </React.StrictMode>,
)
