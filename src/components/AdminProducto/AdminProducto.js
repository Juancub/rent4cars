import React, {useState} from 'react'
import HeaderProducto from '../HeaderProducto/HeaderProducto';
import cities from '../../store/cities.json';
import categorias from '../../store/categorias-autos.json'
import './adminProducto.css'
import { Link } from "react-router-dom";

const AdminProducto = () => {
    const [addImage, setAddImage] = useState(false)

    const agregarImagen = (e) => {
        e.preventDefault();
        setAddImage(true)
    }

    return (
    <div className='adminCrear'>
        <HeaderProducto nombreProducto={"Administración"}/>
        <h3 className='tituloCrear'>Crear vehiculo</h3>
        <form className='formCrearVehiculo'>

        <div className='contenedorProducto'>
        <label >
            Nombre del vehiculo: 
                <input type="text" name="name" placeholder='Chevrolet Onix turbo sedan'/>
            </label>

            <label >
            Categoria: 
                <select className='asignarCategoria' defaultValue="default">
                    <option className='optionDefault' value="default" disabled>Seleccionar categoria</option>
                    {
                        categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.categoria}>
                                {categoria.categoria}
                            </option>
                        ))
                    }
                </select>
            </label>

            <label >
            Ciudad: 
                <select className='asignarCiudad' defaultValue="default">
                    <option className='optionDefault' value="default" disabled>Seleccionar ciudad</option>
                    {
                        cities.map((city) => (
                            <option key={city.id} value={city.name}>
                                {city.name}
                            </option>
                        ))
                    }
                </select>
            </label>

            <label >
                Dirección: 
                <input type="text" name="crearDireccion" placeholder='Av. El Dorado #103-9'/>
            </label>

            <label >
                Imagenes: 
                <input type="text" name="crearImagenes" placeholder='https://www.imagenes...'/>
                {
                    addImage
                    ?
                    <input type="text" name="crearImagenes" placeholder='https://www.imagenes...'/>
                    :
                    null
                }
                
                <button className='agregarImagen' onClick={agregarImagen}>+</button>
            </label>
        </div>
            
            <h4>Caracteristicas</h4>
            <div className='contenedorCaracteristicas'>
                
                <label >
                    Puertas: 
                    <input type="number" name="puertas" placeholder='4'/>
                </label>
                <label >
                    Puestos: 
                    <input type="number" name="puestos" placeholder='5'/>
                </label>
                <div className='crearAire'>
                    <label>
                        Aire acondicionado: 
                        <input type="checkbox" name="aireAcondicionado"/>
                    </label>
                </div>
                
                    <label >
                        Caja: 
                        <div className='crearCajaMecanica'>
                            <input type="radio" name="caja" value="cajaMecanica" id='cajaMecanica'/>
                            <label for="cajaMecanica"> Mecanica</label>
                        </div>
                        <div className='crearCajaAutomatica'>
                            <input type="radio" name="caja" value="cajaAutomatica" id='cajaAutomatica'/>
                            <label for="cajaAutomatica"> Automatica</label>
                        </div>                        
                    </label>
                <label >
                    Cilindraje: (CC)
                    <input type="number" name="cilindraje" placeholder='998'/>
                </label>
                
            </div>
            
            <h4>Politicas</h4>
            <div className='contenedorPoliticas'>
                
                <label >
                    Politica de edad: 
                    <textarea
                        rows={7}
                        placeholder = "escriba aqui"
                    />
                </label>
                <label >
                    Politica de la licencia: 
                    <textarea
                        rows={7}
                        placeholder = "escriba aqui"
                    />
                </label>
                <label >
                    Politica de la identificacion: 
                    <textarea
                        rows={7}
                        placeholder = "escriba aqui"
                    />
                </label>
                <label >
                    Politica del voucher: 
                    <textarea
                        rows={7}
                        placeholder = "escriba aqui"
                    />
                </label>
                <label >
                    Mas informacion: 
                    <textarea
                        rows={7}
                        placeholder = "escriba aqui"
                    />
                </label>
            </div>
            <Link className='botonCrearVehiculo' to={"/"}><button>Crear</button></Link>
        </form>
    </div>
  )
}

export default AdminProducto