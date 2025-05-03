"use client"
import { FacebookIcon, InstagramIcon, TelegramIcon, TwitterIcon, YouTubeIcon } from "@/assets/icons"
import ActionButton from "@/components/Actions";
import { ActionsButtonType } from "@/types/ButtonType";
import { useTranslations } from 'next-intl';
import Link from 'next/link'
import React from 'react'

export default function FooterRight() {
  const t = useTranslations("Footer");
      const socialLinks = [{ id: 1, to: "/", icon: <FacebookIcon /> }, { id: 2, to: "/", icon: <YouTubeIcon /> }, { id: 3, to: "/", icon: <TelegramIcon /> }, { id: 4, to: "/", icon: <TwitterIcon /> }, { id: 5, to: "/", icon: <InstagramIcon /> }]
  
  return (
    <div>
      <h4 className="text-[#000000B2] text-xl font-bold mb-[18px] max-w-[340px] w-full max-[920px]:mt-[40px] max-[750px]:mt-[0px] max-[750px]:mb-[4px] max-[750px]:text-[14px]">{t('contact')}</h4>
      <Link href={'tel:+998711234567'} className='text-2xl font-bold hover:underline max-[750px]:text-[#00000080] max-[750px]:text-base max-[350px]:text-sm'>+998 (71) 123-45-67</Link>
        <label className='block mt-[32px] max-[750px]:hidden'> 
            <span className='block'>{t('anyQuestion')}</span>
            <input type="text" placeholder={t('questionPlaceholder')} className='bg-[#EBEFF3] outline-none text-[12px] rounded-[6px] p-[10px] max-w-[340px] block w-full'/>
        </label>
        <div className="min-[750px]:hidden mt-[15px] ">
                <div className="flex gap-[10px] items-center flex-wrap">
                    {socialLinks.map((item: ActionsButtonType) => <ActionButton key={item.id} icon={item.icon} id={item.id} to={item.to} extraStyle="!w-[44px] !h-[44px]" />)}
                </div>
            </div>
    </div >
  )
}