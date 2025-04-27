export type ProductType = {
    id: number;
    name: string;
    is_liked: boolean;
    category_id: string;
    description: string;
    nasiya: string;
    summary: string;
    price: number;
    rating: number;
    is_aksiya: boolean;
    brand_id: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

export type BannerType = {
    id: number;
    product_id: number;
    category_id: number | null;
    title: string | null;
    description: string;
    image: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    product: ProductType;
    category: null;
}