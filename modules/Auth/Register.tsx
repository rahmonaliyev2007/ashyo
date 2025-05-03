import React from 'react'

function Register({isLoginOpen}: {isLoginOpen: boolean}) {
  return (
    <div className={`transition-all duration-300 bg-green-400 h-[60px] overflow-hidden ${isLoginOpen ? 'w-0' : 'w-full'}`}>
        
    </div>
  )
}

export default Register