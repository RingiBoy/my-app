import { urls } from "../config/urls";
import { axiosService } from "./axios.service";



export const postService = {
    getByUserId:(id)=>axiosService.get(`${urls.posts}?userId=${id}`).then(value=>value.data)
}