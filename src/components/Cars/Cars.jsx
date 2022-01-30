import React from "react";
import { useSelector } from "react-redux";
import Car from "../Car/Car";

const Cars = () => {
  //он вернет весь стейт с карами! (то, что мы описали в Инишинал Стейт в Среате Слайс initialState:{...})
  const {cars} =useSelector(stateFromStoreConf=>stateFromStoreConf['carReduser'])    //store.carReduser
  // const cars=obj.cars;  //оbj это объект из файла кар слайс внутри негог все что в инишинал стейт и есть наш объект.
  return (
    <div style={{ margin: "50px" }}>
      {cars.map((car) => (
        <Car key={car.id} car={car}  />
      ))}
    </div>
  );
};

export default Cars;
