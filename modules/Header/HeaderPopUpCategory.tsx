import { Context } from '@/context/Context'
import React, { useContext } from 'react'

function HeaderPopUpCategory() {
    const {showCategory} = useContext(Context)
  return (
    <div className={`${showCategory ? 'h-[70vh] shadow-lg border-[1px] top-[102px] rounded-[6px]' : "h-[0vh] top-[0px] rounded-[0px]"} absolute duration-500 transition-all  z-[1] w-[100%] overflow-hidden bg-white mx-auto`}>
        <div className='w-[30%] bg-[#EBEFF3] h-full'></div>
        <div className='w-[70%]'></div>
    </div>
  )
}

export default HeaderPopUpCategory