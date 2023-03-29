import React, {useState, useRef, useContext} from 'react';
import {BannerCategorias} from '../BannerCategorias';
import List from '../List/List';
import Searcher from '../Searcher/Searcher';
import './style.css'

const Home = () => {

  const myRef = useRef(null);

  const [values, setValues] = useState({
    location: "",
    category: ""
});

  function clickToReferencia() {
    const targetPosition = myRef.current.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  return (
    
    <main className={'mainHome'}>
      <Searcher values={values} setValues={setValues} clickToReferencia={clickToReferencia}/>
      <BannerCategorias values={values} setValues={setValues} clickToReferencia={clickToReferencia}/>
      <List ref={myRef} values={values}/>
    </main>
  )
}

export {Home}