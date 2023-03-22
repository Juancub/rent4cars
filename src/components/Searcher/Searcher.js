import React, { useState } from 'react'
import cities from '../../store/cities.json';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './searcher.css';

const Searcher = ({values, setValues}) => {

    // const [values, setValues] = useState({
    //     location: ""
    //     // dateRange: [null,null],
    //     // startDate: new Date(),
    //     // endDate: new Date(),
    // });

    const [dateRange, setDateRange] = useState([null, null]);

    // const [dateRange, setDateRange] = React.useState([null, null]);
    const [startDate, endDate] = dateRange;
    let valor = null;

    function handleSubmit(evt) {
        console.log(values);
        setValues({...values, location: valor});
        evt.preventDefault();
    }

    function handleChange(evt) {
        console.log(evt.target.value);
        valor = evt.target.value;

        // setValues({...values, location: evt.target.value});

        // const { target } = evt;
        // const { name, value } = target;

        // const newValues = {
        //     ...values,
        //     [name]: value,
        // };

        // setValues(newValues);
    }


    return (
        <section className='buscadorAutos'>
            <h1 className='titleSearch'>Encuentra tu vehículo ideal, en el lugar que desees</h1>

            <form className='formulario' onSubmit={handleSubmit}>

                <select className='selectCity' name="ciudades" onClick={handleChange} defaultValue="default">
                    {/* <option value={-1}>¿A dónde vamos?</option> */}
                    <option value="default" disabled>Donde quieres tu vehículo</option>
                    {
                        cities.map((city) => (
                            <option key={city.id} value={city.name}>
                                {city.name}
                            </option>
                        ))
                    }
                </select>

                <DatePicker
                    modifiersClassNames={{
                        selected: 'my-selected'
                    }}
                    placeholderText="Check in - Check out"
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                        setDateRange(update);
                    }}
                    isClearable={true}
                    monthsShown={2}
                />
                {console.log(dateRange,values)}
                <button className='botonForm' type="submit">Buscar</button>
                {console.log(values)}
            </form>

        </section>
    )
}

export default Searcher