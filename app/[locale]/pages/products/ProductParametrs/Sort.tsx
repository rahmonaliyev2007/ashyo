"use client"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import productParams from "."
import { useTranslations } from "next-intl"
import { ThemeContext } from "@/context/ThemeProvider"
import { useContext } from "react"

function SortComponent() {
    const t = useTranslations("Products")
    const { sort, setSort } = productParams()
    const { theme } = useContext(ThemeContext);
    return (
        <Select value={sort} onValueChange={(e) => { setSort(e) }}>
            <SelectTrigger className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B] ' : 'text-[#94A3B8] hover:text-[#F8FAFC]'}  duration-300 border-none pr-0 !shadow-none max-[480px]:!text-[12px]`}>
                <SelectValue defaultValue={sort} placeholder={t('sort')} />
            </SelectTrigger>
            <SelectContent className={`relative z-[101]  border-none shadow-2xl ${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B] shadow-black bg-white' : 'text-[#94A3B8] hover:text-[#F8FAFC] shadow-white bg-[#0F172A]'} duration-300`}>
                <SelectGroup className='max-[680px]:p-0'>
                    <SelectItem value="--">{t('sortByDefault')}</SelectItem>
                    <SelectItem value="price_asc">{t('sortByCheapest')}</SelectItem>
                    <SelectItem value="price_desc">{t('sortByExpensive')}</SelectItem>
                    <SelectItem value="rating_desc">{t('sortByRating')}</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

    )
}

export default SortComponent