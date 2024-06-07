import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
// import Home from './components/Home/home'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header />
        //outlet allows you to change only its content
        <Outlet/>
        <Footer />
    </>
  )
}

export default Layout
