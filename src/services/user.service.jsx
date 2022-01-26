import { urls } from "../configs/urls";
import { axiosService } from "./axios.service";



export const usersService={
    getall:()=>axiosService.get(urls.users).then(value=>value.data),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`).then(value=>value.data)
}