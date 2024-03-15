import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ClockIcon } from '@heroicons/react/24/solid'

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className='card bg-white shadow-xl mb-4'>
      <figure className='border-2 border-green' >
        <Link href={`/product/${product.slug}`} >
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className='object-cover h-64 w-full'
          />
        </Link>
      </figure>
      <div>  
      <div className='mt-4 ml-3 flex justify-start w-full'>
      <ClockIcon className="h-6 w-6 text-green-500 mr-3" />
        <p className='text-green-500' >Collecte en cours</p>
      </div>

      </div>
      <div className='card-body bg-white text-black'>
        <Link href={`/product/${product.slug}`} >
          <h2 className='card-title font-bold text-2xl'>{product.name?.toUpperCase()}</h2>
        </Link>
        <p className='mb-2' >{product.brand}</p>
        <p className='mb-2' >{product.description}</p>
        <div className='card-actions flex items-center justify-between'>
          <span className='text-2xl' >{product.price}$</span>
        </div>
      </div>
    </div>
  )
}
