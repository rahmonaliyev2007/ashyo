"use client";
import React, { useContext } from 'react';
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
import { useRouter } from '@/i18n/navigation';
import { ThemeContext } from '@/context/ThemeProvider';

function Hero() {
    const router = useRouter();
    const { data: banners, isLoading } = getBanners();
    const t = useTranslations();
    const handleGoToSeeBanner = (id: number) => {
        router.push(`/pages/${id}`)
    }
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`pt-[20px] ${theme === "dark" && 'bg-[#313131]'} duration-500`}>
            <div className={` ${theme === 'dark' ? 'bg-[#525252]' : 'bg-[#F3F0F0]'} duration-500`}>
                <Swiper autoplay={{ delay: 5000, }} loop={true} speed={500} slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination, Navigation, Autoplay]} className="mySwiper max-[1000px]:!h-[400px] max-[800px]:!h-[300px] max-[500px]:!h-[210px]">
                    {isLoading ? (<SwiperSlide>
                        <div className='containers h-full flex justify-between items-center gap-[20px]'>
                            <div className='w-[55%]'>
                                <h2 className='h-[34px] w-[90%] mb-[15px] text-[44px] loading '></h2>
                                <h2 className='h-[34px] w-[50%] text-[44px] loading '></h2>
                                <p className=']mb-[6px] mt-[20px] w-[98%] h-[17px] loading'></p>
                                <p className=']mt-[6px] mb-[30px] w-[50%] h-[17px] loading'></p>
                                <div className='loading w-[137px] h-[55px] '></div>
                            </div>
                            <div className='w-[45%]'>
                                <div className='w-[80%] h-[80%] loading'></div>
                            </div>
                        </div>
                    </SwiperSlide>) : (
                        banners?.map((banner: BannerType) => (
                            <SwiperSlide key={banner.id}>
                                <h2 className={`${theme === 'dark' ? 'text-[#F1F1F1]' : 'text-[#0A1729]'} font-black leading-[120%] text-xl min-[500px]:hidden line-clamp-1 pl-[10px]`}>{banner.name}</h2>
                                <div className='containers h-full max-[500px]:h-auto flex justify-between items-center gap-[20px]'>
                                    <div className=' max-[800px]:w-[50%]'>
                                        <h2 className={`${theme === 'dark' ? 'text-[#F1F1F1]' : 'text-[#0A1729]'} font-black leading-[120%] text-[44px] max-[1000px]:text-4xl max-[800px]:text-2xl max-[500px]:hidden`}>{banner.name}</h2>
                                        <p className={`${theme === 'dark' ? 'text-[#C7C7C7]' : 'text-[#545D6A]'} mt-[6px] mb-[22px] max-[1000px]:text-sm max-[500px]:text-xs line-clamp-3 max-[500px]:mb-[10px]`}>{banner.description}</p>
                                        <Button onClick={() => handleGoToSeeBanner(banner?.product_id)} title={t('moreBtn')} extraStyle='!px-10 max-[1000px]:text-sm max-[500px]:text-xs max-[500px]:!py-[10px]' />
                                    </div>
                                    <div className='flex justify-end flex-col h-full items-end w-[45%] max-[1000px]:w-[40%]'>
                                        <img src={`${API}/uploads/${banner.image}`} alt="ashyo shop ashyo.uz banner img" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
            </div>
        </div>
    );
}

export default Hero;