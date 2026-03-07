import * as React from 'react';
import { useForm } from 'react-hook-form';  


export const Login: React.FC = (props) => {
  const {register,handleSubmit,formState:{errors}} = useForm();

  const submit = (data:any) =>{
    console.log(data);
  }

    return (<div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit(submit)}>
            <div>
            <label htmlFor='username'>Name</label>
            <input type='text' placeholder='Enter name' {...register('username',{required:'Name is required',pattern:{value:/^[A-Za-z]+$/, message:'Name must contain only letters'}})}></input>
            {errors.username && <span>{errors.username?.message as React.ReactNode}</span>}
            </div>
            <button type='submit'>Login</button>
        </form>
    </div>)
}