import {
  AboutCompnent,
  Cta,
  FAQ,
  Features,
  Hero,
  HowItWorks,
  LandingFooter,
  LandingNavbar,
  Newsletter,
  Pricing,
  ScrollToTop,
  Services,
  Sponsors,
  Team,
  Testimonials,
} from "@/modules";

export function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <Hero />
      <Sponsors />
      <AboutCompnent />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <LandingFooter />
      <ScrollToTop />
    </>
  );
}
