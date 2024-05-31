import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { DontTrustVerify } from '@/components/sections/DontTrustVerify';
import { PreventionLoss } from '@/components/sections/PreventionLoss';
import { RealTimeIntel } from '@/components/sections/RealTimeIntel';
import { VisualizeTransactions } from '@/components/sections/VisualizeTransactions';
import { Button } from '@/components/ui/button';
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <DontTrustVerify />
      <VisualizeTransactions />
      <RealTimeIntel />
      <PreventionLoss />
      <Footer />
    </div>
  )
}
