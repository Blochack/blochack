import { Footer } from '@/components/Footer';
import { BlogPageHero } from '@/components/blog/blogPageHero';
import { Topics } from '@/components/blog/topics';
import { PreventionLoss } from '@/components/sections/PreventionLoss';
import { RealTimeIntel } from '@/components/sections/RealTimeIntel';
import { VisualizeTransactions } from '@/components/sections/VisualizeTransactions';
import { Button } from '@/components/ui/button';
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <BlogPageHero />
      <Topics />
      <Footer />
    </div>
  )
}
