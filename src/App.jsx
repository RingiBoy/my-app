import React, { useState } from "react";
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";

const App = () => {
  const [cars, setCars] = useState([]);

  const getFormData = (data) => {
    setCars([...cars, { id: new Date().getTime(), ...data }]);
  };
  const getCarId = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  return (
    <div>
      <Form getFormData={getFormData} />
      <Cars cars={cars} getCarId={getCarId} />
    </div>
  );
};

export default App;
