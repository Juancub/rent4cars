import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import facebook from './../../assets/images/icon-fb.png';
import linkedIn from './../../assets/images/icon-in.png';
import tweeter from './../../assets/images/icon-tw.png';
import instagram from './../../assets/images/icon-ig.png';
import { NavbarWrapper } from '../../styles/NavbarWrapper';
import UserContext from '../../contexts/UserContext';

const Navbar = ({ open, handleClick}) => {
  const {setReservaUsuario} = useContext(UserContext);

  const handleClickLogin = () => { 
    if (open) {
      handleClick()
      setReservaUsuario(false)
    } else setReservaUsuario(false)
    
  }

  return (
    <NavbarWrapper open={open}>

      <div className='userNav'>
        <h2 className='menuNav'>MENU</h2>

        <NavLink className='LinkNav' onClick={open?handleClick:null} to="./registro">Crear cuenta</NavLink>
        <NavLink className='LinkNav' onClick={handleClickLogin} to="./login">Iniciar sesión</NavLink>

        <div className='redesNav'>
            <img className='iconNav' src={facebook} alt='Facebook'/>
            <img className='iconNav' src={linkedIn} alt='LinkedIn'/>
            <img className='iconNav' src={tweeter} alt='Tweeter'/>
            <img className='iconNav' src={instagram} alt='Instagram'/>
        </div>

      </div>

    </NavbarWrapper>
  )
}

export { Navbar }
