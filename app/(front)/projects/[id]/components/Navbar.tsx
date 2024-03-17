'use client'

import { useEffect, useState } from "react";

import { Pages } from "../constants";

import './styles.css'
import DeepDescription from "./DeepDescription";
import Documents from "./Documents";
import Images from "./Images";
import useProjectService from "@/lib/hooks/useProjectStore";
import { Delicious_Handrawn } from "next/font/google";

type NavbarType =  {
  projectId: string, 
  images: string[], 
  name: string
}

const Navbar = ({projectId, images, name}: NavbarType) => {
  const [currentPage, setCurrentPage] = useState<string>(Pages.DEEP);
  const {projectDetails, loadProjectDetails} = useProjectService()
  
  useEffect(() => {
    loadProjectDetails(projectId)
  }, [])

  const rederSelectedPage = () => {
    if (currentPage === Pages.DEEP) {
      return (
        <DeepDescription
          investReasons={projectDetails?.investReasons!} 
          deepDetails={projectDetails?.deepDetails!} 
        />
      )
    } else if (currentPage === Pages.DOCUMENTS && projectDetails?.documents) {
      return (
        <Documents documents={projectDetails?.documents} />
      )
    } else if (currentPage === Pages.IMAGES) {
      return (
        <Images images={images} name={name} />
      )
    }
  }
  
  return (
    <>
      <div className="project-navbar" >
        <button
            className={currentPage == Pages.DEEP ? 'selected-btn' : ''}
          onClick={() => setCurrentPage(Pages.DEEP)}
        >
          Projet
        </button>
        <button
            className={currentPage == Pages.DOCUMENTS ? 'selected-btn' : ''}
          onClick={() => setCurrentPage(Pages.DOCUMENTS)}
        >Les détails</button>
        <button
          className={currentPage == Pages.IMAGES ? 'selected-btn' : ''}
          onClick={() => setCurrentPage(Pages.IMAGES)}
        >medias</button>
      </div>
      <div className="project-pages" >
        {rederSelectedPage()}
      </div>
    </>
  )
}

export default Navbar;

