import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const loginSchema = yup.object({
    email: yup.string()
        .email('Email must be in email format.')
        .required('Email must be provided.'),
    password: yup.string()
        .required('Password must be provided.')
        .min(4, 'Password must be at least four characters.'),
}).required();

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div >
            <div >
               
                <h2 >Welcome!</h2>
                <span >Login Details</span>
                <form 
                    autoComplete="off" 
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div >
                        <div >
                            <MdEmail className='text-xl' />
                            <input 
                                type='email' 
                                placeholder='Email' 
                                {...register('email')} 
                                data-testid="email-input"
                            />
                        </div>
                        <p >{errors.email?.message}</p>
                    </div>

                    <div className='w-full'>
                        <div >
                            <RiLockPasswordLine className='text-xl' />
                            <input 
                                type='password' 
                                placeholder='Password' 
                                {...register('password')} 
                                data-testid="password-input"
                            />
                        </div>
                        <p >{errors.password?.message}</p>
                    </div>

                    <button 
                        type='submit' 
                        data-testid="submit-button"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
