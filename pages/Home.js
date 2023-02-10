import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Link from 'next/link';
import {AiFillMobile, AiFillLinkedin, AiFillMail} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/moiPhoto.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import { useState } from 'react';

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
                        <Link href="/projets" className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Mes projets</Link>
                    </li>
                </ul>
            </nav>
            <div className='text-center p-10'>
                <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400'>Vincent Delatouche</h2>
                <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Développeur Web</h3>
                <p className=' text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400'>
                    Jeune développeur aimant la programmation WEB  ayant des skills sur le front et back end. Rejoignez moi afin qu on puisse travail ensemble !
                </p>
            </div>
            <div className=' text-5xl flex justify-center text-gray-600 gap-16'>
               <a href="#"><AiFillMobile  /></a>
               <a href="https://www.linkedin.com/in/vincent-delatouche-01119020a/"><AiFillLinkedin /></a>
               <a href="#"><AiFillMail /></a>
            </div>
            <div className=' relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96' >
                <Image src={deved} layout="fill" objectFit='cover'/>
            </div>
            </section>
            <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
              Expériences Professionnelles
             </h3>
              <p className="py-2">
                {/* Creating elegant designs suited for your needs following core
                design theory. */}
              </p>
              <h4 className="py-1 text-teal-600">EISGE - 45200 Montargis</h4>
              <div className=' text-md leading-8'>
              <p className='py-1'>Chez EISGE j&apos;ai pu effectuer 15 semaines de stage lors de mon parcours en Baccalauréat Professionnelles. <br /> Durant ces 15 semaines j&apos;ai pu : </p>
              <p className="text-gray-800 py-1">Développer un plugin Wordpress en <span className=' text-teal-600'>php</span>,</p>
              <p className="text-gray-800 py-1">Créer et utiliser des <span className=' text-teal-600'>API</span></p>
              <p className="text-gray-800 py-1">Utilisation de language <span className='text-teal-600'>Front</span> et <span className='text-teal-600'>Back </span>end.</p>
                <br/>
                <h4 className="py-1 text-teal-600">Centre Hospitalier de l&apos;Agglomération Montargoise - 45200 Montargis</h4>
                <p>Au Cham j&apos;ai pu effectuer 5 semaines de stage.
                    Lors de ses 5 semaines, j&apos;ai pu prendre à distance des systèmes informatisés via <span className='text-teal-600'>VNC</span>. 
                    <br/>J&apos;ai pu gérer un<span className='text-teal-600'> AD</span> ou 
                    dit <span className='text-teal-600'>A</span>ctive <span className='text-teal-600'>D</span>irectory sous 
                    <span className='text-teal-600'> Windows Server</span> en ajoutant des utilisateurs sous différents status selon leurs status dans l&apos;entreprise.
                </p>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Compétences / Soft-Skills
              </h3>
              <h4 className="py-1 text-teal-600">Front-end</h4>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
              <h4 className="py-1 text-teal-600">Back-end</h4>
                <p>PHP</p>
                <p>Python</p>
                <p>Test</p>
              <h4 className="py-1 text-teal-600">Frameworks</h4>
                <p>Tailwind CSS</p>
                <p>Bootstrap</p>
                <p>React</p>
                <p>Next</p>
              <h4 className="py-1 text-teal-600">Design UI</h4>
                <p>Figma</p>
                <p>Photoshop</p>
              <h4 className="py-1 text-teal-600">Autres</h4>
                <p>NPM</p>
                <p>Git / Github</p>
                <p>Vercel app</p>
                <p>. NET</p>
                <p>C++</p>
                <p>Swift</p>

            </div>
            </div>
        </main>
        </div>
    );
}