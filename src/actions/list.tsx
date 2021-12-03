import { types } from "../types/types"


export const list = (list:any) => {
  return{
    type: types.add,
    payload: {list}
  }
}