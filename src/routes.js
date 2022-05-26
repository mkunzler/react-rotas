import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import Home from './components/Home';
import About from './components/Sobre';
import User  from './components/Usuario';

export default function Rotas() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/sobre' element={<About/>} />
        <Route path='/usuario' element={<User/>} />
      </Routes>
    </BrowserRouter>
  )
}
