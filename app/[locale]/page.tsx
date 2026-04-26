import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import WhatIncluded from '@/components/WhatIncluded';
import AdditionalServices from '@/components/AdditionalServices';
import WhyUs from '@/components/WhyUs';
import HowItWorks from '@/components/HowItWorks';
// import Reviews from '@/components/Reviews';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import FloatingContacts from '@/components/FloatingContacts';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <WhatIncluded />
        <AdditionalServices />
        <WhyUs />
        <HowItWorks />
        {/* <Reviews /> — temporarily hidden */}
        <ContactCTA />
      </main>
      <Footer />
      <FloatingContacts />
    </>
  );
}
