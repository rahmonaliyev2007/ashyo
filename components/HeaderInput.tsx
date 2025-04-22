import { HeaderInputType } from '@/types/HeaderInputType'
import React, { FC } from 'react'

const HeaderInput:FC<HeaderInputType> =({placeholder, type, extraStyle})=> {
  return (
    <input type={type} placeholder={placeholder} className={` py-[14px] pl-[26px] outline-none rounded-[6px] border border-[#EBEFF3] bg-[#EBEFF3] ${extraStyle}`}/>
  )
}

export default HeaderInput