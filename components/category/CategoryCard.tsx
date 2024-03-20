import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CategoryType = {
  imgSrc: string;
  imagetitle: string;
  horizon: string;
  benifices: string;
  titre: string;
  type?: string;
}

export default async function CategoryCard({
  imgSrc,
  imagetitle,
  horizon,
  benifices,
  titre,
  type
}: CategoryType) {
  const categoryColor = (category: string): string => {
    if (category == "projects") return "#3C5972"
    if (category == "agriculture") return "#7E9A7E"
    if (category == "startup") return "#C79A48"

    return "#3C5972"
  }
  return (
    <div className='card bg-white shadow-xl mb-4 image-card'>
      <figure className='border-2 border-green' >
        <Link href={`/${type}`} >
          <Image
            src={imgSrc}
            alt={imagetitle}
            width={300}
            height={300}
            className='h-64 w-full rounded-md object-fill'
            style={{
              width: '100svw'
            }}
          />
        </Link>
      </figure>
      <h1 className='text-black text-center font-bold text-2xl'>{titre}</h1>
      <div className='flex text-black justify-between ml-8 mt-8 mr-8 w-60' >
        <strong>Benifices: </strong>
        <h2>{benifices}</h2>
      </div>
      <div className='card-body bg-white text-black'> 
        <div className='card-actions flex items-center justify-between w-60'>
          <strong>Horizon: </strong> {horizon}
        </div>
      </div>
      <Link
        href={`/${type}`}
        className="voir-projets"
        style={{ backgroundColor: categoryColor(type || '') }}
      >
         <button >
           Voir les projets
         </button>
      </Link>
    </div>
  )
}
