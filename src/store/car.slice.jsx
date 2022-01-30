import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { carService } from "../services";

export const getAllCars = createAsyncThunk(
  //это функция  которая не объект как createSlice()

  "carSlice/getAllCars", //первым параметром передаем название слайса на котрый ссылаемся
  async (_, {rejectWithValue}) => {
    try {
      const cars = await carService.getAll();
      console.log('cars:', cars)
      return cars;
    } catch (e) {
      return rejectWithValue(e.message)    //эта ошибка  
    }
  }
);








const carSlice = createSlice({
  name: "carSlice",
  initialState: {
    cars: [],
    status:null,
    error:null
  },
  reducers: {
    addCar: (state, action) => {
      state.cars.push({
        id: new Date().getTime(),
        ...action.payload.data
      });
    },
    deleteCar: (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload.id)
    }
  },
  extraReducers: {
    //место куда мы возвращаем наши кары с асинкэвейта const cars = await carService.getAll(); У него есть несколько стадий на котрых мы можем отлавливать наши данные.
    [getAllCars.pending]: (state, action) => {
      state.status='Loading...'  //сюда можем прогрузить какую-то компоненту, пока данные еще не получены!!
      state.error=null
    },//getAll() как только отрабатывает эта фукнция, то она переходит в состояние запроса/До загрузки, т.е. еще не получили данные / значениями будут Стейт и Экшин
    
    
    [getAllCars.fulfilled]: (state, action) => {
      state.status='Dowload is done'
      state.cars = action.payload    //теперь перезаписываем стейт новыми данными полученными из асинк функции с запросом по АПИ. они попадают автоматом в Экшин и в нем есть пэйлоад / т.е. это будут наши Карсы с апишки!
    }, //филд, состояние когда данные пришли!
    
    
    
    [getAllCars.rejected]: (state, action) => {
      state.status='rejected'
      state.error = action.payload      //получаем данные об ошибке с кетча выше   наша ошибка прописалась в акшин.пейлоад
    } //реджект это когда бек отдал ошибку по нашему запросу
  }
});

export const { addCar, deleteCar } = carSlice.actions;

const carReducer = carSlice.reducer;
export default carReducer;
