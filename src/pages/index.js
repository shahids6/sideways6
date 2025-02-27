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
  const title = "Sideways 6 - Innovative Event Planning & Brand Building";
  const description = "Sideways 6, a division of AD6 Advertising, specializes in innovative event planning and brand building. Driven by creativity and excellence, we craft unique experiences that captivate audiences and strengthen brand identities.";
  const keywords = "event planning, brand building, corporate events, product launches, trade shows, conferences, event management bangalore, brand strategy";
  const ogImage = "https://sideways6.in/og-image.jpg"; // Make sure to add this image

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favIcon.svg" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content="https://sideways6.in" />
        
        {/* Twitter */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Additional SEO tags */}
        <meta name="author" content="Sideways 6" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <link rel="alternate" hrefLang="en" href="https://sideways6.in" />
        
        {/* PWA primary color */}
        <meta name="theme-color" content="#1a4f9d" />
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
