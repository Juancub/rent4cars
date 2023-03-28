import React, {useState,useEffect,useContext} from 'react';
import "./CalendarProducto.css";
import UserContext from '../../contexts/UserContext';
import DatePicker from 'react-datepicker';
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const CalendarProducto = ({id}) => {

    const {user, logout, setReservaUsuario} = useContext(UserContext);
    const [items, setItems] = useState([]);

    function getWindowDimensions() {
        const {innerWidth: width} = window;
        return {
            width
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <div className='calendarProducto'>
            
            <h2>Fechas disponibles</h2>
            <section className='sectionReserva'>
            {(windowDimensions.width>624)?
                <DatePicker
                    minDate={new Date()}
                    showDisabledMonthNavigation
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                        setDateRange(update);
                    }}
                    monthsShown={2}
                    inline
                />
            :
                <DatePicker
                    minDate={new Date()}
                    showDisabledMonthNavigation
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                        setDateRange(update);
                    }}
                    monthsShown={1}
                    inline
                />
            }
                <div className='reservar'>
                    <p>Agrega tus fechas de alquiler para obtener precios exactos</p>
                    {/* <button>Iniciar reserva</button> */}
                    {/* {(fechaInicio.getFullYear()>2000 && fechaFin.getFullYear()>2000)&&(horarios.horaEntrega != "" && horarios.horaRecogida != "") */}
                    {user != null
                    ?
                    <Link className='botonIniciraReserva' to={`reserva`}><button>Confirmar Alquiler</button></Link>
                    :
                    <Link onClick={setReservaUsuario(true)} className='botonIniciraReserva' to={`../login`}><button>Confirmar Alquiler</button></Link>}
                    {/* <Link className='botonIniciraReserva' to={`reserva`}><button>Iniciar reserva</button></Link> */}
                </div>
            </section>
            
        </div>
    )
}

export default CalendarProducto