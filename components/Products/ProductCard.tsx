import { Compare24Icon, HeartOutline24Icon } from '@/assets/icons'
import { calculateNasiya } from '@/hooks/calculateNasiya'
import { formatNumberWithSpaces } from '@/hooks/formatNumberwithSpace'
import { API } from '@/hooks/getEnv'
import { ProductType } from '@/types/ProductType'
import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import { ShoppingBag} from 'lucide-react'
import { useRouter } from '@/i18n/navigation'

function ProductCard({ product }: { product: ProductType }) {
    const router = useRouter();
    const handleGo = ()=>{
        router.push(`${product.category.name}/${product.id}`)
    }
    return (
        <div className='w-[270px] mx-[15px] group transition-all !duration-500'>
            <div className={`bg-[#EBEFF3]  w-full flex justify-center items-center h-[270px] rounded-[6px] overflow-hidden relative `}>
                <Image onClick={handleGo} src={`${API}/uploads/${product.image}`} alt={product.name} width={202} height={202} className='w-[80%] h-auto group-hover:scale-[1.1] duration-300 cursor-pointer' ></Image>
                <button className='absolute top-5 right-5 text-gray-500 text-[25px] cursor-pointer'><HeartOutline24Icon /></button>
            </div>
            <p  onClick={handleGo} className=' line-clamp-2 text-[14px] text-[#545D6A] mt-[16px] mb-[28px]'>{product.description}</p>
            <div className='flex items-end justify-between'>
                <div onClick={handleGo}>
                    <strong className='text-xl font-bold text-[#0A1729]'>{formatNumberWithSpaces(product.price)} uzs</strong>
                    <div className='bg-[#F02C961A] rounded-[3px] text-[#F02C96] py-[7px] px-2.5 text-[14px]'>{product.nasiya} / {formatNumberWithSpaces(calculateNasiya(product.price, product.nasiya))} uzs</div>
                </div>
                <div className='flex items-center gap-2'>
                    <Button icon={<Compare24Icon />} iconPosition='left' extraStyle='bg-transparent !text-[#545D6A] !border-[#545D6A] h-[50px] !p-0 w-[50px]' />
                    <Button icon={<ShoppingBag size={24}/>} iconPosition='left' extraStyle='!border-[#545D6A] h-[50px] !p-0 w-[50px]' />
                </div>
            </div>
        </div>
    )
}

export default ProductCard