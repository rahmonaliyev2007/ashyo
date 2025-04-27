"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getBanners } from '@/service/getBanners';
import { BannerType } from '@/types/BannerType';
import { useTranslations } from 'next-intl';
import Button from '@/components/Button';
import { API } from '@/hooks/getEnv';

function Hero() {
    const { data: banners, isLoading, isError } = getBanners();

    const t = useTranslations();

    return (
        <div className='bg-[#F3F0F0] mt-[20px]'>
            <Swiper autoplay={{ delay: 5000, }} loop={true} speed={500} slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination, Navigation, Autoplay]} className="mySwiper">
                {isLoading ? (<SwiperSlide>Loading...</SwiperSlide>) : (
                    banners?.map((banner: BannerType) => (
                        <SwiperSlide key={banner.id}>
                            <div className='containers h-full flex justify-between items-center gap-[20px]'>
                                <div>
                                    <h2 className='text-[#0A1729] font-black leading-[120%] text-[44px]'>{banner.name}</h2>
                                    <p className='text-[#545D6A] mt-[6px] mb-[22px]'>{banner.description}</p>
                                    <Button title={t('moreBtn')} extraStyle='!px-10' />
                                </div>
                                <div className='flex justify-end flex-col h-full items-end w-[45%]'>
                                    <img src={`${API}/uploads/${banner.image}`} alt="ashyo shop ashyo.uz banner img" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
        </div>
    );
}

export default Hero;