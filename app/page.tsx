"use client";

import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import   './maxaGlobals.css'
import './maxaPageModule.css'
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import RealWork from "@/components/RealWork";
import RealStarApp from "@/components/RealStarApp";
import RealFeatures from "@/components/RealFeatures";
import Testimonials from "@/components/Testimonials";





// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    
    <>
    
     <Hero />
      <RealWork />
      <RealStarApp />
      <RealFeatures/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
      <Blog/>
    </>
   
  
  );
}


