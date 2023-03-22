import React from 'react'
import "./requisitosProducto.css"

const RequisitosProducto = ({edad,licencia,ident,voucher,garantia,info}) => {
  return (
    <div className='politicas'>
      <h2>Politicas</h2>
      <hr className='linea'/>
        <section>
          <div>
            <h3>Edad</h3>
            <p>{edad}</p>
          </div>
          <div>
            <h3>Licencia de conduccion</h3>
            <p>{licencia}</p>
          </div>
          <div>
            <h3>Identificacion</h3>
            <p>{ident}</p>
          </div>
          <div>
            <h3>Voucher</h3>
            <p>{voucher}</p>
          </div>
          <div>
            <h3>Garantia</h3>
            <p>{garantia}</p>
          </div>
          <div>
            <h3>Mas informacion</h3>
            <p>{info}</p>
          </div>
        </section>
    </div>
  )
}

export default RequisitosProducto