import { FooterFoot } from '@/components/FooterFoot';
import { BlogPageHero } from '@/components/blog/blogPageHero';
import { BlogDetail } from '@/components/blog/blogDetail';
import { PreventionLoss } from '@/components/sections/PreventionLoss';
import { RealTimeIntel } from '@/components/sections/RealTimeIntel';
import { VisualizeTransactions } from '@/components/sections/VisualizeTransactions';
import { Button } from '@/components/ui/button';
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <BlogPageHero />
      <BlogDetail />
      <FooterFoot />
    </div>
  )
}
