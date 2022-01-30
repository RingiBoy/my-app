import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../../store";
import Car from "../Car/Car";

const Cars = () => {
  //он вернет весь стейт с карами! (то, что мы описали в Инишинал Стейт в Kреате Слайс initialState:{...})
  const {cars, status, error} =useSelector(stateFromStoreConf=>stateFromStoreConf['carReducer'])    //store.carReduser
  
  // const cars=obj.cars;  //оbj это объект из файла кар слайс внутри негог все что в инишинал стейт и есть наш объект.
  
  //async cars:  
  
  const dispatch = useDispatch();
  
  // что бы тригернуть кары нужен диспатч выше
  useEffect(()=>{
    dispatch(getAllCars())

  },[])
  
  
  return (
    <div style={{margin: '50px'}}>
      {status==='Loading...' && <h1>Loading....</h1>}
      {error&&<h2>{error}</h2>}
      {cars.map(car =>    <Car key={car.id} car={car}  />)}
    </div>
  );
};

export default Cars;
