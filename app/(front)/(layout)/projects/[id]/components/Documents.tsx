import React from 'react'

import './styles.css'
import Link from 'next/link';
import ProgressBar from '@/components/progressbar/Progressbar';

type DocumentType = {
  name: string;
  link: string;
}

type Documents = {
  documents: DocumentType[]
}

const fakedata = {
  details_immobiliere: {
    'N° de cadastre': 'BW 2946 -2854' ,
    "N° d'autorisation d'urbanisme": "PC 974422 22 A0162 & PC 974422 22 A0162 T1",
    "Date d'obtention du permis": "19/10/2022",
    "Bâtiment(s)": 1,
    "Logement(s)": 45,
    "Parking(s)": 20,
    "Surface du terrain": "1100m2",
    "Surface hâbitable": "2000m2"
  },
  nature_projet: [
    {paragraph: "La résidence MEMONA sera composée de 45 logements sociaux à destination d'étudiants et de jeunes actifs."},
    {paragraph: "La résidence sera composée de :"},
    {list: "19 logements de Type T1 d'une surface moyenne de 29,30 m²"},
    {list: "6 logements de Type T1 Bis d'une surface de 41,25 m²"},
    {list: "13 logements de Type T2 d'une surface moyenne de 55 m²"},
    {paragraph: "Tous les appartements disposeront d'un balcon ou d'une varangue."},
    {paragraph: "La résidence accueillera un espace de co-working, 20 places de stationnement et un local à vélo en sous-sol."}
  ],
  niveau_precommercialisation:  [
    {paragraph: "Un Contrat de Promotion Immobilière (CPI) a été mis en place pour cette opération entre la SCI ELFE 25 et la SNC OUTREMER RESIDENCES PROMOTION, deux sociétés du Groupe :"},
    {paragraph: "La résidence sera composée de :"},
    {list: "La SCI ELFE 25, \"le Maître d'Ouvrage\" s'occupe de la partie administrative (acquisition du foncier, obtention du PC, puis gestion de l'ensemble immobilier après construction)."},
    {list: "La SNC OUTREMER RESIDENCES PROMOTION, \"le Promoteur\" réalisera les travaux pour le compte de la SCI ELFE 25."},
    {paragraph: "Il s'agit donc d'une vente en bloc de l'ensemble des 45 logements, contractualisée par le CPI entre le Maître d'Ouvrage et le Promoteur. "},
  ],
  structure_financement: [
    {type: 'Fonds propres', qui: '', pourcentage: '100', montant: 750000},
    {type: 'Fonds propres', qui: 'Opérateur', pourcentage: '20', montant: 150000},
    {type: 'Emprunt obligataire', qui: 'contributeurs', pourcentage: '80', montant: 600000},
    {type: 'Dette', qui: '', pourcentage: '100', montant: 3960000},
    {type: 'Prêt bancaire', qui: 'Banque', pourcentage: '100', montant: 3960000},
    {type: 'Commercialisation', qui: '', pourcentage: '', montant: 3960000},
    {type: '', qui: '', pourcentage: 'Total', montant: 11182000},
  ],
  budget_previsionnel: {
    "Chiffres d'affaire": "6 472 323" ,
    "Charges foncières": "-336 800",
    "Coût de travaux et études": "-5 231 640",
    "Bâtiment(s)": 1,
    "Frais généraux et financiers": "-188 760",
    "Honoraires de gestion": "-330 000",
    "Prix de revient": "6 087 200",
    "Marge opérationnelle": "385 123"
  },
    
}

const Documents: React.FC<Documents> = ({documents}) => {

  return (
    <div className='project-documents' >
      <section>
        <h2>Les documents</h2>
        <div className='pdf-files'>
        { documents.length ?
          documents.map(({ name, link }: DocumentType) => 
            <Link href={link} key={link} >{name}</Link>)
          : <h5>aucun document pour le moment</h5>
        }
        </div>
      </section>
      <section>
        <h2>Détails du projet immobilier</h2>
        <div className='project-legal-data'>
          <ul>
            {
              Object.entries(fakedata.details_immobiliere).map(el => 
                <li key={el[0]} ><p>{el[0]}</p> <p>{el[1]}</p></li>)
            }
          </ul>
        </div>
      </section>
    
        {
          fakedata.nature_projet?.length &&
          <section>
            <h2>Nature du produit:</h2>
            <div className='nature-projet'>
              {
                fakedata.nature_projet.map((txt, ind) => 
                  txt.paragraph 
                  ? <p key={Math.random() * ind} >{txt.paragraph}</p> 
                  : <li key={Math.random() * ind}>{txt.list}</li>)
              }
            </div>
          </section>
        }

        {
          fakedata.niveau_precommercialisation?.length &&
          <section>
            <h2>Niveau de pré-commercialisation:</h2>
            <div className='precommercialisation'>
              {
                fakedata.niveau_precommercialisation.map((txt, ind) => 
                  txt.paragraph 
                  ? <p key={Math.random() * ind} >{txt.paragraph}</p> 
                  : <li key={Math.random() * ind}>{txt.list}</li>)
              }
            </div>
          </section>
        }
      <section className='details-financement'>
        <h1>Aspect financier du projet</h1>
        { fakedata.structure_financement?.length &&
          <div className='structure-financement'>
            <h2>Structure de financement</h2>
             <table>
              <tr>
                <th>Type</th>
                <th>Qui?</th>
                <th>%</th>
                <th>Combien</th>
              </tr>
              <tbody>
                {
                  fakedata.structure_financement.map(el => (
                    <tr key={Math.random() * 100}>
                      <td key={Math.random() *  100}>{el.type}</td>
                      <td key={Math.random() *  100}>{el.qui}</td>
                      <td key={Math.random() *  100}>{el.pourcentage || 0}%</td>
                      <td key={Math.random() *  100}>{el.montant} <b>TND</b></td>
                    </tr>  
                  ))
                }
                </tbody>
             </table>
             <div>
             </div>
          </div>
        }
        <div className='buget-previsionnel' >
          <h1>Budget du projet prévisionnel (HT)</h1>
          <div className='project-legal-data'>
          <ul>
            {
              Object.entries(fakedata.budget_previsionnel).map(el => 
                <li key={el[0]} ><p>{el[0]}</p> <p>{el[1]}</p></li>)
            }
          </ul>
        </div>
        </div>
        <div>
          <h1>Couverture du prix de revient</h1>
          <ProgressBar
            minProg={55}  
            label="Prix de revient"
            barColor='#E6E3DF'
            progressColor='blue'
            dataTip={`prix de revient ${54215} TND`}
          />
          <ProgressBar
            minProg={80}  
            label="Structure de financement"
            barColor='#E6E3DF'
            progressColor='red'
            dataTip={`prix de revient ${54215} TND`}
          />
        </div>
      </section>
    </div>
  )
}

export default Documents
