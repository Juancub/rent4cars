import React, {useState, useEffect} from 'react'
import "./detallesReserva.css"
import { Link } from "react-router-dom"

const DetallesReserva = ({imagen, id, categoria, nombreProducto, ciudad, pais, direccion,dateRange,horarios}) => {
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
      {/* {console.log("esta es la fecha de local storage",fechasReserva)} */}
      {/* {console.log(dateRange[0].toLocaleDateString())} */}
      {/* {console.log(dateRange[0])} */}
      {console.log("fecha de fin",fechaFin.toDateString())}
      <h3>Detalles del alquiler</h3>
      <div className='infoDetalles'>
        <div className='imagenDetalles'><img src={imagen} alt=""/></div>
        <div>
          <p>{categoria}</p>
          <h3>{nombreProducto}</h3>
          <p>{ciudad}, <span>{pais}</span></p>
          <p>{direccion}</p>
          <hr className ="lineaReserva"></hr>
          <p>Check in: 
            {fechaInicio.getFullYear()>2000?
            <span>{fechaInicio.getDate()}/{fechaInicio.getMonth()+1}/{fechaInicio.getFullYear()}</span>
            :
            <span>--/--/--</span>
            }

            {/* {fechaInicio.getDate()}/{fechaInicio.getMonth()+1}/{fechaInicio.getFullYear()} */}
            
          </p>
          <hr className ="lineaReserva"></hr>
          <p>Check out: 
            {fechaFin.getFullYear()>2000?
            <span>{fechaFin.getDate()}/{fechaFin.getMonth()+1}/{fechaFin.getFullYear()}</span>
            :
            <span>--/--/--</span>
            }
          </p>
          <hr className ="lineaReserva"></hr>
          {(fechaInicio.getFullYear()>2000 && fechaFin.getFullYear()>2000)&&(horarios.horaEntrega != "" && horarios.horaRecogida != "")
          ?
          <Link className='botonReservar' to={`reservado`}><button>Confirmar Alquiler</button></Link>
          :
          <Link className='botonReservar' to={`../login`}><button>Confirmar Alquiler</button></Link>}
          {/* <button onClick={handleReservar} className='botonReservar'>Confirmar Alquiler</button> */}
        </div>
      </div>
    </section>
  )
}

export default DetallesReserva