"use client"
import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';

function Auth() {
    const [isLoginOpen, setIsModalOpen] = useState<boolean>(true);
    return (
        <>
            <div className={`w-full flex bg-gray-50 rounded p-2 relative z-0 justify-between`}>
                <button onClick={()=> setIsModalOpen(true)} className={` cursor-pointer z-[2] rounded-sm p-2 px-5 w-[49%] ${isLoginOpen ? '' : 'hover:bg-gray-100'}`}>Login</button>
                <button onClick={()=> setIsModalOpen(false)} className={` cursor-pointer z-[2] rounded-sm p-2 px-5 w-[49%] ${isLoginOpen && 'hover:bg-gray-100'}`}>Register</button>
                <div className={`absolute top-2 bg-gray-200 rounded-sm w-[48%] h-[40px] transition-all duration-300 z-[1]`} style={{ left: isLoginOpen ? '0.5rem' : 'calc(100% - 0.5rem - 47.8%)' }}></div>
            </div>

            <div className='flex justify-between items-start'>
                <Login isLoginOpen={isLoginOpen}/>
                <Register isLoginOpen={isLoginOpen}/>
            </div>

        </>
    )
}

export default Auth