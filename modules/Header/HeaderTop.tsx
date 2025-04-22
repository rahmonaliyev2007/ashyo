import { ArrowDownIcon, LocationIcon } from '@/assets/icons'
import Link from 'next/link'
import React from 'react'

function HeaderTop() {
  return (
    <div className='text-sm py-[10px] bg-[#EBEFF3]'>
        <div className='containers flex justify-between items-center'>
        <nav className='flex items-center gap-[28px]'>
            <Link href={'/location'} className='flex items-center gap-[10px] hover:text-[#134E9B] duration-300 text-[#545D6A]'><LocationIcon/> <span>Toshkent</span></Link>
            <Link href={'/aboutUS'} className='text-[#545D6A] hover:text-[#134E9B] duration-300'> <span>About Us</span></Link>
            <Link href={'/products'} className=' text-[#545D6A] hover:text-[#134E9B] duration-300'> <span>Products</span></Link>
            <Link href={'/contacts'} className=' text-[#545D6A] hover:text-[#134E9B] duration-300'> <span>Contacts</span></Link>
        </nav>
        <div className='flex justify-end items-center gap-[18px]'>
            <Link href={`tel:++998711234567`}>+998 (71) 123-45-67</Link>
            <div className='text-[#545D6A] flex items-center gap-[7px] cursor-pointer'>
                <span>Uz</span>
                <ArrowDownIcon/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HeaderTop