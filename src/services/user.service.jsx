import { urls } from "../config/urls";
import { axiosService } from "./axios.service";

export const userSevice={
    getAll:()=>axiosService.get(urls.users).then(value=>value.data)
}