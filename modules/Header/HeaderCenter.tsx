"use client"
import HeaderForm from '@/components/HeaderForm'
import Image from 'next/image'
import React, { useContext } from 'react'
import HeaderPopUpCategory from './HeaderPopUpCategory'
import { Link } from '@/i18n/navigation'
import HeaderActionButtons from './HeaderActions'
import { ThemeContext } from '@/context/ThemeProvider'

function HeaderCenter() {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`${theme === 'dark' && "bg-[#313131]"} duration-500`}>
        <div className={`containers flex justify-between items-center !py-[30px] relative z-[100] `}>
            <Link href={'/'} className={`${theme === 'dark' ? "text-[#F1F1F1]" : "text-[#134E9B]"} font-black text-4xl max-xl:text-[27px] flex items-center gap-1 relative z-[1]`}><Image width={48} height={48} src={'/images/logo.svg'} priority alt='ashyo logo' className='xl:scale-[1.2] max-sm:scale-[0.80] rotate-z-45 w-auto h-auto' /> Ashyo</Link>
            <div className='max-xl:hidden'><HeaderForm /></div>
            <Link href={`tel:++998711234567`} className='xl:hidden max-sm:text-[14px] max-[400px]:hidden'>+998 (71) 123-45-67</Link>
            <HeaderActionButtons/>
            <HeaderPopUpCategory />
        </div>
        </div>
    )
}

export default HeaderCenter