import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../components/Navbar.jsx'

export default function MainLayout () {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer/>
    </>
  )
}
