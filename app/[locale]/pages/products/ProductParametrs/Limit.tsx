"use client"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import productParams from "."
import { useTranslations } from "next-intl"
import { ThemeContext } from "@/context/ThemeProvider"
import { useContext } from "react"
function LimitComponent() {
    const t = useTranslations("Products")
    const { limit , LimitParams} = productParams()
    const { theme } = useContext(ThemeContext);
    return (
        <Select value={limit} onValueChange={(e) => { LimitParams(e) }}>
            <SelectTrigger className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B]' : 'text-[#94A3B8] hover:text-[#F8FAFC]'} duration-300 border-none pl-0 !shadow-none max-[480px]:!text-[12px]`}>
                <SelectValue defaultValue={limit} placeholder={t('pageLimit')} />
            </SelectTrigger>
            <SelectContent className={`relative z-[101] border-none shadow-2xl ${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B] shadow-black bg-white' : 'text-[#94A3B8] hover:text-[#F8FAFC] shadow-white bg-[#0F172A]'} duration-300`}>
                <SelectGroup>
                    <SelectItem value="--">{t('all')}</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="9">9</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="16">16</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                    <SelectItem value="32">32</SelectItem>
                    <SelectItem value="64">64</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default LimitComponent