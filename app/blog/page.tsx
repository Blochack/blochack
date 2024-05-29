import { Footer } from '@/components/Footer';
import { BlogHero } from '@/components/blog/blogHero';
import { Topics } from '@/components/blog/topics';
import { PreventionLoss } from '@/components/sections/PreventionLoss';
import { RealTimeIntel } from '@/components/sections/RealTimeIntel';
import { VisualizeTransactions } from '@/components/sections/VisualizeTransactions';
import { Button } from '@/components/ui/button';
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <BlogHero />
      <Topics />
      <Footer />
    </div>
  )
}
