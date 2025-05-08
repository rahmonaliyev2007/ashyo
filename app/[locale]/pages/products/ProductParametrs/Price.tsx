import React from 'react'
import * as RadixSlider from "@radix-ui/react-slider";
import { useTranslations } from 'next-intl';
import productParams from '.';
import { formatNumberWithSpaces } from '@/hooks/formatNumberwithSpace';
import { HeaderCategoriesType } from '@/types/HeaderCategoriesType';
import { BrandsType } from '@/types/BrandsType';

function PriceComponent({ mobile, setIsModalOpen }: { mobile?: boolean, setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>> }) {
    const { price, setPrice, categories, brands, BrandParams, CategoryParams, brand_id, category_id } = productParams();
    const t = useTranslations("Products");

    return (
        <div className={`${mobile && 'w-full bg-[#EBEFF3] p-[18px] rounded-[8px]'}`}>
            <h3 className='text-[16px] font-medium mb-[15px]'>{t('price')}</h3>
            <div className='flex gap-[4px]'>
                <div className='w-full flex flex-col'><span className='text-[12px] text-[#00000066] mb-[6px]'>{t('from')}</span><div className='w-full rounded-[5px] bg-[#FFFFFF] text-[14px] p-2'>{formatNumberWithSpaces(price[0])} uzs</div></div>
                <div className='w-full flex flex-col'><span className='text-[12px] text-[#00000066] mb-[6px]'>{t('to')}</span><div className='w-full rounded-[5px] bg-[#FFFFFF] text-[14px] p-2'>{formatNumberWithSpaces(price[1])} uzs</div></div>
            </div>
            <RadixSlider.Root className="relative flex w-full touch-none select-none items-center h-5 my-[26px]" min={0} max={50000} step={10} value={price} onValueChange={(value) => setPrice([value[0], value[1]])}>
                <RadixSlider.Track className="relative h-[3px] w-full grow rounded-full bg-gray-300">
                    <RadixSlider.Range className="absolute h-full bg-[#15509E] rounded-full" />
                </RadixSlider.Track>
                <RadixSlider.Thumb className="block h-5 cursor-pointer w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md focus:outline-none" />
                <RadixSlider.Thumb className="block h-5 cursor-pointer w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md focus:outline-none " />
            </RadixSlider.Root>
            <h3 className='text-[16px] font-medium mb-[15px]'>{t('category')}</h3>
            <div className='flex flex-wrap gap-[5px]'>{categories?.map((category: HeaderCategoriesType) => (<div onClick={() => { CategoryParams(category.id); if (mobile && setIsModalOpen) setIsModalOpen(false); }} key={category.id} className={`rounded-[30px] ${!mobile && "max-[800px]:w-full"} ${category.id === Number(category_id) ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] hover:bg-[#134E9B] hover:text-[white] duration-500 cursor-pointer py-[7px] px-[18px]`}>{category.name}</div>))} <div onClick={() => { CategoryParams(''); if (mobile && setIsModalOpen) setIsModalOpen(false); }} className={`rounded-[30px] ${"" === category_id ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] hover:bg-[#134E9B] hover:text-[white] duration-500 cursor-pointer py-[7px] px-[18px] ${!mobile && "max-[800px]:w-full"}`}>{t('all')}</div></div>

            <h3 className='text-[16px] font-medium mt-[20px] mb-[15px]'>{t('brands')}</h3>
            <div className='flex flex-wrap gap-[5px]'>{brands?.map((brand: BrandsType) => (<div onClick={() => { BrandParams(brand.id); if (mobile && setIsModalOpen) { setIsModalOpen(false) } }} key={brand.id} className={`rounded-[30px] ${brand.id === Number(brand_id) ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] hover:bg-[#134E9B] hover:text-[white] duration-500 cursor-pointer py-[7px] px-[18px]`}>{brand.name}</div>))} <div onClick={() => { BrandParams(''); if (mobile && setIsModalOpen) setIsModalOpen(false); }} className={`rounded-[30px] ${"" === brand_id ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] hover:bg-[#134E9B] hover:text-[white] duration-500 cursor-pointer py-[7px] px-[18px]`}>{t('all')}</div></div>
        </div>


    )
}

export default PriceComponent