import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Product from './componens/Product'
import User from './componens/User'
import Home from "./componens/Home"

const App = () => {
  return (
    <div className='w-full h-screen '>
      <nav className='h-5 w-full bg-sky-100 p-5 justify-center flex gap-5 items-center '>
        <Link to="/" >Home   </Link>
        <Link to="/user" >User   </Link>
        <Link to="/product" > Product   </Link>
      </nav>
      <hr className='text-slate-800 text-2xl border-5  mb-5' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App