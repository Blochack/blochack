import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { DontTrustVerify } from '@/components/sections/DontTrustVerify';
import { PreventionLoss } from '@/components/sections/PreventionLoss';
import { RealTimeIntel } from '@/components/sections/RealTimeIntel';
import { VisualizeTransactions } from '@/components/sections/VisualizeTransactions';
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import { Hackedhero } from './components/HackedHero';
import { Input } from '@/components/ui/input';
import { Container } from '@/components/container';

export default function Home() {
  return (
    <>
    <div className='relative'>
      <div className="absolute left-0 w-full bg-primary mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
        <Container>
        <h2 className="text-4xl font-bold mb-4">Hack Repository</h2>
        <Input className='bg-primary outline-white ' />
        </Container>
      </div>
    </div>
      <Hackedhero className='relative mt-48 h-screen' />
      <div>
        <Container className="flex flex-col items-center justify-center bg-white text-black px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <h1 className='text-4xl font-bold text-balance'>Still Suspect this address?</h1>
          <p className='text-balance max-w-lg text-center'>If youve encountered an address that appears to be compromised or involved in malicious activity, please report it to us. </p>
          <Button variant="outline" className=" text-primary outline-accent bg-white mt-4 ">Report Address </Button>
        </Container>
      </div>
    </>
  )
}