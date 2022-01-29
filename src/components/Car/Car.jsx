import React from "react";

const Car = ({ car: { id, model, year, price }, getCarId }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
        gap: "20px",
      }}
    >
      <div>
        <div>id:{id}</div>
        <div>model:{model}</div>
        <div>year:{year}</div>
        <div>price:{price}</div>
      </div>
      <button onClick={() => getCarId(id)}>delete</button>
    </div>
  );
};

export default Car;
