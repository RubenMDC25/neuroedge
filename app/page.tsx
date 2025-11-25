import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { DrCarlsonSection } from "@/components/dr-carlson-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <PageHero />
      <DrCarlsonSection />
      <TeamSection />
      <Footer />
    </>
  )
}
