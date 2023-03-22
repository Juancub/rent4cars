import React from 'react'
import door from "./../../assets/images/car-door.png"
import seat from "./../../assets/images/car-seat.png"
import snow from "./../../assets/images/snow.png"
import gearbox from "./../../assets/images/gearbox.png"
import automatic from "./../../assets/images/automatic.png"
import piston from "./../../assets/images/piston.png"
import "./featuresProducto.css"

const FeaturesProducto = ({puertas,puestos,aire,cajaM,cajaA,cilindraje}) => {
  return (
    <div className='caracteristicas'>
      <h2>Caracteristicas del vehiculo</h2>
      <hr className='linea'/>
      <section className='iconosCaracteristicas'>
        <div>
          <img className='iconoPuerta' src={door} alt="icono puerta"/>
          <p>{puertas} Puertas</p>
        </div>
        <div>
          <img src={seat} alt="icono silla"/>
          <p>{puestos} Asientos</p>
        </div>
        {aire?
          <div>
            <img src={snow} alt="icono aire acondicionado"/>
            <p>{aire}Aire acondicionado</p>
          </div>:
          null
        }
        {cajaM?
          <div>
            <img src={gearbox} alt="icono caja mecanica"/>
            <p>{cajaM}Mecanico</p>
          </div>:
          null
        }
        {cajaA?
          <div>
            <img src={automatic} alt="icono caja automatica"/>
            <p>{cajaA}Automatico</p>
          </div>:
          null
        }
        <div>
          <img src={piston} alt="icono piston"/>
          <p>{cilindraje} CC</p>
        </div>
      </section>
    </div>
  )
}

export default FeaturesProducto