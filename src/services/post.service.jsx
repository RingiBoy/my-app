import { urls } from "../configs/urls";
import { axiosService } from "./axios.service";

export const postService={
    getAll:()=>axiosService.get(urls.posts).then(value=>value.data),
    detById:(id)=>axiosService.get(`${urls.posts}/${id}`).then(value=>value.data),
    getCommentsByIdPost:(id)=>axiosService.get(`${urls.posts}/${id}/comments`).then(value=>value.data)
}