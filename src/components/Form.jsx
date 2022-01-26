import React, { useState } from 'react';

const Form = () => {
    
    
    let [formState, setFormState]= useState({username:'dddd', age:'37'});
    
    
    
    const formOnSubmit=(e)=>{
            e.preventDefault()
           
            let username= e.target.username.value;
            let age= e.target.age.value;
            console.log({'username': username, 'age':age});
        }
    
    const onChangeTargetName=(e)=>{
        
            setFormState({...formState, [e.target.name]:e.target.value})  //...formState если мы не создадим новый объект, с новой ссылкой,то у нас не будет работать управляемость формой
        
    }
    
    
    return (
        <div>
            

        <form onSubmit={formOnSubmit} >

            <input
             type="text"
             name='username'
            value={formState.username}
            onChange={onChangeTargetName}
            />
            <input type="text"
            name='age'
            value={formState.age}
            onChange={onChangeTargetName} />
            <button>send</button>
        </form>




        </div>
    );
};

export default Form;