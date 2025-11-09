
import React, { useEffect, useState } from 'react'
import Teste from './components/testes/teste'
import Home from './pages/home/index'
import './App.css'
import Header from './components/header/header'
import Profile from './components/profile/profile'
import { BrowserRouter, Routes, Route, useNavigate, HashRouter } from 'react-router-dom';
import Contato from './pages/contato/contato'
import Fotos from './pages/fotos/fotos'
import Ingressos from './pages/ingressos/ingressos'
import Detalhes from './pages/detalhes/detalhes'
import Comentarios from './components/comentarios/comentarios'
import Footer from './components/footer/footer'

function App() {

  // const navigate = useNavigate();

  // navigate("/");

  return (
    <>
      {/* <Teste></Teste> */}
      {/* <Profile/> */}
      <HashRouter>
        <Header/>
        {/* <Home></Home> */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contato' element={<Contato/>}></Route>
          <Route path='/fotos' element={<Fotos/>}></Route>
          <Route path='/ingressos' element={<Ingressos/>}></Route>
          <Route path='/detalhes/:id' element={<Detalhes/>}></Route>
          <Route path='/comentarios' element={<Comentarios/>}></Route>
        </Routes>
        <Footer/>
      </HashRouter>
    </>
  )

}

export default App
