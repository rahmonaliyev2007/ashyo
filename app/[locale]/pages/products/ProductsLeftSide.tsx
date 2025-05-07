"use client"
import React from 'react'
import ProductVariations from '@/app/[locale]/pages/[productId]/ProductVariations';
import PriceComponent from './ProductParametrs/Price';

function ProductsLeftSide() {
   return (
        <div className={`min-w-[280px] w-[280px] bg-[#EBEFF3] p-[18px] rounded-[8px] max-[800px]:min-w-[220px] max-[680px]:hidden`}>
           <PriceComponent />
           <ProductVariations />
        </div>
    )
}

export default ProductsLeftSide


