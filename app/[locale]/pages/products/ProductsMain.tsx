"use client"
import ProductCard from '@/components/Products/ProductCard'
import React, { useContext } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { ThemeContext } from '@/context/ThemeProvider'
import { useTranslations } from 'next-intl'
import Button from '@/components/Button'
import { ProductsMainType } from '@/types/ProductsMainType'
import LoadingPorducts from './LoadingPorducts'
import productParams from './ProductParametrs'
import SortComponent from './ProductParametrs/Sort'
import LimitComponent from './ProductParametrs/Limit'

const ProductsMain = ({ products, isError, isLoading, isFetching }: ProductsMainType ) => {
  const { clearSearchParams } = productParams();
  const { theme } = useContext(ThemeContext);
  const t = useTranslations('Products')

  if(isLoading || isFetching || isError) return <LoadingPorducts/>

  return (
    <>
      <div className='mb-[10px] py-[5px] max-[680px]:hidden flex justify-between bg-[#EBEFF3] ml-[13px] max-[690px]:ml-0 duration-500 rounded-[6px] gap-[10px]'>
        <SortComponent/>
        <LimitComponent/>
      </div>
      <div className='grid grid-cols-3 max-[950px]:grid-cols-2 gap-[10px]'>
        {products?.map((product) => (<ProductCard key={product.id} product={product} extraStyle='mb-[30px] max-[1060px]:w-[200px] max-[951px]:w-[250px] max-[680px]:w-[100%]' extraStyleForImg='max-[1060px]:h-[200px] max-[951px]:h-[250px] max-[680px]:h-[300px]' />))}
      </div>
      {products?.length === 0 && 
      <div className='m-auto flex justify-center items-center flex-wrap gap-6'>
        <p>{t('notfoundproduct')}</p>
        <Button onClick={()=> clearSearchParams()} title='Hammasini tozalash'/>
        </div>}
        
    </>
  )
}

export default ProductsMain