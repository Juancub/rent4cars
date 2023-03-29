import React, {useContext,useState,useEffect} from 'react'
import UserContext from '../../contexts/UserContext';
import "./confirmarReserva.css"

const ConfirmarReserva = () => {

    const {user, logout} = useContext(UserContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('items'));
      if (items) {
        setItems(items);
      }
    }, []);

  return (
    <div className='checkDatos'>
        <h3 className='titulo'>Verifica tus datos</h3>
        <form className='verificaDatos'>
            <label >
              Nombre
              <input disabled type="text" id="name" name="name" value={user.nombre}/>
            </label>
            <label >
              Apellido
              <input disabled type="text" id="lastName" name="lastName" value={user.apellido}/>
            </label>
            <label >
              Correo Electronico
              <input disabled type="email" id="email" name="name" value={user.email}/>
            </label>
            <label >
              ciudad
              <input disabled type="text" id="city" name="name" value="Bogota"/>
            </label>
        </form>
    </div>
  )
}

export default ConfirmarReserva