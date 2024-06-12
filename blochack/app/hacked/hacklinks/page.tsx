"use client"
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { DontTrustVerify } from '@/components/sections/DontTrustVerify';
import { PreventionLoss } from '@/components/sections/PreventionLoss';
import { RealTimeIntel } from '@/components/sections/RealTimeIntel';
import { VisualizeTransactions } from '@/components/sections/VisualizeTransactions';
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import { Container } from '@/components/container';
// import { HLinks } from '../components/HLinks';
import { HackLinks } from '../components/HackLinks';
import { useState } from 'react';

export default function Home() {
    const [showDetails, setShowDetails] = useState(true)

  return (
    <>
        {/* <HLinks /> */}
        <div onClick={() => setShowDetails(true)}>
            <HackLinks />
        </div>

    </>
  )
}