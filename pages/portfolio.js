import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Link from 'next/link';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
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
                        <Link href="/" className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Connexion</Link>
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
               <a href="#"><AiFillTwitterCircle  /></a>
               <a href="https://www.linkedin.com/in/vincent-delatouche-01119020a/"><AiFillLinkedin /></a>
               <a href="#"><AiFillYoutube /></a>
            </div>
            <div className=' relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96' >
                <Image src={deved} layout="fill" objectFit='cover'/>
            </div>
            </section>
        </main>
        </div>
    );
}