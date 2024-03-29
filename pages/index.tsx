import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Heading,Flex } from '@chakra-ui/react'
import Hero from '@/components/Hero'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Section6 from '@/components/Section6'
import Footer from '@/components/Footer'
import Section5 from '@/components/Section5'
import Navbar from '@/components/Navbar'
import Hero2 from '@/components/Hero2'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
       <Head>
        <title>Rahisi</title>
        <meta name="description" content="rahisi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
       <Hero />
       <Section2 />
       <Section3/>
       <Section4 />
       {/* <Section5 /> */}
       <Section6 />
       <Footer />
    </>
  )
}
