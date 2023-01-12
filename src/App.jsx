import { Routes, Route } from 'react-router-dom'

import './App.scss'

import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Brand from './pages/Brand/Brand'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <div className="App">
        <Routes>
          <Route exact path='/CocaCola' element={<Home />} />
          <Route exact path='/CocaCola/contact' element={<Contact />} />
          <Route exact path='/CocaCola/brands' element={<Brand />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default App
