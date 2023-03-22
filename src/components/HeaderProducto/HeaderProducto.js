import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import "./headerProducto.css"

const HeaderProducto = ({nombreProducto,categoria}) => {
  return (
    <div className='headerProducto'>
      <div className='categoriaProducto'>
        <h3>{categoria}</h3>
        <h2>{nombreProducto}</h2>
      </div>
      <Link className='linkBack' to={"/"}>
        <FontAwesomeIcon className='iconBack' icon={faAngleLeft} />
      </Link>
    </div>
  )
}

export default HeaderProducto