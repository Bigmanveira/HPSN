import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import MissionSection from '../components/home/MissionSection';
import StatsSection from '../components/home/StatsSection';
import ProgramsOverview from '../components/home/ProgramsOverview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PartnersSection from '../components/home/PartnersSection';
import CTABanner from '../components/shared/CTABanner';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>HPS Network — Healthcare Professionals Support Network</title>
        <meta
          name="description"
          content="Join HPS Network, a nonprofit community supporting healthcare professionals through mentorship, wellness, professional development, events, and peer connection."
        />
        <meta property="og:title" content="HPS Network — Healthcare Professionals Support Network" />
        <meta
          property="og:description"
          content="A trusted digital platform empowering healthcare workers through community, mentorship, and support."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection />
      <MissionSection />
      <StatsSection />
      <ProgramsOverview />
      <TestimonialsSection />
      <PartnersSection />
      <CTABanner />
    </>
  );
}
