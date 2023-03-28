import React, {useContext} from 'react'
import UserContext from '../../contexts/UserContext';
import "./overlay.css"

const Overlay = () => {
    const {openMenu} = useContext(UserContext);
    
    
  return (
    <div className={`${openMenu?"overlayShow":"overlay"}`}>
        {console.log("Entraste al componente Overlay",openMenu)}
    </div>
  )
}

export default Overlay