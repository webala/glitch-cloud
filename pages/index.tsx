/** @format */

import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import OurWork from "../components/OurWork/OurWork";
import Services from "../components/Services/Services";
import Testimonisls from "../components/Testimonials/Testimonisls";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Glitch Cloud</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Banner />
      <OurWork />
      <Services />
      <About />
      <Testimonisls />
      <Contact />
      <Footer />
    </div>
  );
}
