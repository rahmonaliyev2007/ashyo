"use client"
import { API } from '@/hooks/getEnv';
import { Link } from '@/i18n/navigation';
import { getBrands } from '@/service/getBrands'
import { BrandsType } from '@/types/BrandsType';
import React from 'react'
import './brands.css'

function Brands() {
    const { data: brands } = getBrands();
    console.log(brands);

    return (
        <div className="max-w-[1240px] custom-grid m-auto mt-[100px]">
            {brands.map((brand: BrandsType) => (
                <Link href="/" key={brand.id} className={`grid-item-${brand.id} hover:opacity-60 transition`}>
                    <img src={`${API}/uploads/${brand.image}`} alt={brand.name} />
                </Link>
            ))}
            <div className="grid-item-8">
                <button className="cst-button block !max-w-[220px] !px-[5.625rem] rounded-lg bg-[#EBEFF3] text-[#134E9B] transition">
                    Ko'proq
                </button>
            </div>
        </div>
    )
}

export default Brands