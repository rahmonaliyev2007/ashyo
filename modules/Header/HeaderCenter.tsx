"use client"
import { ArrowDownIcon, CartIcon, CompareIcon, HeartOutlineIcon, UserIcon } from '@/assets/icons'
import HeaderForm from '@/components/HeaderForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeaderActions from '../../components/Actions'

function HeaderCenter() {
    const buttons = [{ id: 1, icon: <CompareIcon />, count: 7, to: '/compare' },{ id: 2, icon: <HeartOutlineIcon />, count: 11, to: '/liked' }, { id: 3, icon: <CartIcon />, count: 7, to: '/cart' },{ id: 4, icon: <UserIcon />, count: 0, to: '/profile' }]

    return (
        <div className='containers flex justify-between items-center !py-[30px]'>
            <Link href={'/'} className='text-[#134E9B] font-black text-4xl flex items-center gap-1'><Image width={48} height={48} src={'/images/logo.svg'} priority alt='ashyo logo' className='scale-[1.2] rotate-z-45' /> Ashyo</Link>
            <HeaderForm />
            <div className='flex gap-[15px]'>{buttons?.map(item => <HeaderActions key={item.id} icon={item.icon} count={item.count} to={item.to} id={item.id}/>)}</div>
        </div>
    )
}

export default HeaderCenter