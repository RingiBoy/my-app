import { urls } from "../constants";

import { axiosService } from "./axios.service";

export const carService={
    getAll:()=>axiosService.get(urls.cars).then(value=>value.data),
    create:(car)=>axiosService.post(urls.cars, car).then(value=>value.data),
    delete:(id)=>axiosService.delete(`${urls.cars}/${id}`)
}