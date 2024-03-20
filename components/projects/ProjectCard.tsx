import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { ClockIcon } from '@heroicons/react/24/solid'
import useProjectService, { Project } from '@/lib/hooks/useProjectStore'

import './styles.css'
import ProgressBar from '../progressbar/Progressbar'
import API from '@/lib/api'

export default function ProjectCard({ project }: { project: Project }) {
  const collectedAmountRate = project.collectedAmount && project.estimatedAmount ? Math.round((project.collectedAmount / project.estimatedAmount) * 100) : 0;
 // const {data: contributionsCount} = await API.get(`/contribution/project/${project._id}/count`)

  const { getProjectContributions, projectContributions: contributionsCount } = useProjectService()
  // console.log(projectContributions)
  useEffect(() => {
    if (project?._id)
    getProjectContributions(project._id)
  }, [])

  if (!project) return <div></div>
  return (
    <div className='card bg-white shadow-xl mb-4 image-card'>
      <figure className='border-2 border-green' >
        <Link href={`/projects/${project?._id}`} >
          <Image
            src={project.image}
            alt={project.name}
            width={300}
            height={300}
            className='h-64 w-full rounded-md object-fill'
            style={{
              width: '100svw'
            }}
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
        <Link href={`/projects/${project?._id}`} >
          <h2 className='card-title font-bold text-2xl'>{project.name?.toUpperCase()}</h2>
        </Link>
        <ProgressBar
          minProg={collectedAmountRate}  
          label="La progression du financement"
          barColor='#F9FAFB'
          progressColor='red'
          dataTip={`Montant collecté ${project.collectedAmount} TND`}
        />
        <div className='flex space-x-2' >
          <b>{contributionsCount}</b>
          <h3>Investisseurs</h3>
        </div>
        <p className='mb-2' >{project.description}</p>
        <div className='card-actions flex items-center justify-between'>
        </div>
      </div>
    </div>
  )
}
