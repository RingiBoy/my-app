import { urls } from "../configs/urls";
import { axiosService } from "./axios.service";

export const commentService = {
  getAll: () => axiosService.get(urls.comments).then((value) => value.data),
  getById: (id) =>
    axiosService.get(`${urls.comments}/${id}`).then((value) => value.data),
};
