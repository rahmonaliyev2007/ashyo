
export const handlePrev = (page: number | string, searchParams: URLSearchParams, router: any, setPage: (value: number) => void) => {
    const newPage = Math.max(Number(page) - 1, 1);
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(newPage));
    router.push(`?${params.toString()}`);
    setPage(newPage);
};

export const handleNext = (page: number | string, searchParams: URLSearchParams, router: any, setPage: (value: number) => void, totalPages: number) => {
    const newPage = Math.min(Number(page) + 1, totalPages);
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(newPage));
    router.push(`?${params.toString()}`);
    setPage(newPage);
};

export const handleSetPage = (i: number, searchParams: URLSearchParams, router: any, setPage: (value: number) => void) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(i + 1));
    router.push(`?${params.toString()}`);
    setPage(i + 1);
};