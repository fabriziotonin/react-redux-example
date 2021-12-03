// Defino los types para el switch
// const SET_USERNAME = "SET_USERNAME"
// const SET_PASSWORD = "SET_PASSWORD"
const SET_CREDENTIALS = "SET_CREDENTIALS"
// 4to paso  
const SET_USER = "SET_USER"

// const setUsername = (username:string) => {
//   return{
//     type: SET_USERNAME,
//     payload:username
//   }
// }

// const setPassword = (password:string) => {
//   return{
//     type: SET_PASSWORD,
//     payload:password
//   }
// }

const setCredentials = (value:any) => {
  return{
    type: SET_CREDENTIALS,
    payload:value
  }
}
// 5to paso 
const setUser = (value:any) => {
  return{
    type: SET_USER,
    payload:value
  }
}

export{
  // SET_PASSWORD,
  // SET_USERNAME,
  SET_CREDENTIALS,
  SET_USER,
  // setUsername,
  // setPassword,
  setCredentials,
  setUser
}