"use client"
import ProductCard from '@/components/Products/ProductCard'
import { ProductType } from '@/types/ProductType'
import React, { Dispatch, FC, SetStateAction, useContext, useEffect, useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { ThemeContext } from '@/context/ThemeProvider'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { useRouter } from '@/i18n/navigation'
import Button from '@/components/Button'

const ProductsMain = ({ products, setPage }: { products: ProductType[], setPage: Dispatch<SetStateAction<string | number>> }) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [sort, setSort] = useState(searchParams.get('sort') || '')
  const [limit, setLimit] = useState(searchParams.get('limit') || '8')
  const { theme } = useContext(ThemeContext);
  const t = useTranslations('Products')

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    sort === '--' ? params.delete('sort') : params.set('sort', String(sort))
    params.set('limit', String(limit))
    params.set('page', String(1))
    setPage(1)
    router.push(`?${params.toString()}`)
  }, [sort, limit])

  function clearSearchParams() {
    const url = new URL(window.location.href);
    url.search = '';
    window.history.replaceState({}, '', url);
  }

  return (
    <>
      <div className='mb-[10px] py-[5px] max-[680px]:hidden flex justify-between bg-[#EBEFF3] ml-[13px] max-[690px]:ml-0 duration-500 rounded-[6px] gap-[10px]'>
        <Select value={sort} onValueChange={(e) => { setSort(e) }}>
          <SelectTrigger className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B]' : 'text-[#94A3B8] hover:text-[#F8FAFC]'} duration-300 border-none shadow-none`}>
            <SelectValue defaultValue={sort} placeholder={t('sort')} />
          </SelectTrigger>
          <SelectContent className={`relative z-[101] border-none shadow-2xl ${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B] shadow-black bg-white' : 'text-[#94A3B8] hover:text-[#F8FAFC] shadow-white bg-[#0F172A]'} duration-300`}>
            <SelectGroup>
              <SelectItem value="--">{t('sortByDefault')}</SelectItem>
              <SelectItem value="price_asc">{t('sortByCheapest')}</SelectItem>
              <SelectItem value="price_desc">{t('sortByExpensive')}</SelectItem>
              <SelectItem value="rating_desc">{t('sortByRating')}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select value={limit} onValueChange={(e) => { setLimit(e) }}>
          <SelectTrigger className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B]' : 'text-[#94A3B8] hover:text-[#F8FAFC]'} duration-300 border-none shadow-none`}>
            <SelectValue defaultValue={limit} placeholder={t('pageLimit')} />
          </SelectTrigger>
          <SelectContent className={`relative z-[101] border-none shadow-2xl ${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B] shadow-black bg-white' : 'text-[#94A3B8] hover:text-[#F8FAFC] shadow-white bg-[#0F172A]'} duration-300`}>
            <SelectGroup>
              <SelectItem value="--">{t('all')}</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="16">16</SelectItem>
              <SelectItem value="24">24</SelectItem>
              <SelectItem value="32">32</SelectItem>
              <SelectItem value="64">64</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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