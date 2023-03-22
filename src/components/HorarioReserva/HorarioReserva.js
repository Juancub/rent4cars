import React, {useState} from 'react'
import "./horarioReserva.css"

const HorarioReserva = ({horarios, setHorarios}) => {
    const horario = ["1:00am","2:00am","3:00am","4:00am","5:00am","6:00am","7:00am","8:00am","9:00am","10:00am","11:00am","12:00pm","1:00pm","2:00pm","3:00pm","4:00pm","5:00pm","6:00pm","7:00pm","8:00pm","9:00pm","10:00pm","11:00pm","12:00am"]
    // const [horarios, setHorarios] = useState({
    //     horaRecogida: "",
    //     horaEntrega: ""
    // })

    const handleHoraRecogida = (evt) => {
        setHorarios({...horarios, horaRecogida: evt.target.value});
    } 

    const handleHoraEntrega = (evt) => {
        setHorarios({...horarios, horaEntrega: evt.target.value});
    } 

    return (
    <div className='horarioReserva'>
        <h3>Horario de reserva</h3>
        <section className='formHorario'>
            <p>Seleccione el horario de recogida y devolución de vehículo</p>
            <form className='formHora'>
                <label>
                    Hora de recogida
                    <select className='selectHorario' defaultValue="default" onClick={handleHoraRecogida} id='horaRecogida'>
                        <option className='optionDefault' value="default" disabled>Seleccionar hora</option>
                        {
                            horario.map((hora,i) => (
                                <option value={hora} key={i}>
                                        {hora}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    Hora de entrega
                    <select className='selectHorario' defaultValue="default" onClick={handleHoraEntrega} id='horaEntrega'>
                        <option value="default" disabled>Seleccionar hora</option>
                        {
                            horario.map((hora,i) => (
                                <option value={hora} key={i}>
                                        {hora}
                                </option>
                            ))
                        }
                    </select>
                    {console.log(horarios)}
                </label>
            </form>
        </section>
    </div>
  )
}

export default HorarioReserva