import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import {
  Expertise,
  AgenticAI,
  SelectedWork,
  Career,
  AboutAndEducation,
  GetInTouch,
} from '@/components/sections/Portfolio'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Expertise />
        <AgenticAI />
        <SelectedWork />
        <Career />
        <AboutAndEducation />
        <GetInTouch />
      </main>
      <Footer />
    </>
  )
}
