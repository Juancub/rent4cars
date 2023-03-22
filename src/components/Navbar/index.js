import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';



const Navbar = ({ open }) => {
  // let changeNav = null;
  // open ? changeNav = "0" : changeNav = "-100";
  return (
    //<nav style={{right:changeNav, transition: "right 0.3s linear"}} className="navega">
    <nav className='navega' open={open}>
      {/* <div className='userNav'> */}
      {/* <h2 className='menuNav'>MENU</h2> */}
      <NavLink className='LinkNav' to="./registro">Crear cuenta</NavLink>
      <NavLink className='LinkNav' to="./login">Iniciar sesión</NavLink>
      {/* </div> */}
    </nav>
    //</nav>
  )
}

export { Navbar }
