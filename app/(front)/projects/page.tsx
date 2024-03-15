'use client'
import useProjectService from "@/lib/hooks/useProjectStore"
import { useEffect } from "react"

const ProjectDetails = () => {
  const { loadProjects, projects } = useProjectService()
  console.log(projects)
  useEffect(() => { 
    loadProjects()
  }, [])

  return ( <>
         {/* <div className="w-full carousel rounded-box mt-4">
        {
          featuredProducts.map((product, index) => (
            <div
              key={product._id}
              id={`slide-${index}`}
              className="carousel-item relative w-full"
            >
              <Link href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} className="w-full"/>
              </Link>
              <div
                className="absolute flex justify-between 
                transform-translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href={`#slide-${
                  index === 0 ? featuredProducts.length - 1 : index - 1
                }`}
                className="btn btn-circle"
                >
                 {'<'}
                </a>
                <a href={`#slide-${
                  index === featuredProducts.length - 1 ? 0 : index + 1
                }`}
                className="btn btn-circle"
                >
                 {'>'}
                </a>

              </div>
            </div>
          ))
        }
      </div>
      
      */}
      </>
  )
} 

export default ProjectDetails