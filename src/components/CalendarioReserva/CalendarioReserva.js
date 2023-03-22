import React, {useEffect, useState} from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./calendarioReserva.css"

const CalendarioReserva = ({dateRange, setDateRange}) => {

    function getWindowDimensions() {
        const {innerWidth: width} = window;
        return {
            width
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    // const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //Grabar en local Storage las fechas de reserva
    // useEffect(() => {
    //     localStorage.setItem('fechasReserva', JSON.stringify(dateRange));
    // }, [dateRange]);

  return (
    <div className='calendarioReserva'>
        {/* {console.log(localStorage)} */}
        <h3>Selecciona tu fecha de reserva</h3>
        {(windowDimensions.width>624)?
        <DatePicker
        minDate={new Date()}
        showDisabledMonthNavigation
        selectsRange={true}
        dateFormat="MM/dd/yyyy"
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
                dateFormat="MM/dd/yyyy"
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                }}
                monthsShown={1}
                inline
                />
        }
    </div>
  )
}

export default CalendarioReserva