import React, {useState} from 'react';
import {BannerCategorias} from '../BannerCategorias';
import List from '../List/List';
import Searcher from '../Searcher/Searcher';
import './style.css'

const Home = () => {
  const [values, setValues] = useState({
    location: "",
    category: ""
});

  return (
    <main className='mainHome'>
      <Searcher values={values} setValues={setValues}/>
      <BannerCategorias values={values} setValues={setValues}/>
      <List values={values}/>
    </main>
  )
}

export {Home}