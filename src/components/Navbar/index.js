import React from 'react';
import { NavLink } from 'react-router-dom';
import facebook from './../../assets/images/icon-fb.png';
import linkedIn from './../../assets/images/icon-in.png';
import tweeter from './../../assets/images/icon-tw.png';
import instagram from './../../assets/images/icon-ig.png';
// este funcionaba import './navBar.css';
// esto es nuevo
import { NavbarWrapper } from '../../styles/NavbarWrapper';
// hasta aca


const Navbar = ({ open, handleClick}) => {

  // let changeNav = null;
  // open ? changeNav = "0" : changeNav = "-100";

  return (
    //<nav style={{right:changeNav, transition: "right 0.3s linear"}} className="navega">

    //esto es nuevo v
    <NavbarWrapper open={open}>
    {/* hasta aca */}
    
    {/* este funcionaba -> <nav className='navega' open={open}> */}

      {/* esto es nuevo */}
      <div className='userNav'>
      <h2 className='menuNav'>MENU</h2>
      {/* hasta aca */}

      <NavLink className='LinkNav' onClick={handleClick} to="./registro">Crear cuenta</NavLink>
      <NavLink className='LinkNav' onClick={handleClick} to="./login">Iniciar sesión</NavLink>

      <div className='redesNav'>
          <img className='iconNav' src={facebook} alt='Facebook'/>
          <img className='iconNav' src={linkedIn} alt='LinkedIn'/>
          <img className='iconNav' src={tweeter} alt='Tweeter'/>
          <img className='iconNav' src={instagram} alt='Instagram'/>
      </div>

      {/* esto es nuevo */}
      </div>
      {/* hasta aca */}

    {/* este funcionaba -> </nav> */}

    </NavbarWrapper>
  )
}

export { Navbar }
