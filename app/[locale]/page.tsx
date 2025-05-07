"use client"
import Products from "@/components/Products/Products";
import { ThemeContext } from "@/context/ThemeProvider";
import Ad from "@/modules/Ad";
import Brands from "@/modules/Brands";
import CategoryBrands from "@/modules/CategoryBrands";
import Hero from "@/modules/Hero";
import { useTranslations } from "next-intl";
import { useContext } from "react";

export default function Home() {
  const t = useTranslations()
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${theme === 'dark' && 'bg-[#313131]'}`}>
    <Hero/>
    <Brands/>
    <Products title={t('mostPopularProducts')} api="products"/>
    <div className='max-[690px]:hidden'><Products title={t('mostPopularProducts')} api="products"/></div>
    <div className='max-[690px]:hidden'><Products title={t('mostPopularProducts')} api="products"/></div>
    <CategoryBrands/>
    <Ad/>
    <Products title={t('productsOnSale')} api="products" aksiya={true}/>
    </div>
  );
}
