import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import axios from 'axios'
import API from '../api';

export type Project = {
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
  ETA?:                 string;
  conductor?:           string;
  status?:              string;
  profit?:             number;
}

type ProjectState = {
  projects: Project[],
  projectData: Project | {}
}

const initialState: ProjectState = {
  projects: [],
  projectData: {}
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
    projectData
   } = projectStore()

  return {
    projects,
    projectData,
    loadProjects: async () => {
      const { data } = await API.get('/project')
      projectStore.setState({
        projects: data
      })
    },
    loadProjectDetails: async (id: string) => {
      const { data } = await API.get(`/project/${id}`)

      projectStore.setState({
        projectData: data 
      })
    }
  }
}

  