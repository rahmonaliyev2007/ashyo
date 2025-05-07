import { ThemeContext } from '@/context/ThemeProvider'
import { ButtonType } from '@/types/ButtonType'
import React, { FC, useContext } from 'react'

const Button: FC<ButtonType> = ({ icon, iconPosition, title, extraStyle, loading, onClick }) => {
    const {theme} =useContext(ThemeContext)

  return (
    <button onClick={onClick} disabled={loading} className={`bg-[#134E9B] ${theme === 'dark' ? 'bg-[#EDEDED] text-[#131313] border-[#EDEDED]' : 'bg-[#134E9B] border-[#134E9B] text-white'} ${loading ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:opacity-85 cursor-pointer'} text-base border  py-[14px] px-[25px] rounded-[6px] flex justify-center items-center gap-[20px]  duration-500 ${extraStyle}`}>
      {loading && <div className="flex justify-center items-center">
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>}
      {icon && iconPosition === 'left' && icon}
      {title}
      {icon && iconPosition === 'right' && icon}
    </button>
  )
}

export default Button