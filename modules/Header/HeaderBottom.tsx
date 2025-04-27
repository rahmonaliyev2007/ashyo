"use client"
import { getCategories } from '@/service/getCategories'
import { HeaderCategoriesType } from '@/types/HeaderCategoriesType';
import Link from 'next/link';
import React from 'react'

function HeaderBottom() {
  const {data:categories, isLoading, isError} = getCategories();
  const loadingDivs = new Array(8).fill(null);  
  return (
    <div className='containers flex justify-between items-center text-[#545D6A] gap-2 flex-wrap '>
      {isLoading || isError ? loadingDivs.map((_, index)=> <div key={index} className='w-[10%] h-[18px] my-[3px] loading'> </div>) :
        
      categories?.map((category:HeaderCategoriesType)=><Link className='hover:text-[#134E9B] duration-500' key={category.id} href={'/'}>{category.name}</Link>)}
    </div>
  )
}

export default HeaderBottom