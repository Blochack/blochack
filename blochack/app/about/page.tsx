import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { DontTrustVerify } from "@/components/sections/DontTrustVerify";
import { PreventionLoss } from "@/components/sections/PreventionLoss";
import { RealTimeIntel } from "@/components/sections/RealTimeIntel";
import { VisualizeTransactions } from "@/components/sections/VisualizeTransactions";
import { Button } from "@/components/ui/button";
import { sections } from "@/components/sections/SectionData";
import TeamCarousel from "@/components/TeamCarousel";
import Image from "next/image";
import FooterRout from "@/components/FooterRout";

export default function Home() {
  return (
    <>
      <div className="pb-20 max-w-[1440px] md:m-auto">
        <div className="ms-6 md:ms-24">
          <h1 className="mt-[2em] md:text-[48px] text-3xl font-bold">
            Enabling Trust
          </h1>
          <p className="text-base font-normal md:w-[460px] w-[342px] mt-2 md:mt-7 text-[#A4A4A4; md:text-lg]">
            We are on a mission to foster trust in the digital era by providing
            users with the tools and knowledge needed to navigate the blockchain
            space securely.
          </p>
          <button className="mt-4 bg-neutral-900 hover:bg-gray-800 text-white py-2 px-4 border-[0.1px] border-slate-500 rounded-full md:w-[162px] md:h-[48px] md:mt-6 md:text-lg">
            Contact Us
          </button>
        </div>
        <hr className="mt-20 border-t border-slate-500 border-opacity-45" />

        <div className="md:flex md:flex-col-reverse">
          <div>
            <Image
              src="/Images/Rectangle 51.jpg"
              alt="Mobile Image"
              width={342}
              height={505}
              className="m-auto mt-10 block md:hidden rounded-3xl bg-contain"
            />
            <Image
              src="/Images/Rectangle 51desk.jpg"
              alt="Mobile Image"
              width={1276}
              height={505}
              className="m-auto mt-10 hidden md:block rounded-3xl"
            />
          </div>
          <div>
            <h1 className="mt-10 ms-6 text-3xl font-bold md:mx-24">
              Why BlokHack
            </h1>
            <div className="md:flex md:mx-16">
              {sections.map((section, index) => (
                <div key={index}>
                  <h1 className="mt-10 ms-6 text-lg font-bold">
                    {section.title}
                  </h1>
                  <p className="mt-4 mx-6">{section.content}</p>
                  <hr className="w-11/12 mx-auto mt-3 mb-3 border-t border-slate-500 border-opacity-55" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <h1 className="mt-10 ms-6 text-3xl font-bold md:mx-24">Join Us</h1>
        <TeamCarousel />
      </div>
      <Footer />
    </>
  );
}

{
  /* <Hero />
      <DontTrustVerify />
      <VisualizeTransactions />
      <RealTimeIntel />
      <PreventionLoss /> */
}
