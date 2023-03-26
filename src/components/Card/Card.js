import React from 'react'
//import { CardWrapper } from '../../styles/CardWrapper'
import { Link } from "react-router-dom";
import "./card.css"

const Card = ({image,category,title,location,description,id}) => {

    return (
        <div className='cardVehicle'>
            <div className='imagenCard'><img src={image} alt={title}/></div>
            <div className='infoCard'>
                <p className='categoryCard'>{category}</p>
                <h3 className='titleCard'>{title}</h3>
                <p className='locationCard'>{location}</p>
                <p className='descriptionCard'>{description.substr(0,110)}<span> mas...</span></p>
                <Link className='buttonCard' to={`vehiculo/${id}`}><button>ver detalle</button></Link>
            </div>
        </div>
    )
}

export default Card