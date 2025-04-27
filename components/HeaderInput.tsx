import { HeaderInputType } from '@/types/HeaderInputType'
import React, { FC, useEffect } from 'react'

const HeaderInput:FC<HeaderInputType> =({placeholder, type, extraStyle, value, onChange, onBlur, onFocus})=> {
  useEffect(()=>{
    console.log(value);
  },[value])
  return (
    <input type={type} onChange={onChange} onBlur={onBlur} onFocus={onFocus} value={value} placeholder={placeholder} className={` py-[14px] pl-[26px] outline-none rounded-[6px] border border-[#EBEFF3] bg-[#EBEFF3] ${extraStyle}`}/>
  )
}

export default HeaderInput