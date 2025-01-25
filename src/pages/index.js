import Head from "next/head";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Achievements from "../../components/achievements/Achievements";
import About from "../../components/about/About";
import Approach from "../../components/approach/Approach";
import ApproachFiller from "../../components/approach-filler/ApproachFiller";
import Services from "../../components/services/Services";
import Clients from "../../components/clients/Clients";
import Gallery from "../../components/gallery/Gallery";
import ContactForm from "../../components/contact-form/ContactForm";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sideways 6</title>
        <meta name="description" content="Sideways 6, a division of AD6 Advertising, specializes in innovative event planning and brand building. Driven by creativity and excellence, we craft unique experiences that captivate audiences and strengthen brand identities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favIcon.svg" />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <Achievements />
        <About />
        <Approach />
        <ApproachFiller />
        <Services />
        <Clients />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
