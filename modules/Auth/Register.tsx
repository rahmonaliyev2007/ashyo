import React from 'react'

function Register({isLoginOpen, setIsModalOpen}: {isLoginOpen: boolean, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div className={`transition-all duration-300 overflow-hidden ${isLoginOpen ? 'w-0' : 'w-full'}`}>
        register
    </div>
  )
}

export default Register