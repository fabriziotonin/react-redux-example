import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from './actions/auth';
import { list } from './actions/list';
import { LoginThunks } from './features/login';
import { Login } from './features/login/Login';

function App() {
const [contador, setContador] = useState(0)

// El dispatch es el que se encarga de guardar la info en el store de redux 
  const dispatch = useDispatch();

// const handleTest = () => {
//   dispatch(login("123123","Hola mundo"))
// }
// const handleList = () => {
//   setContador(contador+1)
//   dispatch(list(contador))
// }

const handleGetUsers = () => {
  dispatch(LoginThunks.getUsers())
}

  return (
    <div >
      Hola Mundo
      {/* <button onClick={handleTest}>Test</button>
      <button onClick={handleList}>Agregar a lista</button> */}
      <button onClick={handleGetUsers}>Agregar a lista</button> 
      <br />
      <Login/>
    </div>
  );
}

export default App;
