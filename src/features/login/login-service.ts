import RequestService from "../../core/request-service"

export default class LoginService extends RequestService {
static getUsers(){
  const endpoint = "https://jsonplaceholder.typicode.com/todos/1"
  return super.getFetch(endpoint)
}
}


