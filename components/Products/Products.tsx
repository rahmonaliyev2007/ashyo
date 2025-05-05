'use client'
import { getProducts } from '@/service/getProducts'
import React, { useContext } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from './SliderSettings/settings';
import ProductCard from './ProductCard';
import { ProductType } from '@/types/ProductType';
import { ThemeContext } from '@/context/ThemeProvider';

function Products({ title, api, aksiya }: { title: string, api: string, aksiya?: boolean }) {
  const { data: products, isLoading, isError } = getProducts(api);
  const { theme } = useContext(ThemeContext);


  if (isLoading || isError) {
    return (
      <div className={`m-auto py-4 ${theme === 'dark' ? 'bg-[#333]' : 'bg-white'} `}>
        <h2 className={`text-4xl max-co font-bold !my-11 containers ${theme === 'dark' ? 'text-white' : 'text-black'} `}>{title}</h2>
        <Slider {...settings} autoplay={false}>
          {[...Array(5)].map((_, index) => (
            <div key={index} className="p-2">
              <div className="w-full h-[400px] bg-gray-200 flex justify-center items-center text-blue-500/20 skeleton rounded-lg loading">
                {isLoading ? 'Yuklanmoqda...' : 'Yuklashda xatolik yuz berdi'}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  return (
    <>
      <h2 className='font-bold text-[32px] containers !mt-[80px] max-[1000px]:text-2xl max-[700px]:text-xl max-[800px]:!mt-[30px] max-[800px]:!mb-[20px] !mb-[50px]'>{title}</h2>
      <div className='max-[690px]:hidden'>
        <Slider {...settings}>
          {products?.filter((product: ProductType) => (aksiya ? product.is_aksiya : true)).map((product: ProductType, index: number) => (
            <ProductCard key={product.id || index} product={product} />
          ))}
        </Slider>
      </div>
      <div className='min-[690px]:hidden grid grid-cols-3 max-[640px]:grid-cols-2 px-2.5 gap-[15px]'>
        {products?.filter((product: ProductType) => (aksiya ? product.is_aksiya : true)).slice(0, 6)
          .map((product: ProductType, index: number) => (
            <ProductCard key={product.id || index} product={product} />
          ))}
      </div>
    </>
  );
}

export default Products;
