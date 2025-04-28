"use client"
import { CartIcon, CompareIcon, HeartOutlineIcon, MenuIcon, UserIcon } from '@/assets/icons'
import HeaderForm from '@/components/HeaderForm'
import Image from 'next/image'
import React, { useState } from 'react'
import HeaderActions from '../../components/Actions'
import HeaderPopUpCategory from './HeaderPopUpCategory'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

function HeaderCenter() {
    const t = useTranslations('HeaderCenter')
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const buttons = [{ id: 1, title:t('compare'), icon: <CompareIcon />, count: 7, to: '/compare' }, { id: 2, title:t('wishlist'), icon: <HeartOutlineIcon />, count: 11, to: '/liked' }, { id: 3, title:t('cart'), icon: <CartIcon />, count: 7, to: '/cart' }, { id: 4, title:t('profile'), icon: <UserIcon />, count: 0, to: '/profile' }]
    return (
        <div className='containers flex justify-between items-center !py-[30px] relative z-[100]'>
            <Link href={'/'} className='text-[#134E9B] font-black text-4xl max-xl:text-[27px] flex items-center gap-1 relative z-[1]'><Image width={48} height={48} src={'/images/logo.svg'} priority alt='ashyo logo' className='xl:scale-[1.2] max-sm:scale-[0.80] rotate-z-45 w-auto h-auto' /> Ashyo</Link>
            <div className='max-xl:hidden'><HeaderForm /></div>
            <Link href={`tel:++998711234567`} className='xl:hidden max-sm:text-[14px] max-[400px]:hidden'>+998 (71) 123-45-67</Link>
            <div className='flex gap-[15px] max-sm:hidden'>{buttons?.map(item => <HeaderActions key={item.id} icon={item.icon} count={item.count} to={item.to} id={item.id} />)}</div>
            {/* ===================================== */}
            <div className='sm:hidden' tabIndex={0} onFocus={()=> setIsOpen(true)} onBlur={()=> setIsOpen(false)}><MenuIcon/></div>
            {/* ===================================== */}
            <div className={`fixed max-w-[300px] w-full h-screen bg-white shadow-2xl z-[51] top-0 ${isOpen ? 'right-0' : 'right-[-300px]'} duration-500 `}>
                <div className='w-full h-[100px] bg-gray-400 flex items-center px-5'>
                    {/* profl malumtorlar */}
                    <div className='w-[70px] h-[70px] rounded-[50%] bg-slate-50'></div>
                </div>
                <div className={`flex flex-col justify-start items-center gap-[10px] px-5 mt-5`}>
                    {buttons?.map(item => <HeaderActions key={item.id} title={item.title} icon={item.icon} count={item.count} to={item.to} id={item.id} extraStyle={'!w-full !justify-start !px-5 hover:bg-[#15509E]/30 duration-300'}/>)}
                </div>
            </div>
            <HeaderPopUpCategory />
        </div>
    )
}

export default HeaderCenter