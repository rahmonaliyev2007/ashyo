"use client"
import Modal from '@/components/Modal'
import { Context } from '@/context/Context'
import { ThemeContext } from '@/context/ThemeProvider'
import { API } from '@/hooks/getEnv'
import { getCategories } from '@/service/getCategories'
import { HeaderCategoriesType } from '@/types/HeaderCategoriesType'
import Image from 'next/image'
import React, { useContext } from 'react'

function HeaderPopUpCategory() {
    const {showCategory, setShowCategory} = useContext(Context)
    const {data:categories} = getCategories();  
    const {theme} = useContext(ThemeContext)  
  return (
    <>
    <div className={`${showCategory ? 'h-[70vh] max-[680px]:hidden shadow-lg top-[102px] max-[1220px]:top-[200px]  max-[1220px]:h-[50vh] rounded-[6px] w-[100%]' : "h-[0vh] border-[0px] top-[85px]  max-[1220px]:top-[185px] rounded-[0px] w-[50%]"} absolute duration-300 transition-all  z-[1]  overflow-hidden ${theme === 'dark' ? 'bg-[#202b44]' : 'bg-white'}  mx-auto`}>
        <div className='w-[30%] bg-[#EBEFF3] h-full py-[43px] px-[32px] overflow-hidden  max-[1220px]:px-[15px]'>
            <ul>
                {categories?.map((item:HeaderCategoriesType)=> <li className={`py-[14px] max-[1220px]:pl-[15px] hover:bg-white transition-colors duration-300 pl-[40px] flex items-center gap-[10px]`} key={item.id}><Image width={24} height={24} alt='icon' src={`${API}/uploads${item.icon}`} className='!w-[24px] !h-[24px]'/> {item.name}</li>)}
            </ul>
        </div>
        <div className='w-[70%] h-full'></div>
    </div>

    <div className='min-[680px]:hidden absolute top-0'>
      <Modal isModalOpen={showCategory} setIsModalOpen={setShowCategory} extraStyle='!p-0 overflow-hidden h-[60vh] !mx-2'>
      <div className={`h-full w-[100%]' duration-300 transition-all z-[1] overflow-hidden bg-white mx-auto`}>
        <div className='w-[50%] bg-[#EBEFF3] h-full py-[43px] px-[9px] overflow-hidden'>
            <ul>
                {categories?.map((item:HeaderCategoriesType)=> <li className={`py-[14px] rounded-[3px] hover:bg-white max-[470px]:text-[14px] max-[400px]:text-[12px] transition-colors duration-300 px-[10px] flex items-center gap-[10px]`} key={item.id}><Image width={16} height={16} alt='icon' src={`${API}/uploads${item.icon}`} className='!w-[24px] !h-[24px] max-[470px]:!w-[16px] max-[470px]:!h-[16px]'/> {item.name}</li>)}
            </ul>
        </div>
        <div className='w-[50%] h-full'> </div>
    </div>
    </Modal>
    </div>
    </>
  )


}

export default HeaderPopUpCategory