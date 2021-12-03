import { SET_CREDENTIALS, SET_USER } from "./login-actions";
import { ILoginState } from "./login-interfaces";
// =================STATE MULTIPLE ======================
// el estado siempre inicaliza con lo que va a llevar y con typescript le defino que interface tendra
const initialState:ILoginState = {
	credentials: {
		username: "",
		password: "",
	},
  // 1er paso 
	user: {
		completed: false,
		id: 0,
		title: "",
		userId: 0,
	},
};

// Se guarda multiples valores de un mismo state del store (ILOGINSTATE ES MI INTERFACE)
export const LoginReducer = (state: ILoginState, action: any) => {
	state = state ? state : initialState;
	switch (action.type) {
		case SET_CREDENTIALS:
			return {
				...state,
				credentials: action.payload,
			};
      // 3er paso 
      case SET_USER:
        return {
          ...state,
          user: action.payload,
        };

		default:
			return state;
	}
};

// ======================STATE POR SEPARADO =================

// import { SET_PASSWORD, SET_USERNAME } from "./login-actions";
// import {SET_CREDENTIALS } from "./login-actions";

// el estado siempre inicaliza con lo que va a llevar
// const initialState = {
//   username:"",
//   password:""
// }

// Se importan los valores por separado y se los despacha a cada state del store
// export const LoginReducer = (state:any,action:any) => {
//   state = state ? state:initialState
//   switch (action.type) {
//     case SET_USERNAME:
//       return{
//         ...state,
//         username: action.payload
//       }
//       case SET_PASSWORD:
//         return{
//           ...state,
//           password: action.payload
//         }

//     default:
//       return state
//   }
// }
