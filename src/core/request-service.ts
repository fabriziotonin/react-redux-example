export default class RequestService{
  
// headers?:any  lo vuelve optativo al parametro
  static async getFetch(endpoint:string,headers?:any){
    const response = await fetch(endpoint,{method:"GET",headers})
    const data =  response.ok ? await response.json(): "error"
    return {
      httpCode: response.status,
      data
    }
  }

  // static async postFetch(endpoint:string,headers?:any,body:any){
  //   const response = await fetch(endpoint,{method:"GET",headers,body})
  //   const data =  response.ok ? response.json(): "error"
  //   return {
  //     httpCode: response.status,
  //     data
  //   }
  // }
}