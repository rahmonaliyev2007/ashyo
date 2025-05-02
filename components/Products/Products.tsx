"use client"
import { getProducts } from '@/service/getProducts'
import React, { useContext } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from './SliderSettings/settings';
import ProductCard from './ProductCard';
import { ProductType } from '@/types/ProductType';
import { ThemeContext } from '@/context/ThemeProvider';

function Products({ title , api }: { title: string , api:string}) {
    const { data: products, isLoading, isError } = getProducts(api);
    const {theme} = useContext(ThemeContext)
    if (isLoading || isError) {
        return (
            <div className={`m-auto py-4 ${theme === 'dark' ? 'bg-[#333]' : 'bg-white'} `}>
                <h2 className={`text-4xl max-co font-bold !my-11 ${theme === 'dark' ? 'text-white' : 'text-black'} `}>Most popular product</h2>
                <Slider {...settings} autoplay={false}>
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="p-2">
                            <div className="w-full h-[400px] bg-gray-200 flex justify-center items-center text-blue-500/20 skeleton rounded-lg loading">{isLoading ? 'Yuklanmoqda...' : 'Yuklashda xatolik yuz berdi'} </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
    
    return (
        <>
            <h2 className='font-bold text-[32px] containers !mt-[80px] !mb-[50px]'>{title}</h2>
            <Slider {...settings}>
                {products?.map((product:ProductType, index:number) => (
                    <ProductCard key={product.id || index} product={product} />
                ))}
            </Slider>
        </>
    )
}

export default Products