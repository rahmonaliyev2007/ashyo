"use client"
import React from 'react'
import * as RadixSlider from "@radix-ui/react-slider";
import ProductVariations from '@/modules/Products/ProductVariations';
import productParams from './ProductParametrs';
import { HeaderCategoriesType } from '@/types/HeaderCategoriesType';
import { BrandsType } from '@/types/BrandsType';
import { useTranslations } from 'next-intl';
import { formatNumberWithSpaces } from '@/hooks/formatNumberwithSpace';
import PriceComponent from './ProductParametrs/Price';

function ProductsLeftSide() {
    const { categories, brands, price, setPrice, CategoryParams, BrandParams, brand_id, category_id } = productParams();
    const t = useTranslations("Products");
    return (
        <div className={`min-w-[280px] w-[280px] bg-[#EBEFF3] p-[18px] rounded-[8px] max-[800px]:min-w-[220px] max-[680px]:hidden`}>
           <PriceComponent />
           <ProductVariations />
        </div>
    )
}

export default ProductsLeftSide

 export function ProductsLeftSideMobile() {
    const { categories, brands, price, setPrice, CategoryParams, BrandParams, brand_id, category_id } = productParams();
    const t = useTranslations("Products");
    <div className={`w-full bg-[#EBEFF3] p-[18px] rounded-[8px]`}>
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
        <div className='flex flex-wrap gap-[5px]'>{categories?.map((category: HeaderCategoriesType) => (<div onClick={() => CategoryParams(category.id)} key={category.id} className={`rounded-[30px] max-[340px]:w-full ${category.id === Number(category_id) ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] hover:bg-[#134E9B] hover:text-[white] duration-500 cursor-pointer py-[7px] px-[18px]`}>{category.name}</div>))} <div onClick={() => CategoryParams('')} className={`rounded-[30px] ${"" === category_id ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] hover:bg-[#134E9B] hover:text-[white] duration-500 cursor-pointer py-[7px] px-[18px] max-[340px]:w-full`}>{t('all')}</div></div>

        <h3 className='text-[16px] font-medium mt-[20px] mb-[15px]'>{t('brands')}</h3>
        <div className='flex flex-wrap gap-[5px]'>{brands?.map((brand: BrandsType) => (<div onClick={() => BrandParams(brand.id)} key={brand.id} className={`rounded-[30px] ${brand.id === Number(brand_id) ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] hover:bg-[#134E9B] hover:text-[white] duration-500 cursor-pointer py-[7px] px-[18px]`}>{brand.name}</div>))} <div onClick={() => BrandParams('')} className={`rounded-[30px] ${"" === brand_id ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] hover:bg-[#134E9B] hover:text-[white] duration-500 cursor-pointer py-[7px] px-[18px]`}>{t('all')}</div></div>
    </div>
}

