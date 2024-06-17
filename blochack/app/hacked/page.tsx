import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { DontTrustVerify } from "@/components/sections/DontTrustVerify";
import { PreventionLoss } from "@/components/sections/PreventionLoss";
import { RealTimeIntel } from "@/components/sections/RealTimeIntel";
import { VisualizeTransactions } from "@/components/sections/VisualizeTransactions";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Hackedhero } from "./components/HackedHero";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/container";
import FooterRout from "@/components/FooterRout";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="absolute left-0 w-full bg-primary mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
          <Container>
            <h2 className="text-4xl font-bold mb-4">Hack Repository</h2>
            <Input
              placeholder="Search  Address, tnx Hash, token, domain name"
              className="p-3 px-6 bg-primary w-full md:w-5/12 rounded-full text-slate-50 placeholder:text-slate-50 focus-visible: !outline-none"
            />
          </Container>
        </div>
      </div>

      <Hackedhero props={123} className="relative mt-44" />

      <div>
        <Container className="flex flex-col items-center justify-center bg-white text-black px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <h1 className="text-4xl font-bold text-balance text-center">
            Still Suspect this address?
          </h1>
          <p className="text-balance max-w-lg text-center">
            If youve encountered an address that appears to be compromised or
            involved in malicious activity, please report it to us.{" "}
          </p>
          <Button
            variant="outline"
            className=" text-primary outline-accent bg-white mt-4 "
          >
            Report Address{" "}
          </Button>
        </Container>
        <FooterRout className="bg-slate-50 max-w-screen-xl" />
      </div>
    </>
  );
}
