import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./car.slice";
const store = configureStore({
    reducer:{
        carReduser:carReducer     //наш редюсер сформированный функцией из станд функции креейт слайс. import carReducer from "./car.slice"

    }
})



export default store