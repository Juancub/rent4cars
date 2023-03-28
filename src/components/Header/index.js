import React, {useContext, useState} from 'react'
import {Navbar} from '../Navbar'
import {MenuButton} from '../MenuButton'
import logo from './../../assets/images/logoDB.png'
import avatar from './../../assets/images/usuario.png'
import './style.css';
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import Overlay from '../Overlay/Overlay'

const Header = () => {
  
    const {user, logout, setReservaUsuario, openMenu, setOpenMenu} = useContext(UserContext);
    
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
      <Overlay/>

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
        
        {/*este funcionaba -> <div className='barra'><Navbar/></div> */}

        {/* esto es nuevo */}
        <div><Navbar open={open} handleClick={handleClick}/></div>
        {/* hasta aca */}

        <MenuButton className="menuButton" open={open} handleClick={handleClick}/>
      </div>}

    </header>
  )
}

export {Header}