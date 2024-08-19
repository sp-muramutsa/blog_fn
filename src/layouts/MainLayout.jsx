import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({searchText, handleSearchText}) => {
  return (
    <>
        <NavBar searchText={searchText} handleSearchText={handleSearchText}/>
        <Outlet />    
        <ToastContainer />
    </>
  )
} 

export default MainLayout
