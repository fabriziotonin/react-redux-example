import { useState } from 'react';
import React from 'react'
import { useDispatch } from 'react-redux'
import  {LoginActions}  from "./index";

export const Login: React.FC<{}> = () => {
const [value, setValue] = useState({username:"",password:""})
const dispatch = useDispatch()


const handleChange= (e:any) => {
  setValue({...value, [e.target.name]:e.target.value})
}



//  const handleChangeUsername = (e:any) => {
//    dispatch(LoginActions.setUsername(e.target.value))
//  }
//  const handleChangePassword = (e:any) => {
//   dispatch(LoginActions.setPassword(e.target.value))
// }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    dispatch(LoginActions.setCredentials(value))
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
       name="username"
       onChange={handleChange}
        placeholder="Usuario" />
      <input type="text" 
      name="password"    
      onChange={handleChange}
       placeholder="Contraseña" />
      <button type='submit'>Enviar</button>
    </form>
  )
}

