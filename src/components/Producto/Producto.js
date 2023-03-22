import React from 'react'
import DescripcionProducto from '../DescripcionProducto/DescripcionProducto'
import FeaturesProducto from '../FeaturesProducto/FeaturesProducto'
import HeaderProducto from '../HeaderProducto/HeaderProducto'
import ImagenesProducto from '../ImagenesProducto/ImagenesProducto'
import NavUbicacionProducto from '../NavUbicacionProducto/NavUbicacionProducto'
import RequisitosProducto from '../RequisitosProducto/RequisitosProducto'
import data from '../../store/vehiculo.json';
import { useParams } from 'react-router-dom'
import CalendarProducto from '../CalendarProducto/CalendarProducto'
import "./producto.css"

const Producto = () => {
    const { id } = useParams();
    const { title, category, location, description, features, requisites } = data[Number(id) - 1];
    return (
        <div className='productoVehiculoDiv'>
            <HeaderProducto nombreProducto={title} categoria={category} />
            <NavUbicacionProducto ciudad={location[0].city} pais={location[0].country} direccion={location[0].adress} />
            <section className='productoVehiculo'>
                <ImagenesProducto id={id}/>
                <DescripcionProducto titulo={description[0].title} beneficios={description[0].benefit} />
                <FeaturesProducto puertas={features[0].puertas} puestos={features[0].puestos} aire={features[0].aireAcondicionado} cajaM={features[0].cajaMecanica} cajaA={features[0].cajaAutomatica} cilindraje={features[0].cilindraje} />
                <CalendarProducto id = {id}/>
                <RequisitosProducto edad={requisites[0].edad} licencia={requisites[0].licencia} ident={requisites[0].identificacion} voucher={requisites[0].voucher} garantia={requisites[0].garantia} info={requisites[0].info} />
            </section>    
        </div>
    )
}

export default Producto