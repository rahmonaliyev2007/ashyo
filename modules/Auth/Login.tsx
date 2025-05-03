"use client"
import Button from '@/components/Button';
import HeaderInput from '@/components/HeaderInput';
import React, { FC, ReactNode, useState } from 'react'

type LoginUserType = {
    email: string,
    password: string
}
type ErrorType = {
    email: boolean,
    password: boolean
}

const Login: FC<{ isLoginOpen: boolean }> = ({ isLoginOpen }) => {
    const [user, setUser] = useState<LoginUserType>({ email: '', password: '' });
    const [errors, setErrors] = useState<ErrorType>({email:false, password:false});
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }
    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    return (
        <div className={`transition-all duration-300 overflow-hidden ${isLoginOpen ? 'w-full' : 'w-0'}`}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" className='relative'>
                    <HeaderInput name="email" placeholder='Enter Your Email' type="text" extraStyle={`w-full mt-5 max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px] ${errors.email && 'border-red-500 placeholder:text-red-500'}`} value={user.email} onChange={handleChangeValue} />
                </label>
                <label htmlFor="password">
                    <HeaderInput name="password" placeholder='Enter your Password' type="password" extraStyle={`w-full mt-5 max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px] ${errors.password && 'border-red-500 placeholder:text-red-500'} `} value={user.email} onChange={handleChangeValue} />
                </label>
                <Button title='Login' extraStyle='w-full mt-10 max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px] ' />
            </form>
        </div>
    )
}

export default Login