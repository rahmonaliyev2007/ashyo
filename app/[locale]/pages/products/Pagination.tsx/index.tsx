"use client"
import React from 'react'
import productParams from '../ProductParametrs';
import { useTranslations } from 'next-intl';
import { PaginationFc } from '../SetParams/productsParams';

function ProductsPagination({totalPages}: {totalPages:number}) {
    const { page} = productParams();
    const t = useTranslations("Products");
    const { handlePrev, handleSetPage, handleNext } = PaginationFc();

    return (
        <div className={`flex justify-center gap-2 mt-8 flex-wrap ${totalPages === 1 && 'hidden'}`}>
            <button disabled={Number(page) <= 1} onClick={() => handlePrev(page)} className="px-3 text-[12px] py-1 rounded bg-[#134E9B] text-white cursor-pointer disabled:opacity-50">
                <span>{t('prev')}</span>
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} onClick={() => handleSetPage(i)} className={`px-3 py-1 rounded ${Number(page) === i + 1 ? 'bg-[#134E9B] text-white' : 'bg-[#EBEFF3] cursor-pointer hover:bg-[#134E9B]/30'}`} >
                    {i + 1}
                </button>
            ))}
            <button disabled={Number(page) >= totalPages} onClick={() => { handleNext(page, totalPages) }} className="px-3 py-1 text-[12px] rounded bg-[#134E9B] cursor-pointer text-white disabled:opacity-50" >
                <span>{t('next')}</span>
            </button>
        </div>
    )
}

export default ProductsPagination