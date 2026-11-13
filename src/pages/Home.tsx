import { PageTransition } from '../components/layout/PageTransition';
import { AboutTeaser } from '../components/home/AboutTeaser';
import { CTABanner } from '../components/home/CTABanner';
import { FAQ } from '../components/home/FAQ';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/home/Marquee';
import { ProcessPinned } from '../components/home/ProcessPinned';
import { ServiceArea } from '../components/home/ServiceArea';
import { ServicesShowcase } from '../components/home/ServicesShowcase';
import { Testimonials } from '../components/home/Testimonials';
import { WhyChooseUs } from '../components/home/WhyChooseUs';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Marquee />
      <AboutTeaser />
      <ServicesShowcase />
      <ProcessPinned />
      <WhyChooseUs />
      <FeaturedProjects />
      <ServiceArea />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </PageTransition>
  );
}
