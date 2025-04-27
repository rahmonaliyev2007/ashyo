"use client"
import { API } from '@/hooks/getEnv';
import { Link } from '@/i18n/navigation';
import { getBrands } from '@/service/getBrands'
import { BrandsType } from '@/types/BrandsType';
import React from 'react'
import './brands.css'

function Brands() {
    const { data: brands, isLoading, isError } = getBrands();
    console.log(brands);
    const loadingDivs = new Array(8).fill(null);

    return (
        <div className="max-w-[1240px] custom-grid m-auto mt-[100px]">
            {isLoading || isError
                ? loadingDivs.map((_, index) => (
                    <div key={index} className={`grid-item-${index + 1} duration-300 loading`}>
                        <div className="loading-placeholder" />
                    </div>
                  ))
                : brands.map((brand: BrandsType) => (
                    <Link href="/" key={brand.id} className={`grid-item-${brand.id} hover:opacity-60 duration-300`}>
                        <img src={`${API}/uploads/${brand.image}`} alt={brand.name} />
                    </Link>
                  ))
            }
            <div className="grid-item-8 duration-300">
                <button className="text-[#134E9B]">
                    Ko'proq
                </button>
            </div>
        </div>
    );
}
export default Brands