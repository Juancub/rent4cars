import React, {useContext, useState} from 'react'
import {Navbar} from '../Navbar'
import {MenuButton} from '../MenuButton'
import logo from './../../assets/images/logoDB.png'
import avatar from './../../assets/images/usuario.png'

import facebook from './../../assets/images/icon-fb.png';
import linkedIn from './../../assets/images/icon-in.png';
import tweeter from './../../assets/images/icon-tw.png';
import instagram from './../../assets/images/icon-ig.png';

import './style.css';
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom';

const Header = () => {
  
    const {user, logout} = useContext(UserContext);
    
    const [open, setOpen] = useState(false);

    const handleClick = () => {
    setOpen(!open);
    };

  return (
    <header>
      <Link className='logoDH' to='./'>
        <img src={logo} alt='logo Digital Booking'/>
        <p className='eslogan'>Movilizate a tu gusto</p>
      </Link>
      {/* <div className='redesNav'>
          <img className='iconNav' src={facebook} alt='Facebook'/>
          <img className='iconNav' src={linkedIn} alt='LinkedIn'/>
          <img className='iconNav' src={tweeter} alt='Tweeter'/>
          <img className='iconNav' src={instagram} alt='Instagram'/>
      </div> */}

      {user? 
      <div className='usuario-actual'>
        <img className='avatar' src={avatar}/>
        <div>
        <p>Hola {user.nombre}!</p>
        <div className='cerrar-sesion'>
          <p>Cerrar Sesión</p>
          <form onSubmit={logout}><input type="submit" value="X" /></form>
        </div>
        </div>
      </div>:
      <div>
        <div className='barra'><Navbar/></div>
        
        <MenuButton className="menuButton" open={open} handleClick={handleClick}/>
      </div>}

    </header>
  )
}

export {Header}