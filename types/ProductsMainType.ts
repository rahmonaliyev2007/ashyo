import { ProductType } from "./ProductType";

export interface ProductsMainType {
    products: ProductType[],
    isFetching: boolean,
    isLoading: boolean,
    isError: boolean
}