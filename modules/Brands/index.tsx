"use client"
import { API } from '@/hooks/getEnv';
import { Link, useRouter } from '@/i18n/navigation';
import { getBrands } from '@/service/getBrands'
import { BrandsType } from '@/types/BrandsType';
import React, { useContext } from 'react'
import './brands.css'
import { ThemeContext } from '@/context/ThemeProvider';

function Brands() {
    const { data: brands, isLoading, isError } = getBrands();
    const loadingDivs = new Array(8).fill(null);
    const router = useRouter();
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`${theme === 'dark' ? 'bg-[#313131]' : ''}`}>
            <div className="max-w-[1240px] custom-grid m-auto max-[1000px]:px-[10px] pt-[100px] overflow-hidden max-[560px]:pt-[33px]">
                {isLoading || isError
                    ? loadingDivs.map((_, index) => (
                        <div key={index} className={`grid-item-${index + 1} duration-300 loading`}></div>
                    ))
                    : brands.map((brand: BrandsType) => (
                        <React.Fragment key={brand.id}>
                            <Link href={`/pages/products?brand=${brand.id}`} className={`grid-item-${brand.id} grid-item hover:opacity-60 duration-300`}>
                                <img src={`${API}/uploads/${brand.image}`} alt={brand.name} />
                            </Link>
                            <div className="grid-item-8 duration-300">
                                <button className="text-[#134E9B] cursor-pointer" onClick={() => router.push('/pages/products')}>
                                    Ko'proq
                                </button>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
}
export default Brands