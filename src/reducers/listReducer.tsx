import { types } from "../types/types";


export const listReducer = (state={},action:any) => {
  switch (action.type) {
    case types.add:
    return {
      list: action.payload.list
    }
  
    default:
      return state
  }
}