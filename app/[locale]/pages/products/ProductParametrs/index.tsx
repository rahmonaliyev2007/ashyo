"use client"
import { useEffect, useState } from 'react'
import { useRouter } from '@/i18n/navigation'
import { useSearchParams } from 'next/navigation'
import useDebounce from '@/hooks/debounse'
import { getBrands } from '@/service/getBrands'
import { getCategories } from '@/service/getCategories'

const productParams = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const params = new URLSearchParams(searchParams.toString())

    const { data: brands } = getBrands()
    const { data: categories } = getCategories()

    const sort = searchParams.get('sort') || '--'
    const limit = searchParams.get('limit') || '9'
    const [price, setPrice] = useState([parseInt(searchParams.get('min') || '0', 10), parseInt(searchParams.get('max') || '50000', 10)])
    const brand_id = searchParams.get('brand') || '';
    const category_id = searchParams.get('category') || '';
    const debouncedPrice = useDebounce(price, 1100)
    const page = searchParams.get('page') || 1

    const clearSearchParams = () => {
        const url = new URL(window.location.href)
        url.search = ''
        window.history.replaceState({}, '', url)
    }

    useEffect(()=>{
        price[0] === 0 ? params.delete('min') : params.set('min', String(price[0]))
        price[1] === 50000 ? params.delete('max') : params.set('max', String(price[1]))
        router.push(`?${params.toString()}`)
        params.set('page', String(1))
        console.log('price ishladi');
    },[debouncedPrice])

    // const PriceParams = (min: number, max: number) => {
    //     useEffect(()=>{
    //         const delay = setTimeout(() => {
    //             min === 0 ? params.delete('min') : params.set('min', String(min))
    //             max === 50000 ? params.delete('max') : params.set('max', String(max))
    //             params.set('page', String(1))
    //             router.push(`?${params.toString()}`)
    //         }, 500);
    //         return () => clearTimeout(delay);
    //     },[price])
    // }

    const LimitParams = (id: number | string) => {
        params.set('limit', String(id))
        params.set('page', String(1))
        router.push(`?${params.toString()}`)
    }

    const SortParams = (id: number | string) => {
        if (id === '') {
            params.delete('sort')
        } else {
            params.set('sort', String(id))
        }
        params.set('page', String(1))
        router.push(`?${params.toString()}`)
    }

    const BrandParams = (id: number | string) => {
        if (id === '') {
            params.delete('brand')
        } else {
            params.set('brand', String(id))
        }
        params.set('page', String(1))
        router.push(`?${params.toString()}`)
    }

    const CategoryParams = (id: number | string) => {
        if (id === '') {
            params.delete('category')
        } else {
            params.set('category', String(id))
        }
        params.set('page', String(1))
        router.push(`?${params.toString()}`)
        console.log('category ishladi');

    }

    return {
        sort, SortParams,
        limit, LimitParams,
        page,
        price, setPrice,
        brand_id, brands, categories, category_id,
        clearSearchParams, BrandParams, CategoryParams
    }
}

export default productParams