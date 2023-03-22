import React from 'react'
import "./descripcionProducto.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const DescripcionProducto = ({ titulo, beneficios }) => {
  return (
    <div className='beneficios'>
      <h2>{titulo}</h2>
      <hr className='linea' />
      <ul className='listaBeneficios'>
        {beneficios.map((beneficio, index) =>
          <div key={index} className='containerBeneficio'>
            <FontAwesomeIcon className='inconCheck' icon={faCircleCheck} />
            <li className='itemBeneficios'>{beneficio}</li>
          </div>)}
      </ul>
    </div>
  )
}

export default DescripcionProducto