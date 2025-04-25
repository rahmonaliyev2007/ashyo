import { ButtonType } from '@/types/ButtonType'
import React, { FC } from 'react'

const Button:FC<ButtonType> = ({icon, iconPosition, title, extraStyle, onClick})=> {
  return (
    <button onClick={onClick} className={`bg-[#134E9B] cursor-pointer text-white text-base border border-[#134E9B] py-[14px] px-[25px] rounded-[6px] flex justify-center items-center gap-[20px] hover:opacity-85 duration-500 ${extraStyle}`}>
        {icon && iconPosition === 'left' && icon}
        {title}
        {icon && iconPosition === 'right' && icon}
    </button>
  )
}

export default Button