import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import OurSolutions from "@/components/our-solutions"
import OurWork from "@/components/our-work"
import TrustedPartners from "@/components/trusted-partners"
import SolarSystems from "@/components/solar-systems"
import SubsidySection from "@/components/subsidy-section"
import SolarCalculator from "@/components/calculator-section"
import WhyChooseUs from "@/components/why-choose-us"
import InstallationProcess from "@/components/installation-process"
import Testimonials from "@/components/testimonials"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ChatWidget from "@/components/chatbot/ChatWidget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <OurSolutions />
      <OurWork />
      <TrustedPartners />
      <SolarSystems />
      <SubsidySection />
      <SolarCalculator />
      <WhyChooseUs />
      <InstallationProcess />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </main>
  )
}
