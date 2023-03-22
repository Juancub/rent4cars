import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './style.css';

export function Login() {

  const {login} = useContext(UserContext);
  
  return (
    <section className='login'>
      <h2>Iniciar sesión</h2>
        <form className='form-login'  onSubmit={login}>        
        <label>Correo Electrónico<input type="email" required name='email'/*  value={username} onChange={({target})=>setUsername(target.value)} */ /></label>
        <label>Contraseña<input type="password" required minLength="6" name='pass' /* value={password}  onChange={({target})=>setPassword(target.value)} */  /></label>
        <input type="submit" value="Ingresar" className='btn-submit' />
      </form>
      <p>¿Aún no tienes cuenta? <Link to='../registro'>Registrate</Link></p>
    </section>
  )
}