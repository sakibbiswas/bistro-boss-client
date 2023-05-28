import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import Authprovider from './Components/Providers/Authprovider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Authprovider>
        <div className="max-w-screen-xl mx-auto ">
          <RouterProvider router={router} />
        </div>
      </Authprovider>
    </HelmetProvider>
  </React.StrictMode>,
)
