import React from 'react';
import { CardCategoria } from '../CardCategoria';
import data from '../../store/categorias-autos.json';
import './style.css'

const BannerCategorias = ({values, setValues, clickToReferencia}) => {
  return (
    <section className='categorias'>
        <h2>Buscar por tipo de automóvil:</h2>
        <div className='banner-cat-autos'>
        {data.map((categoria)=>
        <CardCategoria key={categoria.id} nombre={categoria.categoria} foto={categoria.foto} altText={categoria.altText} precio={categoria.precioxdia} values={values} setValues={setValues} clickToReferencia={clickToReferencia}/>)}
        </div>
    </section>
  )
}

export {BannerCategorias}