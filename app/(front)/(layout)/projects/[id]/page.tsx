
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import API from '@/lib/api'

import './projectStyle.css'
import Progressbar from '@/components/progressbar/Progressbar'
import Navbar from './components/Navbar'

export async function generateMetadata({
  params
}:{
  params: { id: string }
}) {
  const { data: project } = await API.get(`/projects/${params.id}`)

  return {
    title: project?.name || 'Project not found',
    description: project.description
  }
}

export default async function ProductDetails({
  params
}: {
  params: { id: string }
}) {
  const { data: project } = await API.get(`/projects/${params.id}`)
  const {data: contributionsCount} = await API.get(`/contribution/project/${params.id}/count`)

  const collectedAmountRate = Math.round((project.collectedAmount / project.estimatedAmount) * 100)
  if(!project) {
    return <div>Product not found</div>
  }
  return (
    <div className='container relative h-[auto] mt-20'>
      <div className='my-2 text-black font-bold flex' >
        <Link
          className='p-[0.5rem] rounded-[0.3rem] bg-[#D9C0A1]'
          href='/projects'
        >back to projects</Link>
      </div>
      <div className='card-img-container'>
        <div className='project-img'
        >
          <Image
            src={project.image}
            alt={project.name}
            width={640}
            height={640}
            priority
            sizes='100vw'
            className='object-cover w-full'
          />
        </div>
        <div className='card-style'>
          <div className='card-body rounded-md' >
            <h2 className="card-title-style">
              {project.name}
            </h2>
            <div className='flex flex-col space-y-4 md:space-y-5 pb-4 md:pb-0' >
            <div>
              <div className='project-desc'>
                {project.description}
              </div>
              <div className='text-lg text-black'>
                Le bénéfice dépassera {project.profit} %
              </div>
            </div>
              <Progressbar 
                minProg={collectedAmountRate}  
                label="La progression du financement"
                barColor='#F9FAFB'
                progressColor='green'
                dataTip={`Montant collecté ${project.collectedAmount} TND`}
              />
            <div>
            <div className='space-y-2 text-black' >
              <div className='flex justify-between w-full project-stats'>
                <div className='text-center'>
                  <p>Investisseurs</p>
                  <p>{contributionsCount}</p>
                </div>
                <div className='text-center min-amount'>
                  <p>Montant minimum</p>
                  <p>{project.minimumAmount} TND</p>
                </div>
                <div className='text-center'>
                  <p>Montant à collecter</p>
                  <p>{project.estimatedAmount} TND</p>
                </div>
              </div>
              <div>
              <div className='text-white project-addr' >
                <p className='font-blod'>Adress</p> 
                <div>
                  <p>{project.governorate}</p>
                  <p> {project.city}</p>
                </div>
              </div>

              </div>
            </div>
        </div>
          </div>
          </div>
        </div>
      </div>
      <div className='spcace-y-4 project-presentation'>
        <div>
          <b>Présentation</b>
          <ul className='presentation' >
            {project.presentation?.map((item: string) => 
              <li key={item} >{item}</li>)}  
          </ul>
        </div>
        <div>
          <b>A retenir</b>
          <ul className='main-points'>
            {project.mainPoints.map((item: string) => 
              <li key={item} >{item}</li>)}
          </ul>
        </div>
      </div>
      <div>
        <Navbar 
          projectId={params.id}
           images={project.photos}
           name={project.name}
        />
    </div>
    </div>
  )
}
