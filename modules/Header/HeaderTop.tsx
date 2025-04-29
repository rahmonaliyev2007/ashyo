"use client"
import { ArrowDownIcon, LocationIcon } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { usePathname, useRouter } from '@/i18n/navigation'
import { getCookie } from 'cookies-next'
import { ThemeContext } from '@/context/ThemeProvider'
import { Moon, Sun } from 'lucide-react'

function HeaderTop() {
  const t = useTranslations("HeaderTop");
  const router = useRouter();
  const pathname = usePathname();
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [lang, setLang] = useState<'uz' | 'ru' | 'en' | any>(() => {
    const cookieLang = getCookie('NEXT_LOCALE');
    return (cookieLang === 'ru' || cookieLang === 'en' || cookieLang === 'uz') ? cookieLang : 'uz';
  });  
  return (
    <div className={`text-sm py-[10px] ${theme !== 'dark' ? 'bg-[#EBEFF3] ' : 'bg-[#0F172A]'} duration-500 relative z-[1] max-sm:hidden`}>
      <div className='containers flex justify-between items-center'>
        <nav className='flex items-center gap-[28px]'>
          <Link href={'/location'} className={`flex items-center gap-[10px] duration-300 ${theme === 'light' ? 'text-[#545D6A] hover:text-[#134E9B]' :'text-[#94A3B8] hover:text-[#F8FAFC]'}`}><LocationIcon /> <span>{t('address')}</span></Link>
          <Link href={'/aboutUS'} className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B]' : 'text-[#94A3B8] hover:text-[#F8FAFC]'} duration-300 `}> <span>{t('aboutUs')}</span></Link>
          <Link href={'/products'} className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B]' : 'text-[#94A3B8] hover:text-[#F8FAFC]'} duration-300`}> <span>{t('contact')}</span></Link>
          <Link href={'/contacts'} className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B]' : 'text-[#94A3B8] hover:text-[#F8FAFC]'} duration-300`}> <span>{t('products')}</span></Link>
        </nav>
        <div className='flex justify-end items-center gap-[18px]'>
          <Link href={`tel:++998711234567`} className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B]' : 'text-[#94A3B8] hover:text-[#F8FAFC]'} duration-300`}>+998 (71) 123-45-67</Link>
          <Select value={lang} onValueChange={(e) => { setLang(e); router.push(pathname, { locale: e }); }}>
            <SelectTrigger className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B]' : 'text-[#94A3B8] hover:text-[#F8FAFC]'} duration-300 border-none shadow-none`}>
              <SelectValue defaultValue={lang} placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent className={`relative z-[101] border-none shadow-2xl ${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B] shadow-black bg-white' : 'text-[#94A3B8] hover:text-[#F8FAFC] shadow-white bg-[#0F172A]'} duration-300`}>
              <SelectGroup>
                <SelectItem value="uz">uz</SelectItem>
                <SelectItem value="ru">ru</SelectItem>
                <SelectItem value="en">en</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <button onClick={toggleTheme} className={`relative h-[30px] w-[30px] ${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B]' : 'text-[#94A3B8] hover:text-[#F8FAFC]'} `}><Sun size={16} className={`${theme === 'dark' && 'opacity-0'} duration-300 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]`}/> <Moon size={16} className={`${theme === 'light' && 'opacity-0'} duration-300 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]`}/> </button>
        </div>
      </div>
    </div>
  )
}
export default HeaderTop