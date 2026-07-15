import NavBar from '@/components/navbar/NavBar'
import HeroSection from '@/components/hero/HeroSection'
import OurWorkSection from '@/components/our-work/OurWorkSection'
import ComparisonSection from '@/components/comparison/ComparisonSection'
import ClientSuccessCardsSection from '@/components/client-success-cards/ClientSuccessCardsSection'
import VideoTestimonialsSection from '@/components/video-testimonials/VideoTestimonialsSection'

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <OurWorkSection />
        <ComparisonSection />
        <ClientSuccessCardsSection />
        <VideoTestimonialsSection />
      </main>
    </>
  )
}
