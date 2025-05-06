import { useSearchParams } from "next/navigation";
import productParams from "../ProductParametrs";
import { useRouter } from "@/i18n/navigation";

export const PaginationFc = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
   
    const handlePrev = (page: number | string) => {
        const newPage = Math.max(Number(page) - 1, 1);
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', String(newPage));
        router.push(`?${params.toString()}`);
    };

    const handleNext = (page: number | string, totalPages: number) => {
        const newPage = Math.min(Number(page) + 1, totalPages);
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', String(newPage));
        router.push(`?${params.toString()}`);
       
    };

    const handleSetPage = (i: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', String(i + 1));
        router.push(`?${params.toString()}`);
        
    };

    return { handlePrev, handleSetPage, handleNext}
}
