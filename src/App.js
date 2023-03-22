import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Registro } from './components/Registro';
import Producto from './components/Producto/Producto';
import { UserProvider } from './contexts/UserContext';
import { NotFoundPage } from './components/NotFoundPage';
import Reserva from './components/Reserva/Reserva';
import ReservaExitosa from './components/ReservaExitosa/ReservaExitosa';
import AdminProducto from './components/AdminProducto/AdminProducto';


const App = () => {

  return (
    <BrowserRouter>
      <UserProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/registro" element={<Registro />} ></Route>
          <Route path="vehiculo/:id" element={<Producto />} />
          <Route path="vehiculo/:id/reserva" element={<Reserva />} ></Route>
          <Route path="*" element={<NotFoundPage />} ></Route>
          <Route path="vehiculo/:id/reserva/reservado" element={<ReservaExitosa/>}/>
          <Route path='admin' element={<AdminProducto/>}/>
        </Routes>
        <Footer></Footer>
      </UserProvider>
    </BrowserRouter>

  )
}

export default App