import React, { FC } from 'react'
import Button from './Button'
import { ArrowDownIcon, SearchIcon } from '@/assets/icons'
import HeaderInput from './HeaderInput'

const HeaderForm = () => {
    return (
        <div className='flex items-start gap-[10px] '>
            <Button title='Kategoriyalar' icon={<ArrowDownIcon />} iconPosition='right' />
            <div className='w-[520px] relative'>
                <HeaderInput placeholder='What are you looking for?' type='text' extraStyle='w-full !pr-[65px]' />
                <Button icon={<SearchIcon/>} iconPosition='left' extraStyle='!p-0 w-[60px] absolute top-0 right-0 h-full'/>
            </div>
        </div>
    )
}

export default HeaderForm