import React from 'react';
import {useForm} from 'react-hook-form'

const FormHook = () => {
    
    let {register, handleSubmit} = useForm();
   
const onSubmForm=(dataFromForm)=>{     //в dataFromForm у нас наш объект из регистров и мы можем с этими данными работать далее
    console.log(dataFromForm);
}

    
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmForm)
           }>
        <input type="text" {...register('username')} />
        <input type="text" {...register('age')} />
        </form> 
        </div>
    );
};

export default FormHook;