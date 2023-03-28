import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
/* import userdata from '../store/userdata.json' */

const UserContext = createContext();
const Users = [];
/* const currentUser = {
    email:"admin@admin.com",
    password:"123456",
    nombre:"Bruno",
    apellido:"Rodriguez"
} */

const UserProvider = ({children}) => {

    const navigate = useNavigate();

    //esto es una prueba
    const [reservaUsuario, setReservaUsuario] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    //hasta aca

    const [user, setUser] = useState(null);

    const login = (event)=>{
        event.preventDefault();
        
        const email = event.target.email.value;
        const pass = event.target.pass.value;

        /* alert(Users); */
        /* alert(JSON.stringify(Users.find(usuario => usuario.email = email))); */
        /* alert(Users.find(usuario => JSON.parse(usuario).email === email)); */
        const currentUser = JSON.parse(Users.find(usuario => JSON.parse(usuario).email === email));
        /* alert(JSON.stringify(Users.find(usuario => usuario.email = email))); */

        if (validarFormato(pass,email)&&
        email === currentUser.email &&
        pass === currentUser.password) 
        {
          setUser(currentUser);
          console.log("Logueo exitoso");   
          if(email==="admin@admin.com"){
            navigate('/admin');
          }  else{
            navigate('/');
          }
          setReservaUsuario(false)
          window.localStorage.setItem("user", JSON.stringify(currentUser));
          /* console.log(JSON.parse(window.localStorage.getItem("user"))); */
        }
        else
        {
          console.log("Por favor vuelva a intentarlo, sus credenciales son inválidas")
          Swal.fire(
            'Credenciales Inválidas',
            'Por favor vuelva a intentarlo, sus credenciales son inválidas',
            'error'
          );
        }

      }
    const logout = (event)=>{
        event.preventDefault();
        setUser(null);    
        navigate('/login');
        console.log("Sesión cerrada");
        window.localStorage.clear();
    }

    const validarFormato = (password,email)=>{
        return (password.length>5 && 
        /^\w+([--_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email));
    }
    const saveUser = (event) =>{
        event.preventDefault();
        const nombre = event.target.nombre.value;
        const apellido = event.target.apellido.value;
        const email = event.target.email.value;
        const pass1 = event.target.pass1.value;
        const pass2 = event.target.pass2.value;
        if (validarFormato(pass1,email)&&
            pass1===pass2) {
                Swal.fire(
                    'Creación exitosa',
                    'Su cuenta ha sido creada con éxito. Ya puede iniciar sesión.',
                    'success').then(function () {
                      navigate('/login');
                    });
                    
                
                  const usuario = {
                    email: email,
                    password: pass1,
                    nombre:nombre,
                    apellido:apellido
                  }
            console.log("Creación exitosa");  
            Users.push(JSON.stringify(usuario));
        }else{
            Swal.fire(
                'Formato inválido',
                'Error. Formato inválido. Por favor vuelva a intentarlo',
                'error'
              );
            console.log("Error. Formato inválido. Por favor vuelva a intentarlo");
        }
        console.log("Usuario guardado."); 
    }

    //este funciona const data = {user, login, logout, saveUser};
    const data = {user, login, logout, saveUser, reservaUsuario, setReservaUsuario, openMenu, setOpenMenu}; 

    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider};
export default UserContext;