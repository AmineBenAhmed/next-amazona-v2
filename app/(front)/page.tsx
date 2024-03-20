/* eslint-disable @next/next/no-img-element */
import Cover from "@/components/cover/Cover";
import ProjectCard from "@/components/projects/ProjectCard";
import API from "@/lib/api";
import { Project } from "@/lib/hooks/useProjectStore";
import { convertDocToObject } from "@/lib/utils";
import { Metadata } from "next";

import './styles.css'
import CategoryCard from "@/components/category/CategoryCard";
import Categories from "@/components/category/Categories";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: process.env.PUBLIC_APP_NAME || 'CrowdFunding App',
  description: 
    process.env.PUBLIC_APP_DESCRIPTION || 'Plateform du crowdfunding en immoblier'
}

export default async function Home() {
  return (
    <>
      <Link href='/contact-us'  className="contact-button">
            contact-us
      </Link>
      <Cover />
      <div className="flex-grow container mx-auto px-4">
      <div className="mt-12 mb-24" ></div>
      <div className="desc-text" >
        <h1>CROWDFUNDING est la plateforme d’investissement de référence 
          <br />dans les projets d’avenir à fort potentiel</h1>
      </div>
      <div className="secteurs" >
        <h1 className="text-black text-center" >Nos secteurs en crowdfunding</h1>
      </div>
      <div className="categories-list">
        <Categories />
      </div>
      <div className="lg:flex mt-24">
        <Image
          src='/images/contact-us.jpeg'
          alt="contact-us"
          height={600}
          width={600}
          sizes="100vw"
          style={{
            width: '50rem',
            borderRadius: "0.5rem"
          }}
        />
        <div className="contact-card">
        <h1>Vous souhaitez être accompagné ?</h1>
        <p>
          Notre équipe reste à votre écoute,
          du lundi au vendredi de 9h00 à 12h30 et de 13h30 à 17h30
        </p>
        <button>
          Contactez-nous
        </button>
        </div>
      </div>
      <div className="lg:flex mt-24 shadow-lg mb-12">
        <Image
          src='/images/tunisiaCard.jpg'
          alt="contact-us"
          height={300}
          width={300}
          sizes="100vw"
          style={{
            width: '50rem',
            borderRadius: "0.5rem"
          }}
        />
        <div className="contact-card" style={{backgroundColor: 'white', color: 'black'}}>
        <h1>Selectctionner votre region d&#8217;investissement préféré </h1>
        <p>
          Nos projets sont distribué sur toute la Tunsie <br />
          zones d&#8217;agricultures, nouvelles zones ouvertes pour amenagement et construction
        </p>
        </div>
      </div>
      <div className="lg:flex mt-24 mb-12">
        <Image
          src='/images/crowdfunding.jpg'
          alt="contact-us"
          height={300}
          width={300}
          sizes="100vw"
          style={{
            width: '50rem',
            borderRadius: "0.5rem"
          }}
        />
        <div className="contact-card" style={{backgroundColor: 'white', color: 'black'}}>
        <h1>Participer avec une communauté qui a confiance à notre paltform </h1>
        <p>un financement participatifs avec des centaines d&#8217;invetisseurs</p>
        <p>devenir un investissur avec un montant minimum, <br />
         notre plateforme offre aux différentes catégories du peuples la possibilité d&#8217;investir</p>
        </div>
      </div>
      <div className="lg:flex md:flex justify-between content-center mb-10 w-[70svw] ml-20">
        <div className="lg:flex w-[15svw] flex-col text-center justify-center content-center shadow-md">
          <Image
           src="/images/central-bank.png"
           alt="banque centrale"
           width={250}
           height={250}
           sizes="100svw"
           className="ml-4"
          /> 
          <div className="text-black rounded-md text-2xl font-bold info-item">
            Approuvé par la banque centrale
          </div>
        </div>
        <div className="lg:flex w-[15svw] flex-col text-center justify-center content-center shadow-md">
          <Image
           src="/images/bank.png"
           alt="banque centrale"
           width={250}
           height={250}
           sizes="100svw"
           className="ml-4"
          /> 
          <div className="text-black rounded-md text-2xl font-bold info-item mt-2">
            Convention avec plusieurs banques
          </div>
        </div>  
        <div className="lg:flex w-[15svw] flex-col text-center justify-center content-center shadow-md">
          <div className="h-[12svw]">
            <Image
              src="/images/promoteur.png"
              alt="banque centrale"
              width={250}
              height={250}
              sizes="100svw"
              className="ml-4"
            /> 
          </div>
          <div className="text-black rounded-md text-2xl font-bold info-item">
            Convention avec promoteurs immobilier
          </div>
        </div>  
        <div className="lg:flex w-[15svw] flex-col text-center justify-center content-center shadow-md">
          <Image
           src="/images/buildings.jpg"
           alt="banque centrale"
           width={250}
           height={250}
           sizes="100svw"
           className="ml-4"
          /> 
          <div className="text-black rounded-md text-2xl font-bold info-item">
            Convention avec des entreprises de construction
          </div>
        </div>  
      </div>
      </div>
    </>
  );
}
