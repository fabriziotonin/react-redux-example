import { types } from "../types/types"
//  aqui es donde se define las acciones cuando se los llama en el dispatch 
export const login = (uid:string,displayName:string) => {
  return{
    type: types.login,
    payload:{
      uid,
      displayName
    }
  }
}