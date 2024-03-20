import CategoryCard from "./CategoryCard";

import './styles.css'

const Categories = () => (
  <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 w-full" >
    <CategoryCard
      imgSrc="/images/cover.jpg"
      imagetitle="contribution aux projets immobiliers"
      horizon="de 18 à 35 mois"
      benifices="plus que 15%"
      titre="Immobilier"
      type="projects"
    />
     <CategoryCard
      imgSrc="/images/agricultures.jpg"
      imagetitle="contribution aux projets agricultures"
      horizon="cours et long termes"
      benifices="plus que 10%"
      titre="Agriculture"
      type="agriculture"
    />
    <CategoryCard
      imgSrc="/images/startup.jpg"
      imagetitle="Financer des startups"
      horizon="cours et long termes"
      benifices="non déterminer"
      titre="Financement des startups"
      type="startup"
    />
  </div>

)

export default Categories