"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getBanners = () => { 
    const {data = [], isLoading, isFetching, isError} = useQuery(({
        queryKey: ["banners"],
        queryFn: () => instance().get('/banners', {params: {limit: 1000}}).then(res => res.data)
    }))
    return {data, isLoading, isFetching, isError}
}