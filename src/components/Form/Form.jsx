import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addCar } from "../../store";

const Form = () => {
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();    //новый хук для получения диспатча, откуда именно  - непонятно.

  const submit = (data) => {
    //вызывает тут диспатч и идем в наши слайсы, берем оттуда нужный нам.
    dispatch(addCar({data:data}))     //эддКар тоде функция, котрая принимает в себя стейт и экшин
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <label>
        Model: <input type="text" {...register("model")} />
      </label>
      <label>
        Price: <input type="text" {...register("price")} />
      </label>
      <label>
        Year: <input type="text" {...register("year")} />
      </label>
      <button>Save</button>
    </form>
  );
};

export default Form;
