"use client"
import { getSingleProduct } from '@/service/getSingleProduct';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function SingleProduct() {
    const {category , productId }:{category:string , productId:number | string} = useParams<any>();
    const {data:product} = getSingleProduct(productId)
  return (
    <div>{category} / {product.name}</div>
  )
}
