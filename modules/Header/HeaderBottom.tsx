"use client"
import HeaderForm from '@/components/HeaderForm';
import { useRouter } from '@/i18n/navigation';
import { getCategories } from '@/service/getCategories'
import { HeaderCategoriesType } from '@/types/HeaderCategoriesType';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'

function HeaderBottom() {
  const { data: categories, isLoading, isError } = getCategories();
  const loadingDivs = new Array(8).fill(null);
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleGoCategory = (id:number) =>{
    const params = new URLSearchParams(searchParams.toString())
    params.set('category', String(id))
    router.push(`/pages/products?${params.toString()}`)
  }
  return (
    <>
      <div className='containers max-xl:hidden flex justify-between items-center text-[#545D6A] gap-2 flex-wrap '>
        {isLoading || isError ? loadingDivs.map((_, index) => <div key={index} className='w-[10%] h-[18px] my-[3px] loading'> </div>) :
          categories?.map((category: HeaderCategoriesType) => <p onClick={()=> handleGoCategory(category.id)} className='hover:text-[#134E9B] duration-500 cursor-pointer' key={category.id} >{category.name}</p>)}
      </div>
      <div className='xl:hidden containers'>
        <HeaderForm />
      </div>
    </>

  )
}

export default HeaderBottom