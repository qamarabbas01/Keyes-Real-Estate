import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedProperties } from "@/components/featured-properties"
import { MeetAgent } from "@/components/meet-agent"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { MeetTeam } from "@/components/meet-team"
import { DirectionalFlow } from "@/components/DirectionalFlow"
import ByTheNumbers from "@/components/ByTheNumbers"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProperties />
      <MeetAgent />
      <DirectionalFlow />
      <ByTheNumbers />
      <MeetTeam />
      <Testimonials />
      <Footer />
    </main>
  )
}
