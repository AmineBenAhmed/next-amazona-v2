import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import API from '../api';

export type Project = {
  _id?:                string;
  name:                string;
  governorate:         string;
  city:                string;
  address:             string;
  location?:           [number, number];
  minimumAmount:       number;
  estimatedAmount?:     number;
  collectProgress?:     number;
  acheivementProgress?: number;
  description:          string;
  RIB?:                 string;
  photos?:              string[];
  image:                string;
  ETA?:                 string;
  conductor?:           string;
  status?:              string;
  profit?:             number;
  presentation?:        string[];
  mainPoints?:          string[];
}

export type ProjectDetails = {
  deepDetails: string[];
  documents: {name: string, link: string}[];
  photos?: string[];
  financingStructure: string[];
  projectBudget?: string[];
  investReasons?: string[]
}

type ProjectState = {
  projects: Project[],
  projectData: Project | null,
  projectDetails: ProjectDetails | null
}

const initialState: ProjectState = {
  projects: [],
  projectData: null,
  projectDetails: null
}

export const projectStore = create<ProjectState>() (
  persist(() => initialState, {
    name: 'projectStore'
  })
)

//export const cartStore = create<Cart>(() => initialState)

export default function useProjectService() {
  const { 
    projects,
    projectData,
    projectDetails,
   } = projectStore()

  return {
    projects,
    projectData,
    projectDetails,
    loadProjects: async () => {
      const { data } = await API.get('/project')
      projectStore.setState({
        projects: data
      })
    },
    loadProjectData: async (id: string) => {
      const { data } = await API.get(`/project/${id}`)

      projectStore.setState({
        projectData: data 
      })
    },
    loadProjectDetails: async (id: string) => {
      const { data } = await API.get(`/details/${id}`)

      projectStore.setState({
        projectDetails: data
      })
    }
  }
}

  