// Se colocan todas las interfaces (los tipos de cada uno de los datos)

export interface ILoginState{
  credentials:{
    username:string,
    password:string
  },
  // 2do paso 
  user: {
		completed: boolean,
		id: number,
		title: string,
		userId: number,
	},
}