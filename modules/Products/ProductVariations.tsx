import { BrandsType } from '@/types/BrandsType'
import { useTranslations } from 'next-intl'
import React from 'react'

function ProductVariations() {
    const t = useTranslations('Products')
    return (
        <>
            <h3 className='text-[16px] font-medium mt-[33px] mb-[15px]'>{t('ram')}</h3>
            <div className='flex flex-wrap gap-[5px]'>{['2', '3', '4', '6', '8', '12', '16'].map((brand, i) => (<div key={i} className={`rounded-[30px] text-[#0A1729] text-[12px] bg-white hover:bg-[#134E9B] hover:text-[white] duration-500 cursor-pointer py-[7px] px-[18px]`}>{brand} GB</div>))}</div>

            <h3 className='text-[16px] font-medium mt-[33px] mb-[15px]'>{t('rom')}</h3>
            <div className='flex flex-wrap gap-[5px]'>{['32', '64', '128', '256', '512'].map((brand, i) => (<div key={i} className={`rounded-[30px] text-[#0A1729] text-[12px] bg-white hover:bg-[#134E9B] hover:text-[white] duration-500 cursor-pointer py-[7px] px-[18px]`}>{brand} GB</div>))}</div>

            <h3 className='text-[16px] font-medium mt-[33px] mb-[15px]'>{t('batteryMah')}</h3>
            <div className='flex flex-wrap gap-[5px]'>{['3000', '3200', '3600', '4000', '4500', '5000', '6000', '7000'].map((brand, i) => (<div key={i} className={`rounded-[30px] text-[#0A1729] text-[12px] bg-white hover:bg-[#134E9B] hover:text-[white] duration-500 cursor-pointer py-[7px] px-[18px]`}>{brand} mh</div>))}</div>

        </>
    )
}

export default ProductVariations