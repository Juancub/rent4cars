import React, {useState, useRef, useContext} from 'react';
import {BannerCategorias} from '../BannerCategorias';
import List from '../List/List';
import Searcher from '../Searcher/Searcher';
import './style.css'
import UserContext from './../../contexts/UserContext';

const Home = () => {

  const {openMenu} = useContext(UserContext);

  const myRef = useRef(null);

  const [values, setValues] = useState({
    location: "",
    category: ""
});

  // const [referencia, setReferencia] = useState(null)

  function clickToReferencia() {
    const targetPosition = myRef.current.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

//   const scrollToRef = () => {
//   window.scrollTo({ top: myRef.current.offsetTop, behavior: 'smooth' });
// };

  return (
    
    <main className={'mainHome'}>
      {console.log(openMenu)}
      <Searcher values={values} setValues={setValues} clickToReferencia={clickToReferencia}/>
      <BannerCategorias values={values} setValues={setValues} clickToReferencia={clickToReferencia}/>
      <List ref={myRef} values={values}/>
    </main>
  )
}

export {Home}