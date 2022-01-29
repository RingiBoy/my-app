import React from "react";
import Car from "../Car/Car";

const Cars = ({ cars, getCarId }) => {
  return (
    <div style={{ margin: "50px" }}>
      {cars.map((car) => (
        <Car key={car.id} car={car} getCarId={getCarId} />
      ))}
    </div>
  );
};

export default Cars;
