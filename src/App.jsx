import React from 'react'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage/HomePage'
import AppRoutes from './routes/routes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


export default function App() {
  return (
    <div>
      <MainLayout>
        <AppRoutes />
      </MainLayout>

      <ToastContainer />
    </div>
  )
}
