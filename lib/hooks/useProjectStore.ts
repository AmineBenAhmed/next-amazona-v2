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
  collectedAmount?:     number;
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
  projectDetails: ProjectDetails | null,
  projectContributions: number,
  projectsByType: Project[]
}

const initialState: ProjectState = {
  projects: [],
  projectData: null,
  projectDetails: null,
  projectContributions: 0,
  projectsByType: []
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
    projectContributions,
    projectsByType
   } = projectStore()

  return {
    projects,
    projectData,
    projectDetails,
    projectsByType,
    projectContributions,
    loadProjects: async () => {
      const { data } = await API.get('/projects')
      projectStore.setState({
        projects: data.projects
      })
    },
    loadProjectData: async (id: string) => {
      const { data } = await API.get(`/projects/${id}`)

      projectStore.setState({
        projectData: data 
      })
    },
    loadProjectDetails: async (id: string) => {
      const { data } = await API.get(`/details/${id}`)

      projectStore.setState({
        projectDetails: data
      })
    },
    getProjectContributions: async (id: string) => {
      const { data } = await API.get(`/contribution/project/${id}/count`);
      projectStore.setState({
        projectContributions: data
      })
    },
    getProjectsByType: async (types: string[]) => {
      const { data } = await API.get('/projects/type', {params: types});
      projectStore.setState({
        projects: data.projects
      })
    }
  }
}

  