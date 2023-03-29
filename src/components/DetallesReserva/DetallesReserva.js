import React, {useState, useEffect} from 'react'
import "./detallesReserva.css"
import { Link } from "react-router-dom"

const DetallesReserva = ({imagen, categoria, nombreProducto, ciudad, pais, direccion,dateRange,horarios}) => {
  let fechaInicio = new Date(dateRange[0])
  let fechaFin = new Date(dateRange[1])
  const [fechasReserva, setfechasReserva] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('fechasReserva'));
    if (fechasReserva) {
    setfechasReserva(fechasReserva);
    }
  }, []);

  return (
    <section className='cardDetalles'>
      <h3>Detalles del alquiler</h3>
      <div className='infoDetalles'>
        <div className='imagenDetalles'><img src={imagen} alt=""/></div>
        <div className='detallesInfoCar'>
          <p>{categoria}</p>
          <h3>{nombreProducto}</h3>
          <p>{ciudad}, <span>{pais}</span></p>
          <p>{direccion}</p>
          <hr className ="lineaReserva"></hr>
          <p className='pCheck'>Check in: 
            {fechaInicio.getFullYear()>2000?
            <span>{fechaInicio.getDate()}/{fechaInicio.getMonth()+1}/{fechaInicio.getFullYear()}<span><span className='spanCheck'>|</span>{horarios.horaRecogida=="default"?"--:--":horarios.horaRecogida}</span></span>
            :
            <span>--/--/--<span className='spanCheck'>|</span><span>--/--/--</span></span>
            }
            
          </p>
          <hr className ="lineaReserva"></hr>
          <p className='pCheck'>Check out: 
            {fechaFin.getFullYear()>2000?
            <span>{fechaFin.getDate()}/{fechaFin.getMonth()+1}/{fechaFin.getFullYear()}<span><span className='spanCheck'>|</span> {horarios.horaEntrega=="default"?"--:--":horarios.horaEntrega}</span></span>
            :
            <span>--/--/--<span className='spanCheck'>|</span><span>--/--/--</span></span>
            }
          </p>
          <hr className ="lineaReserva"></hr>
          {(fechaInicio.getFullYear()>2000 && fechaFin.getFullYear()>2000)&&((horarios.horaEntrega != "" && horarios.horaEntrega != "default") && (horarios.horaRecogida != "" && horarios.horaEntrega != "default"))
          ?
          <Link className='botonReservar' to={`reservado`}><button>Confirmar Alquiler</button></Link>
          :
          <div>
            <div className='botonReservar'><button>Confirmar Alquiler</button></div>
            <p className='faltanDatos'>Por favor ingresar las fechas y las horas de alquiler para confirmar la reserva</p>
          </div>
          }
        </div>
      </div>
    </section>
  )
}

export default DetallesReserva