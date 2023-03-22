import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './style.css';

export function Registro() {

  const {saveUser} = useContext(UserContext);
  
  return (
    <section className="registro">
      <h2>Crear cuenta</h2>
      <form className='form-registro' onSubmit={saveUser}>  
        <div className="doble-campo">      
        <label>Nombre<input type="text" required name='nombre'/></label>
        <label>Apellido<input type="text" required name='apellido'/></label>
        </div>
        <label>Correo Electrónico<input required type="email" name='email'/></label>
        <label>Contraseña<input type="password" required name='pass1'/></label>
        <label>Confirmar contraseña<input type="password"required name='pass2'/></label>
        <input type="submit" value="Crear cuenta" className='btn-submit'/>
      </form>
      <p>¿Ya tienes una cuenta? <Link to='../login'>Iniciar sesión</Link></p>
    </section>
  )
}