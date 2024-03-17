import './styles.css'

const description_placement = [
  {paragraph: "Le Tampon, commune située sur l'île de La Réunion, offre un cadre de vie exceptionnel avec ses paysages verdoyants et son accès privilégié au Piton de La Fournaise."},
  {paragraph: "Avec ses 18 030 hectares et une population de 70 927 habitants, en constante croissance, le Tampon est une ville dynamique alliant une identité agricole et industrielle. Par ailleurs la commune fait partie de l'aire d'attraction de Saint-Pierre, dont elle est une commune du pôle principal."},
  {paragraph: "La résidence se situe dans le centre-ville de Tampon, offrant des services et commerces de proximité, pizzeria, pharmacie, station-service, commerce général. C’est un lieu de convergence sociale qui tend à se développer."},
  {paragraph: "Situation :"},
  {list: "Commerces de proximité dans un rayon de 400 m"},
  {list: "Supermarchés dans un rayon d'1 km "},
  {list: "Université de La Réunion et Campus universitaire sud à 600 m"}
]






const DeepDescription = ({ deepDetails, investReasons }: { deepDetails: string[], investReasons: string[] }) => {
  return (
    <div>
      <section>
      <h2>Description détaillé du projet</h2>
        <div>
          {
            deepDetails?.map((desc: string, index: number) => 
              <p key={index * Math.random()} >{desc}</p>
            )
          }
        </div>
      </section>
      <section>
        <div className='localisation'>
        <h1>Localisation</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.3764511225377!2d10.62080093740265!3d35.83977172136758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275813a806ba5%3A0x19a52343ba1dca65!2sPanorama%20M%C3%A9dical!5e0!3m2!1sen!2stn!4v1710622330141!5m2!1sen!2stn" 
          width="600"
          height="450"
        ></iframe>
        </div>
        <div className='description-emplacement'>
        {
          description_placement.map((txt, ind) => 
            txt.paragraph 
            ? <p key={Math.random() * ind} >{txt.paragraph}</p> 
            : <li key={Math.random() * ind}>{txt.list}</li>)
        }
        </div>
        <h2>Les bonnes raisons pour investir</h2>
        <div>
          <ul>
            {
              investReasons?.map((reason: string, index: number) => <li key={index * Math.random()} >{reason}</li>)
            }
          </ul>
        </div>
      </section>
    </div>
  )
}

export default DeepDescription
