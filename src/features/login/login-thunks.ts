// SE hace todos los consumos de las apis (aprobado por Fede Correa nombre-metodo: OBSERVE PATRON)

import { Action } from "redux"
import {ThunkAction } from "redux-thunk"
import { LoginActions } from "."
import { IInitialState } from "../../store/store"
import LoginService from "./login-service"

// el thunk Action se repite en todo los componentes con la misma estructura 
type AppThunk = ThunkAction<
void,
IInitialState,
unknown,
Action<string>>

export const getUsers =():AppThunk=> async (dispatch, getState) => {
    try {
      console.log(getState().login.credentials)
      // getUsers sale de la clase de los servicios de login 
      const result = await LoginService.getUsers();
      if(result.httpCode === 200){
        console.log(result.data)
        // 6to paso 
        dispatch(LoginActions.setUser(result.data))
      }
    } catch (e) {
      console.error(e)
    }
  }