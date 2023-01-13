import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'


import './App.scss'

import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Brand from './pages/Brand/Brand'
import NotFound from './pages/NotFound/NotFound'



function App() {

  const theme = useSelector((state) => state.theme.theme);



  // localStorage.setItem('theme', theme);

  // const getTheme = () => {
  //   if (typeof window !== 'undefined') {
  //     const saved = localStorage.getItem('theme');
  //     const initial = saved !== null ? JSON.parse(saved) : theme;
  //     return initial;
  //   }
  // }

  return (
    <div className={theme}>
      <Routes>
        <Route exact path='/CocaCola' element={<Home />} />
        <Route exact path='/CocaCola/contact' element={<Contact />} />
        <Route exact path='/CocaCola/brands' element={<Brand />} />
        <Route exact path='*' element={<NotFound />} />
      </Routes>
    </div >
  )
}


export default App
