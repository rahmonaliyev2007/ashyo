"use client"
import { Context } from '@/context/Context'
import { API } from '@/hooks/getEnv'
import { getCategories } from '@/service/getCategories'
import { HeaderCategoriesType } from '@/types/HeaderCategoriesType'
import Image from 'next/image'
import React, { useContext } from 'react'

function HeaderPopUpCategory() {
    const {showCategory} = useContext(Context)
    const {data:categories, isLoading, isError} = getCategories();    
  return (
    <div className={`${showCategory ? 'h-[70vh] shadow-lg top-[102px] rounded-[6px] w-[100%]' : "h-[0vh] border-[0px] top-[85px] rounded-[0px] w-[50%]"} absolute duration-300 transition-all  z-[1]  overflow-hidden bg-white mx-auto`}>
        <div className='w-[30%] bg-[#EBEFF3] h-full py-[43px] px-[32px] overflow-hidden'>
            <ul>
                {categories?.map((item:HeaderCategoriesType)=> <li className={`py-[14px] hover:bg-white transition-colors duration-300 pl-[40px] flex items-center gap-[10px]`} key={item.id}><Image width={24} height={24} alt='icon' src={`${API}/uploads${item.icon}`} className='!w-[24px] !h-[24px]'/> {item.name}</li>)}
            </ul>
        </div>
        <div className='w-[70%] h-full'> </div>
        
    </div>
  )
}

export default HeaderPopUpCategory