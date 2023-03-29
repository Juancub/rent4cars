import React, { useState } from 'react'
import cities from '../../store/cities.json';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './searcher.css';

const Searcher = ({values, setValues,clickToReferencia}) => {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    let valor = null;

    function handleSubmit(evt) {
        evt.preventDefault();

        if (valor!=null) {
            setValues({...values, location: valor})
            clickToReferencia();
        }
    }

    function handleChange(evt) {
        valor = evt.target.value;
    }


    return (
        <section className='buscadorAutos'>
            <h1 className='titleSearch'>Encuentra tu vehículo ideal, en el lugar que desees</h1>

            <form className='formulario' onSubmit={handleSubmit}>

                <select className='selectCity' name="ciudades" onClick={handleChange} defaultValue="default">
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
                <button className='botonForm' type="submit">Buscar</button>
            </form>

        </section>
    )
}

export default Searcher