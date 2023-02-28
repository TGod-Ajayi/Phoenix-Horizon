"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import Feature from "@/components/Feature"
import Testimonials from "@/components/Testimonials";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Feature />
      <Testimonials />
    </div>
  );
}
