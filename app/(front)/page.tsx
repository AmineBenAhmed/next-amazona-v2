/* eslint-disable @next/next/no-img-element */
import ProductItem from "@/components/products/ProductItem";
import useProjectService from "@/lib/hooks/useProjectStore";
import productService from "@/lib/services/productService";
import { convertDocToObject } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: process.env.PUBLIC_APP_NAME || 'CrowdFunding App',
  description: 
    process.env.PUBLIC_APP_DESCRIPTION || 'Plateform du crowdfunding en immoblier'
}

export default async function Home() {
  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest()

  return (
    <>
      <h2 className="text-2xl py-2" >Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {latestProducts.map(product => (
          <ProductItem key={product.slug} product={convertDocToObject(product)} />
        ))}
      </div>
    </>
  );
}
