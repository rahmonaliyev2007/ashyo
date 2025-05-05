"use client"
import Button from '@/components/Button'
import { useRouter } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

function Ad() {
    const t = useTranslations()
    const router = useRouter();
    return (
        <div className='containers'>
            <div className='w-full bg-[#282828] h-[420px] rounded-[10px] mt-[100px] mb-[150px] max-[1000px]:mt-[70px] max-[1000px]:mb-[100px] max-[610px]:mt-[50px] max-[610px]:mb-[70px] max-[1000px]:h-[350px] max-[800px]:h-[250px] max-[610px]:h-[200px] max-[510px]:h-[160px] pr-[10px]'>
                <div className='flex justify-between items-center h-full'>
                    <div className="bg-[radial-gradient(ellipse_at_center,_#3a3a3a_20%,_#282828_70%)] w-full h-full rounded-[10px] min-[610px]:pl-[50px]"><Image src="/images/pngwing.png" className='h-[500px] w-[500px] min-[1000px]:min-w-[500px] max-[1000px]:min-w-[450px] max-[1000px]:h-[450px] max-[800px]:min-w-[300px] max-[800px]:h-[300px] max-[610px]:min-w-[250px] max-[610px]:h-[250px] max-[510px]:min-w-[200px] max-[510px]:h-[200px] max-[400px]:h-[180px]' alt='naushni' width={500} height={500} priority/></div>
                    <div className="w-full h-full flex flex-col justify-center"><h3 className={`text-[32px] text-white leading-[38px] line-clamp-3 font-bold max-w-[438px] max-[1000px]:text-[25px] max-[800px]:text-xl max-[800px]:leading-[25px] max-[610px]:text-base max-[510px]:line-clamp-4 max-[510px]:text-sm max-[610px]:leading-[20px] max-[510px]:leading-[15px]`}>{t('adTitle')}</h3><Button onClick={()=> router.push(`/pages/8`)} title={t('moreBtn')} extraStyle={`max-w-[161px] bg-white mt-[5%] !text-[#111111] max-[800px]:text-sm max-[800px]:py-[8px] max-[510px]:py-[4px] max-[510px]:max-w-[70px] max-[610px]:text-xs max-[610px]:max-w-[100px]`}/></div>
                </div>
            </div>
        </div>
    )
}

export default Ad