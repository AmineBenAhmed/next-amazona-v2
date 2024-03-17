import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ClockIcon } from '@heroicons/react/24/solid'
import { Project } from '@/lib/hooks/useProjectStore'

export default function ProductItem({ project }: { project: Project }) {
  if (!project) return <div></div>
  return (
    <div className='card bg-white shadow-xl mb-4'>
      <figure className='border-2 border-green' >
        <Link href={`/projects/${project?._id}`} >
          <Image
            src={project.image}
            alt={project.name}
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
        <Link href={`/product/${project?._id}`} >
          <h2 className='card-title font-bold text-2xl'>{project.name?.toUpperCase()}</h2>
        </Link>
        <p className='mb-2' >{project.description}</p>
        <div className='card-actions flex items-center justify-between'>
        </div>
      </div>
    </div>
  )
}
