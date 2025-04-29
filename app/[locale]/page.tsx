import Products from "@/components/Products/Products";
import Brands from "@/modules/Brands";
import CategoryBrands from "@/modules/CategoryBrands";
import Hero from "@/modules/Hero";

export default function Home() {
  return (
    <>
    <Hero/>
    <Brands/>
    <Products title="Most popular products" api="products"/>
    <Products title="Most popular products" api="products"/>
    <Products title="Most popular products" api="products"/>
    <CategoryBrands/>
    </>
  );
}
