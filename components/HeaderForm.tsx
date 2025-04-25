import React, { FC, useContext } from 'react'
import Button from './Button'
import { ArrowDownIcon, SearchIcon } from '@/assets/icons'
import HeaderInput from './HeaderInput'
import { Context } from '@/context/Context'

const HeaderForm = () => {
    const { showCategory, setShowCategory } = useContext(Context)
    return (
        <div className='flex items-start gap-[10px] '>
            <Button onClick={() => setShowCategory(!showCategory)} title='Kategoriyalar' icon={<ArrowDownIcon />} iconPosition='right' />
            <div className='w-[520px] relative'>
                <HeaderInput placeholder='What are you looking for?' type='text' extraStyle='w-full !pr-[65px]' />
                <Button icon={<SearchIcon />} iconPosition='left' extraStyle='!p-0 w-[60px] absolute top-0 right-0 h-full' />
            </div>
        </div>
    )
}

export default HeaderForm