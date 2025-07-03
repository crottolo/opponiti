import { Suspense } from "react"
import { Metadata } from "next"

// Static content components (SSR)
import { HeroContent } from "@/components/content/hero-content"
import { FeaturesContentV2 } from "@/components/content/features-content-v2"
import { StatsContent } from "@/components/content/stats-content"
import { BenefitsContent } from "@/components/content/benefits-content"
import { CTAContent } from "@/components/content/cta-content"
import { MarketingComparisonContent } from "@/components/content/marketing-comparison-content"

// Dynamic animated components (Client-side)
import { AnimatedHero } from "@/components/interactive/animated-hero"
import { AnimatedFeaturesV2 } from "@/components/interactive/animated-features-v2"
import { AnimatedStats } from "@/components/interactive/animated-stats"
import { AnimatedBenefits } from "@/components/interactive/animated-benefits"
import { AnimatedCTA } from "@/components/interactive/animated-cta"

export const metadata: Metadata = {
  title: "Opponiti - Stop al Telemarketing Selvaggio",
  description: "La prima piattaforma italiana che certifica le aziende legittime e combatte quelle abusive attraverso azioni legali collettive. Ti paghiamo €1 per iscriverti!",
  keywords: [
    "telemarketing", 
    "spam", 
    "call center", 
    "certificazione aziende", 
    "azioni legali collettive", 
    "registro opposizioni",
    "truffe telefoniche",
    "Italia"
  ],
  openGraph: {
    title: "Opponiti - Stop al Telemarketing Selvaggio",
    description: "Ti paghiamo €1 per iscriverti! Certifichiamo le aziende legittime e combattiamo quelle abusive.",
    type: "website",
    locale: "it_IT",
    siteName: "Opponiti"
  },
  twitter: {
    card: "summary_large_image",
    title: "Opponiti - Stop al Telemarketing Selvaggio",
    description: "Ti paghiamo €1 per iscriverti! La rivoluzione contro il telemarketing selvaggio."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://opponiti.com"
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white professional-bg subtle-grid">
      
      {/* Hero Section - SSR with Client Enhancement */}
      <noscript>
        <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8">
          <HeroContent />
        </section>
      </noscript>
      
      <Suspense fallback={
        <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8">
          <HeroContent />
        </section>
      }>
        <AnimatedHero />
      </Suspense>

      {/* Features Section */}
      <noscript>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <FeaturesContentV2 />
        </section>
      </noscript>
      
      <Suspense fallback={
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <FeaturesContentV2 />
        </section>
      }>
        <AnimatedFeaturesV2 />
      </Suspense>

      {/* Problem Stats Section */}
      <noscript>
        <StatsContent />
      </noscript>
      
      <Suspense fallback={<StatsContent />}>
        <AnimatedStats />
      </Suspense>

      {/* Marketing Comparison Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <MarketingComparisonContent />
      </section>

      {/* Benefits Section */}
      <noscript>
        <BenefitsContent />
      </noscript>
      
      <Suspense fallback={<BenefitsContent />}>
        <AnimatedBenefits />
      </Suspense>

      {/* Final CTA */}
      <noscript>
        <CTAContent />
      </noscript>
      
      <Suspense fallback={<CTAContent />}>
        <AnimatedCTA />
      </Suspense>
    </div>
  )
}