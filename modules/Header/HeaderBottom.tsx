"use client"
import { getCategories } from '@/service/getCategories'
import { HeaderCategoriesType } from '@/types/HeaderCategoriesType';
import Link from 'next/link';
import React from 'react'

function HeaderBottom() {
  const {data:categories} = getCategories();
  console.log(categories);
  
  return (
    <div className='containers flex justify-between items-center text-[#545D6A] gap-2 flex-wrap'>
      {categories?.map((category:HeaderCategoriesType)=><Link className='hover:text-[#134E9B] duration-500' key={category.id} href={'/'}>{category.name}</Link>)}
    </div>
  )
}

export default HeaderBottom