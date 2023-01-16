import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './App.scss'

import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Brand from './pages/Brand/Brand'
import NotFound from './pages/NotFound/NotFound'

function App() {

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    console.log('localtheme', localTheme);
  })

  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={theme}>
      <Routes>
        <Route exact path='/CocaCola/' element={<Home />} />
        <Route exact path='/CocaCola/contact' element={<Contact />} />
        <Route exact path='/CocaCola/brands' element={<Brand />} />
        <Route exact path='*' element={<NotFound />} />  {/*Doesn't work with gh-pages */}
      </Routes>
    </div >
  )
}


export default App
