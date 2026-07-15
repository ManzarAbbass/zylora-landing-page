import NavBar from '@/components/navbar/NavBar'
import HeroSection from '@/components/hero/HeroSection'
import OurWorkSection from '@/components/our-work/OurWorkSection'

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <OurWorkSection />
      </main>
    </>
  )
}
