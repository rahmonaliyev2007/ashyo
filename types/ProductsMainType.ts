import { ProductType } from "./ProductType";

export interface ProductsMainType { products: ProductType[], setPage: React.Dispatch<React.SetStateAction<string | number>>, isFetching:boolean, isLoading:boolean, isError:boolean}