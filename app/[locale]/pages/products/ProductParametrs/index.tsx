"use client"
import { useEffect, useState } from 'react'
import { useRouter } from '@/i18n/navigation'
import { useSearchParams } from 'next/navigation'
import debounce from '@/hooks/debounse'
import { getBrands } from '@/service/getBrands'
import { getCategories } from '@/service/getCategories'

const productParams = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const { data: brands } = getBrands()
    const { data: categories } = getCategories()

    const [sort, setSort] = useState(searchParams.get('sort') || '')
    const [limit, setLimit] = useState(searchParams.get('limit') || '8')
    const [price, setPrice] = useState([0, 50000])
    const brand_id = searchParams.get('brand') || '';
    const category_id = searchParams.get('category') || '';
    const debouncedPrice = debounce(price, 1100)
    const page = searchParams.get('page') || 1
    
    const clearSearchParams = () => {
        const url = new URL(window.location.href)
        url.search = ''
        window.history.replaceState({}, '', url)
    }

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString())
        sort === '--' ? params.delete('sort') : params.set('sort', String(sort))
        params.set('limit', String(limit))
        page === 1 ? params.delete('page') : params.set('page', String(page))
        router.push(`?${params.toString()}`)
    }, [sort, limit, page])

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString())
        if (price[0] === 0) params.delete('min')
        else params.set('min', String(price[0]))
        if (price[1] === 50000) params.delete('max')
        else params.set('max', String(price[1]))
        params.set('page', String(page))
        router.push(`?${params.toString()}`)
    }, [debouncedPrice])

    const BrandParams = (id: number | string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (id === '') {
            params.delete('brand')
        } else {
            params.set('brand', String(id))
        }
        params.set('page', String(1))
        router.push(`?${params.toString()}`)
    }

    const CategoryParams = (id: number | string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (id === '') {
            params.delete('category')
        } else {
            params.set('category', String(id))
        }
        params.set('page', String(1))
        router.push(`?${params.toString()}`)
    }

    return {
        sort, setSort,
        limit, setLimit,
        page,
        price, setPrice,
        brand_id, brands, categories, category_id,
        clearSearchParams, BrandParams, CategoryParams
    }
}

export default productParams