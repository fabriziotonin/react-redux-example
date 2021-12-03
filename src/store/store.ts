import { applyMiddleware, combineReducers,compose,createStore } from 'redux';
import thunk from 'redux-thunk';
import { LoginReducer } from '../features/login';
import { ILoginState } from '../features/login/login-interfaces';
// libreria que se encarga de manejar peticiones asyncronas y guardarlas en el store

import { authReducer } from '../reducers/authReducer';
import { listReducer } from '../reducers/listReducer';

// me permite mandar mas de un middleweare y usar react dev tools 
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const reducers = combineReducers({
  // auth: authReducer,
  // lista:listReducer,
  // Login reducer sale de index que a la vez entra a la funcion loginReducer que esta en login-reduce.ts 
  login: LoginReducer.LoginReducer

})

export interface IInitialState{login:ILoginState}
// declarando los reducers en un componente combine reducers me permite crear mas de un reducer para su uso 
export const store = createStore(reducers,composeEnhancers(
  applyMiddleware(thunk)
))