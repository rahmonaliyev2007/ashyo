"use client"
import { API } from '@/hooks/getEnv';
import { getCategories } from '@/service/getCategories'
import { HeaderCategoriesType } from '@/types/HeaderCategoriesType';
import React from 'react'
import './styles.css'
import { useRouter } from '@/i18n/navigation';
function CategoryBrands() {
    const {data:brandCategories, isLoading, isError} = getCategories();
  const router = useRouter();

  if(isLoading || isError) return
  return (
    <div className='containers brandCategory_wrapper '>
        {brandCategories?.slice(0, -1).map((brandCategory:HeaderCategoriesType, i:number)=>(
            <div onClick={()=> router.push(`/pages/products?category=${brandCategory.id}`)} key={brandCategory.id} className={`brandCategory-${brandCategory.id} hover:opacity-[0.85] cursor-pointer duration-300`}>
                {brandCategory.id === 4 && 
                <>
                <img src={'/images/haladilni.png'} alt='mini haladilni' className='brandCategory-4-child '/>
                <div className='brandCategory-4-border'></div>
                <div className='brandCategory-4-oyogi'></div>
                </>
                }
                <img src={`${API}/uploads/${brandCategory?.image}`} alt="brand category image" />
                <span className='absolute top-3 left-2 text-white px-4 py-1 rounded-[30px] !z-40 border text-xs max-[560px]:px-2 max-[560px]:py-[1.5px] max-[400px]:text-[8px]'>{brandCategory.name}</span>
            </div>
        ))}
        <button className='brandCategory-7 hover:opacity-[0.85] cursor-pointer' onClick={()=> router.push('/pages/products')}>Ko'proq</button>

    </div>
  )
}

export default CategoryBrands