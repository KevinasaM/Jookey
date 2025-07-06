import Hero from "./components/Hero"
import Services from "./components/Services"
import StatsSection from "./components/StatsSection"
import PortfolioGrid from "./components/PortfolioGrid"
import Team from "./components/Team"
import About from "./components/About"
import ContactForm from "./components/ContactForm"
import NewsletterSubscribe from "./components/NewsletterSubscribe"
import InstagramFollow from "./components/InstagramFollow"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <StatsSection />
      <PortfolioGrid />
      <Team />
      <About />
      <ContactForm />
      <NewsletterSubscribe />
      <InstagramFollow />
    </>
  )
}
