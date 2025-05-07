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
      <>
      <div className='containers'>
        <h2 className='font-bold text-[32px] !max-w-[600px] !m-0 h-[40px] loading !mt-[80px] max-[800px]:!mt-[30px] max-[800px]:!mb-[20px] !mb-[50px]'></h2>
        </div>
      <div className={`m-auto py-4 `}>
        <Slider {...settings} autoplay={false}>
          {[...Array(5)].map((_, index) => (
            <div key={index} className="p-2">
              <div className="w-full h-[300px] rounded-lg loading"></div>
              <div className='w-full h-[17px] loading mt-[15px]'></div>
              <div className='w-[80%] h-[17px] loading mt-[5px]'></div>
            </div>
          ))}
        </Slider>
      </div>
      </>
    );
  }

  return (
    <>
      <h2 className={`font-bold text-[32px] ${theme === 'dark' ? 'text-[#F1F1F1]' : 'text-black'} containers !mt-[80px] max-[1000px]:text-2xl max-[700px]:text-xl max-[800px]:!mt-[30px] max-[800px]:!mb-[20px] !mb-[50px]`}>{title}</h2>
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
