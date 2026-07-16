import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import Brands from "@/components/sections/Brands";
import Collections from "@/components/sections/Collections";
import EyeTestProcess from "@/components/sections/EyeTestProcess";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import CookieBanner from "@/components/ui/CookieBanner";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Header />

      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Brands />
        <Collections />
        <EyeTestProcess />
        <Testimonials />
        <About />
        <Gallery />
        <FAQ />
        <Blog />
        <CTA />
        <Contact />
      </main>

      <Footer />

      <FloatingWidgets />
      <BackToTop />
      <CookieBanner />
    </>
  );
}
