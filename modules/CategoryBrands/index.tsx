"use client"
import { API } from '@/hooks/getEnv';
import { getCategories } from '@/service/getCategories'
import { HeaderCategoriesType } from '@/types/HeaderCategoriesType';
import React from 'react'
import './styles.css'
function CategoryBrands() {
    const {data:brandCategories} = getCategories();
    console.log(brandCategories );
    
  return (
    <div className='containers brandCategory_wrapper '>
        {brandCategories?.slice(0, -1).map((brandCategory:HeaderCategoriesType, i:number)=>(
            <div key={brandCategory.id} className={`brandCategory-${brandCategory.id} hover:scale-[1.01] hover:opacity-[0.85] cursor-pointer duration-300 `}>
                {brandCategory.id === 4 && 
                <>
                <img src={'/images/haladilni.png'} alt='mini haladilni' className='brandCategory-4-child '/>
                <div className='brandCategory-4-border'></div>
                </>
                }
                <img src={`${API}/uploads/${brandCategory?.image}`} alt="brand category image" />
                <span className='absolute top-3 left-3 text-white px-4 py-1 rounded-[30px] !z-40 border text-xs'>{brandCategory.name}</span>
            </div>
        ))}
        <button className='brandCategory-7'>Ko'proq</button>

    </div>
  )
}

export default CategoryBrands