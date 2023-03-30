import React, {useContext, useState} from 'react'
import {Navbar} from '../Navbar'
import {MenuButton} from '../MenuButton'
import logo from './../../assets/images/r4clogo.png'
import avatar from './../../assets/images/usuario.png'
import './style.css';
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import Overlay from '../Overlay/Overlay'

const Header = () => {
  
    const {user, logout, setReservaUsuario, setOpenMenu} = useContext(UserContext);
    
    const [open, setOpen] = useState(false);

    const handleClick = () => {
    setOpen(!open);
    setReservaUsuario(false)

      !open
      ?
      setOpenMenu(true)
      :
      setOpenMenu(false)

    };

  return (
    <header>
      <Link className='logoDH' to='/rent4cars'>
        <img src={logo} alt='logo Digital Booking'/>
        <p className='eslogan'>Movilizate a tu gusto</p>
      </Link>
      <Overlay/>

      {user? 
      <div className='usuario-actual'>
        <img className='avatar' src={avatar}/>
        <div>
        <p>Hola {user.nombre}!</p>
        <div className='cerrar-sesion'>
          <p onClick={logout}>Cerrar Sesión</p>
        </div>
        </div>
      </div>:
      <div>
        <div><Navbar open={open} handleClick={handleClick}/></div>
        <MenuButton className="menuButton" open={open} handleClick={handleClick}/>
      </div>}

    </header>
  )
}

export {Header}