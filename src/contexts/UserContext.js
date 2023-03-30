import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


const UserContext = createContext();
const Users = [];
const UserProvider = ({ children }) => {
const navigate = useNavigate();
const [reservaUsuario, setReservaUsuario] = useState(false)
const [openMenu, setOpenMenu] = useState(false)
const [user, setUser] = useState(null);

  const login = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    const currentUser = JSON.parse(Users.find(usuario => JSON.parse(usuario).email === email));

    if (validarFormato(pass, email) &&
      email === currentUser.email &&
      pass === currentUser.password) {
      setUser(currentUser);
      if (email === "admin@admin.com") {
        navigate('/admin');
      } else {
        navigate('/rent4cars');
      }
      setReservaUsuario(false)
      window.localStorage.setItem("user", JSON.stringify(currentUser));
    }
    else {
      Swal.fire(
        'Credenciales Inválidas',
        'Por favor vuelva a intentarlo, sus credenciales son inválidas',
        'error'
      );
    }

  }
  const logout = (event) => {
    event.preventDefault();
    setUser(null);
    navigate('/login');
    window.localStorage.clear();
  }

  const validarFormato = (password, email) => {
    return (password.length > 5 &&
      /^\w+([--_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email));
  }
  const saveUser = (event) => {
    event.preventDefault();
    const nombre = event.target.nombre.value;
    const apellido = event.target.apellido.value;
    const email = event.target.email.value;
    const pass1 = event.target.pass1.value;
    const pass2 = event.target.pass2.value;
    if (validarFormato(pass1, email) &&
      pass1 === pass2) {
      Swal.fire(
        'Creación exitosa',
        'Su cuenta ha sido creada con éxito. Ya puede iniciar sesión.',
        'success').then(function () {
          navigate('/login');
        });


      const usuario = {
        email: email,
        password: pass1,
        nombre: nombre,
        apellido: apellido
      }
      Users.push(JSON.stringify(usuario));
    } else {
      Swal.fire(
        'Formato inválido',
        'Error. Formato inválido. Por favor vuelva a intentarlo',
        'error'
      );
    }
  }

  const data = { user, login, logout, saveUser, reservaUsuario, setReservaUsuario, openMenu, setOpenMenu };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider };
export default UserContext;