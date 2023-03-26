import React  from 'react'
import vehicles from "../../store/vehicles.json"
import Card from './../Card/Card'
import "./list.css"
// import { ListWrapper } from '../../styles/ListWrapper'

const List = ({values, forwardeRef}) => {
    
    return (
        <section className='templateLista'>
            {console.log("estamos en la lista de productos",values.location)}
            
            <div ref={forwardeRef} className='textRecomienda'>Recomendaciones</div>
            <div className='listaVehiculos'>
            {(values.location==""||values.location=="default")&&(values.category=="")
            ?
            vehicles.map((vehicle, i) => <Card key={i} id={vehicle.id} image={vehicle.img} category={vehicle.category} title={vehicle.title} location={vehicle.location} description={vehicle.description} />)
            :
            (values.location!=""&&values.location!="default")
            ?
            vehicles.filter(datos => datos.location == values.location).map((vehicle, i) => <Card key={i} id={vehicle.id} image={vehicle.img} category={vehicle.category} title={vehicle.title} location={vehicle.location} description={vehicle.description} />)
            :
            vehicles.filter(datos => datos.category == values.category).map((vehicle, i) => <Card key={i} id={vehicle.id} image={vehicle.img} category={vehicle.category} title={vehicle.title} location={vehicle.location} description={vehicle.description} />)}
            </div>
            {console.log(vehicles.filter(datos => datos.location == values.location))}
        </section>
    )
}

export default React.forwardRef((props, ref) => (
    <List {...props} forwardeRef={ref} />
));