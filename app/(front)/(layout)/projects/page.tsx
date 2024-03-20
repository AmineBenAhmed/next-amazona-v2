"use client"

import ProjectCard from "@/components/projects/ProjectCard"
import useProjectService, { Project } from "@/lib/hooks/useProjectStore"
import { convertDocToObject } from "@/lib/utils"

import './styles.css'
import { useEffect, useState } from "react"


const ProjectDetails = () => {  
  const { projects, loadProjects } = useProjectService()
  const [searchText, setSearchText] = useState('')
  const [categoryType, setCategoryType] = useState([''])

  useEffect(() => {
    loadProjects()
  }, [])

  const handleCategoryType = (type: string) => {
    setCategoryType(currCategoryType => 
      currCategoryType.includes(type)
        ? currCategoryType.filter(cat => cat !== type)
        : [...currCategoryType, type]
      )
  }
   
  const handleCategoryStyle = (type: string, color: string) => ({
    backgroundColor: categoryType.includes(type) ? 'white' : color,
    color: categoryType.includes(type) ? color : 'white',
    border: categoryType.includes(type) ? `1px solid ${color}` : 'none',
  })


  return (
    <div className="cards-list-container" >
      <h2 className="text-2xl py-2 title" >Nos projets en crowdfunding</h2>
      <div className="projects-filters mb-12" >
        <div className="flex justify-between h-[2rem] text-black" >
          <p>Recherchez un projet ou filtrez l&apos;ensemble des projets selon différents critères.</p>
          <input
            type="text"
            placeholder="Cherchez par nom"
            className="rounded-md p-4 text-white"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
        </div>
        <div className="filer-btn-group" >
          <label
            onClick={() => handleCategoryType("immobilier")}
            style={handleCategoryStyle('immobilier', '#3C5972')}
          >
            IMMOBILIER
          </label>
          <label 
            onClick={() => handleCategoryType("agriculture")}
            className="bg-[#7E9A7E]"
            style={handleCategoryStyle('agriculture', '#7E9A7E')}
          >
            AGRICULTURE
          </label>
          <label 
            onClick={() => handleCategoryType("startups")}
            className="bg-[#C79A48]"
            style={handleCategoryStyle('startups', '#C79A48')}
          >
            STARTUPS
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project: Project) => (
          <ProjectCard key={project._id} project={convertDocToObject(project)} />
        ))}
      </div>
    </div>
  )
} 

export default ProjectDetails