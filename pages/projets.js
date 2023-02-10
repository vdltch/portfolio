import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Link from 'next/link';
import {AiFillHtml5, AiFillApi, AiFillCode} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/moiPhoto.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import { useState } from 'react';
import lpcb from '../public/lpcb.png'
import pluginWordpress from '../public/plugin-wordpress.png'
export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? 'dark' : ''}>
        <Head>
            <title>Vincent Delatouche - Portofolio</title>
            <meta name="description" content="oui oui baguette" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className=' bg-white px-10 dark:bg-gray-900' >
            <section className='min-h-screen'>
            <nav className=' py-10 mb-12 flex justify-between'>
                <h1 className='text-xl font-poppins text-gray-600 dark:text-teal-500'>vincentdelatouche.fr</h1>
                <ul className=' flex items-center'>
                    <li>
                        <BsFillMoonStarsFill onClick={() =>setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-teal-500'/>
                    </li>
                    <li>
                        <Link href="/Home" className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Accueil</Link>
                    </li>
                </ul>
            </nav>
            <div className='text-center p-10'>
                <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400'>Projets Professionnels</h2>
                <p className=' text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400'>
                        Vous trouverez ci-joint des projets réalisés à des fins professionnelles ou personelles. Cette section sera souvent mise à jour.
                </p>
            </div>
            <div className=' text-5xl flex justify-center text-gray-600 gap-16'>
               <a href="#"><AiFillApi  /></a>
               <a href="#"><AiFillHtml5 /></a>
               <a href="#"><AiFillCode /></a>
            </div>
            <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
              Création d&aposun nouveau site internet pour un lycée
             </h3>
              <p className="py-2">
                {/* Creating elegant designs suited for your needs following core
                design theory. */}
              </p>
              <h4 className="py-1 text-teal-600">Projet scolaire pour le Lycée Château Blanc</h4>
              <Image className='ml-24 p-5' src={lpcb} width={400} height={400} />
                <h3 className='py-3'>Technos utilisées</h3>  
                <p className='text-teal-600'>Front-end</p>       
                <p>HTML</p>   
                <p>CSS</p>     
                <p>JavaScript</p>      
                <p className=' text-teal-600 py-2'>Back-end</p> 
                <p>PHP</p>
                <p>SQL</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
              Création d&aposun Plugin Wordpress pour gérer des données
             </h3>
              <p className="py-2">
                {/* Creating elegant designs suited for your needs following core
                design theory. */}
              </p>
              <h4 className="py-1 text-teal-600">Plugin réalisé pendant un stage</h4>
              <Image className='ml-24 p-5' src={pluginWordpress} width={450} height={450} />
                <h3 className='py-3'>Technos utilisées</h3> 
                <p className=' text-teal-600'>Outils utilisés</p>   
                <p>Wordpress</p> 
                <p>API rest</p>
                <p className='text-teal-600 py-2'>Front-end</p>
                <p>Framework Bootstrap</p>
                <p className='text-teal-600 py-2'>Back-end</p>
                <p>PHP</p>
                <p>SQL</p>
            </div>
            </div>
            </section>
        </main>
        </div>
    );
}