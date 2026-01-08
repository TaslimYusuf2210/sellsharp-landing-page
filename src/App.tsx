import { Layout } from "./components/Layout"
import { Hero } from "./components/Hero"
import { FeaturesGrid } from "./components/FeaturesGrid"
import { ProblemSection } from "./components/ProblemSection"
import { ProcessStep } from "./components/ProcessStep"
import { Testimonials } from "./components/Testimonials"
import { CTA } from "./components/CTA"

function App() {
  return (
    <Layout>
      <Hero />
      <ProblemSection />
      <FeaturesGrid />
      <ProcessStep />
      <Testimonials />
      <CTA />
    </Layout>
  )
}

export default App
