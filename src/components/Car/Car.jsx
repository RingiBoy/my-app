import React from "react";
import { useDispatch } from "react-redux";
import { deleteCarThunk } from "../../store";

const Car = ({ car: { id, model, year, price } }) => {
  
  const dispatch = useDispatch()
  
  
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
      <button onClick={() => dispatch(deleteCarThunk({id}))}>delete</button>
    </div>
  );
};

export default Car;
