"use client"
import { ClockIcon, ShopIcon, TruckIcon } from '@/assets/icons';
import Products from '@/components/Products/Products';
import { calculateNasiya } from '@/hooks/calculateNasiya';
import { formatNumberWithSpaces } from '@/hooks/formatNumberwithSpace';
import { API } from '@/hooks/getEnv';
import { Link } from '@/i18n/navigation';
import { getSingleProduct } from '@/service/getSingleProduct';
import { getProductVariations } from '@/service/getProductVariations';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

export default function SingleProduct() {
  const [isVariationsOpen, setIsVariationsOpen] = useState<boolean>(true);
  const { productId }: { category: string, productId: number | string } = useParams<any>();
  const { data: product, isLoading } = getSingleProduct(productId)
  const t = useTranslations("SingleProduct")
  const { data:variations } = getProductVariations(productId);
  
  const nmadrla = [{ icon: <TruckIcon />, title: t('truck') }, { icon: <ShopIcon />, title: t('shop') }, { icon: <ClockIcon />, title: t('clock') }]
  // realna miyyamga kemadi nima nom berish

  return (
    <>
      <div className='containers'>
        {!isLoading ? <div className='flex gap-3 text-[#B6BABF] text-[14px] max-[600px]:text-[12px] max-[600px]:mb-[8px] font-normal mt-[20px] mb-[22px]'><Link href={'/'}>{t('home')}</Link> / <p className='max-[500px]:hidden'>{product?.category?.name} </p> <span className='max-[500px]:hidden'>/</span> <p>{product?.name || "Mahsulot nomi topilmad"} </p></div> : <div className='loading max-w-[500px] h-[20px] max-[600px]:mb-[8px] font-normal mt-[20px] mb-[22px]'></div>}
        {!isLoading ? <div className='text-[#06172D] text-[32px] max-[600px]:text-xl font-bold max-[600px]:mb-[8px] mt-[20px] mb-[22px]'><p>{product?.name} </p></div> : <div className='loading max-w-[500px] h-[30px] max-[600px]:mb-[8px] font-normal mt-[20px] mb-[22px]'></div>}

        <div className='flex justify-between items-center gap-[32px] max-[600px]:gap-[10px] max-[950px]:flex-col '>
          <div className='w-full m-auto flex max-[500px]:flex-row-reverse items-start gap-[32px]  max-[500px]:gap-[10px]'>
            <div className='w-[130px] max-[500px]:w-[85px]'>{Array.from({ length: 4 }).map((_, i) => {
              return (<div key={i} className={`w-full h-[100px] max-[500px]:h-[65px] bg-[#EBEFF3] rounded-[6px] mb-[10px] grid place-items-center cursor-pointer overflow-hidden hover:bg-[#134E9B] duration-300 ${isLoading && "loading"}`}>{!isLoading && <Image className='w-[70%] h-auto' width={54} height={54} priority src={`${API}/uploads/${product?.image}`} alt={product?.name} />}</div>)
            })}</div>
            <div className={`max-w-[530px] max-[500px]:h-[290px] max-[950px]:max-w-[750px]  w-full h-[430px] rounded-[10px] bg-[#EBEFF3] grid relative place-items-center ${isLoading && "loading"}`}>{!isLoading && (<Image className='w-[70%] max-[950px]:w-[50%] max-[750px]:w-[70%] h-auto max-[450px]:w-[80%] max-[400px]:w-[90%]' width={341} height={341} priority src={`${API}/uploads/${product?.image}`} alt={product?.name} />)} <button className="absolute !left-[12px] max-[500px]:w-[34px] max-[500px]:h-[34px] cursor-pointer top-1/2 z-10 w-[44px] h-[44px] flex justify-center items-center transform -translate-y-1/2 bg-gray-100 text-black p-2 rounded-full shadow-lg hover:bg-gray-300" ><ChevronLeft /></button> <button className="absolute max-[500px]:w-[34px] max-[500px]:h-[34px] !right-[12px] cursor-pointer top-1/2 z-10 w-[44px] h-[44px] flex justify-center items-center transform -translate-y-1/2 bg-gray-100 text-black p-2 rounded-full shadow-lg hover:bg-gray-300" ><ChevronRight /></button></div>
          </div>
          <div className='w-[70%] max-[950px]:w-full'>
            <div className='min-[950px]:hidden'><h4 className='text-xs text-[#515D6C] mb-[20px]'>{t('color')}</h4> <div className='flex flex-wrap gap-[20px]'>{['#BA2525', '#111111', '#FFFFFF', '#DADADA', '#40CEFF'].map((color, i) => <div key={i} className={`bg-[${color}] w-[34px] h-[34px] rounded-[6px] shadow`}></div>)} </div></div>
            <div className='flex gap-[20px] items-end max-[950px]:mt-[24px] text-[#515D6C] max-[950px]:text-xs'>{t('price')} {!isLoading ? <p className='text-[32px] max-[600px]:text-xl max-[600px]:leading-[120%] text-[#06172D] font-bold leading-[80%]'>{formatNumberWithSpaces(product?.price)} <span className='uppercase text-[20px] max-[600px]:text-sm font-light'>uzs</span></p> : <div className='loading w-[50%] h-[35px]'></div>}</div>
            <div className='flex gap-[20px] items-end max-[950px]:my-[14px] text-[#515D6C] max-[950px]:text-xs'>{t('perMonth2')} {product?.nasiya} {!isLoading ? <p className='text-[32px] max-[600px]:text-xl max-[600px]:leading-[120%] text-[#06172D] font-bold leading-[80%]'>{formatNumberWithSpaces(calculateNasiya(product?.price, product?.nasiya))} <span className='text-[20px] max-[600px]:text-xs font-light text-[#515D6C]'>{t('forMonth2')}</span></p> : <div className='loading w-[50%] h-[35px]'></div>} </div>
            <div className={`${isLoading && 'loading w-full h-[55px]'} max-[950px]:hidden rounded-[6px] py-[15px] mt-[36px] mb-[10px] bg-[#EBEFF3] text-[#545D6A] text-base text-center`}>{!isLoading && `${t('perMonth')} ${formatNumberWithSpaces(calculateNasiya(product?.price, product?.nasiya))} uzs ${t('forMonth')} `}</div>
            <div className='flex justify-between items-center gap-[14px] mb-[30px]'><button className='w-full max-[950px]:text-sm rounded-[6px] max-[600px]:py-[10px] max-[500px]:text-xs text-[#134E9B] py-[14px] cursor-pointer border border-[#134E9B]'>{t('addCart')}</button><button className='w-full max-[950px]:text-sm max-[600px]:py-[10px] max-[500px]:text-xs bg-[#134E9B] rounded-[6px] text-white py-[14px] cursor-pointer border border-[#134E9B]'>{t('buy')}</button></div>
            <div>{nmadrla.map((nmadr, i) => <p className='text-[#06172DB2] max-[600px]:text-sm max-[500px]:text-xs max-[600px]:gap-[6px] text-base flex items-center gap-[16px] my-[10px] line-clamp-1' key={i}>{nmadr.icon} {nmadr.title}</p>)}</div>
          </div>
          
        </div>
        <div className=' w-full'>
            <div className={`w-full max-w-[600px] flex bg-gray-50 rounded p-2 relative z-0 justify-between mt-[80px] mb-[10px]`}>
              <button onClick={() => setIsVariationsOpen(true)} className={` cursor-pointer z-[2] rounded-sm p-2 px-5 w-[49%] duration-75 ${isVariationsOpen ? '' : 'hover:bg-gray-100'} max-[700px]:text-sm max-[500px]:text-xs`}>{t('phoneFeatures')}</button>
              <button onClick={() => setIsVariationsOpen(false)} className={` cursor-pointer z-[2] rounded-sm p-2 px-5 w-[49%] duration-75 ${isVariationsOpen && 'hover:bg-gray-100'} max-[700px]:text-sm max-[500px]:text-xs`}>{t('clientOpinion')}</button>
              <div className={`absolute top-2 bg-gray-200 rounded-sm w-[48%] h-[40px] max-[700px]:h-[35px] max-[500px]:h-[31px] transition-all duration-300 z-[1]`} style={{ left: isVariationsOpen ? '0.5rem' : 'calc(100% - 0.5rem - 47.8%)' }}></div>
            </div>
            <div className={`${isVariationsOpen ? "visible bg-white opacity-100" : "invisible opacity-0 hidden"} duration-500 max-w-[650px]`}>{ variations?.options?.length !== 0 ? variations?.options?.map((item:any)=> <div className='flex justify-between items-center text-[#545D6A] py-[5px] border-dashed border-b border-[#B6BABF]/50 max-[700px]:!text-sm max-[500px]:!text-xs'><strong className='w-full font-medium'>{variations?.name}</strong> <p className='w-full'>{item?.value}</p></div>) : <div>No any variations</div>}</div>
            <div className={`${!isVariationsOpen ? "visible bg-white opacity-100" : "invisible opacity-0 hidden"} duration-500 max-w-[650px]`}>Coming sooooooooooooooon...</div>
            </div>
      </div>

      <Products api='products' title={t('lastProductsTitle')} />
    </>
  )
}
