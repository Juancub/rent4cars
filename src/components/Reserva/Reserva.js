import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import HeaderProducto from '../HeaderProducto/HeaderProducto';
import data from '../../store/vehiculo.json';
import "./reserva.css"
import RequisitosProducto from '../RequisitosProducto/RequisitosProducto';
import DetallesReserva from '../DetallesReserva/DetallesReserva';
import ConfirmarReserva from '../ConfirmarReserva/ConfirmarReserva';
import CalendarioReserva from '../CalendarioReserva/CalendarioReserva';
import HorarioReserva from '../HorarioReserva/HorarioReserva';

const Reserva = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const { id } = useParams();
    const { title, category, location, img, description, features, requisites } = data[Number(id) - 1];
    const [rangoFechas, setRangoFechas] = useState([null, null]);
    const [horarios, setHorarios] = useState({
        horaRecogida: "",
        horaEntrega: ""
    })
    
    return (
        <div className='templateReservaDiv'>
            <HeaderProducto nombreProducto={title} categoria={category}/>
            {console.log(useParams())}
            <section className='templateReserva'>
                <ConfirmarReserva/>
                <CalendarioReserva dateRange = {rangoFechas} setDateRange = {setRangoFechas}/>
                <HorarioReserva horarios={horarios} setHorarios={setHorarios}/>
                <DetallesReserva imagen = {img} categoria={category} nombreProducto={title} ciudad={location[0].city} pais={location[0].country} direccion={location[0].adress} dateRange={rangoFechas} horarios={horarios}/>
            </section>
            <RequisitosProducto edad={requisites[0].edad} licencia={requisites[0].licencia} ident={requisites[0].identificacion} voucher={requisites[0].voucher} info={requisites[0].info} />
            {/* <p>Reserva del vehiculo número: {id}</p> */}
        </div>
    )
}

export default Reserva