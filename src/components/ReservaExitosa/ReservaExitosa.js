import React from 'react'
import "./reservaExitosa.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const ReservaExitosa = () => {
  return (
    <main className='container-reserva-ok'>
    <section className='cardReserva'>
        <div>
        <FontAwesomeIcon className='iconoCalendar' icon={faCalendarCheck} />
        <h3>¡Muchas gracias!</h3>
        <h4>Su reserva se ha realizado con éxito</h4>
        <Link className='botonHome' to={"/rent4cars"}>OK</Link>
        </div>
    </section>
    </main>
  )
}

export default ReservaExitosa