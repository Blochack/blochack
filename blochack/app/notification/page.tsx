import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import BasicPlan from "@/components/sections/Basicplan";
import { DontTrustVerify } from "@/components/sections/DontTrustVerify";
import PremiumPlan from "@/components/sections/Premiumplan";
import { PreventionLoss } from "@/components/sections/PreventionLoss";
import { RealTimeIntel } from "@/components/sections/RealTimeIntel";
import { VisualizeTransactions } from "@/components/sections/VisualizeTransactions";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FooterRout from "@/components/FooterRout";

export default function Home() {
  const transparency = `The blockchain might be transparent, but navigating its vast ocean
of information can be overwhelming. That's where BlocHack's premium
Hack Alert System steps in, acting as your personal guardian angel
in the cryptoverse.`;

  const warning = `Don't wait for the damage to be done. Hack alerts give you precious
time to take preventive measures, such as freezing funds, moving
assets, or contacting support.`;
  return (
    <div>
      {/* Staying ahead of hackers */}
      <div className="md:flex md:justify-between pb-20 max-w-[1440px] md:m-auto">
        <div className="mx-6 md:w-[654px] md:ms-28">
          <h1 className="mt-[2em] text-4xl font-bold leading-tight md:text-[52px]">
            <span className="text-[#A4A4A4]">Staying One Step Ahead</span> Of
            Hackers With Real-Time
            <span className="bg-[#E84142]"> Hack Intel</span>
          </h1>
          <p className="text-[#A4A4A4] mt-3 font-normal md:w-[445px]">
            {transparency}
          </p>
          <button className="mt-7 bg-neutral-900 hover:bg-gray-800 text-white py-2 px-4 border-[0.1px] border-slate-500 rounded-full md:w-[162px] md:h-[48px]f md:mt-6 md:text-lg">
            Get Started
          </button>
        </div>
        <div className="hidden md:block ">
          <Image
            src="/Images/Frame 6363lock.jpg"
            alt="Mobile Image"
            width={600}
            height={550}
            className="m-auto mt-5 hidden md:block"
          />
        </div>
      </div>

      {/* Real time threat protection */}
      <div className="max-w-[1440px] md:m-auto">
        <h1 className="mx-6 text-2xl font-bold md:text-4xl md:ms-28">
          Real-time Threat Detection
        </h1>
      </div>

      <div className="md:flex md:mt-6 pb-20 max-w-[1440px] md:m-auto">
        <div className="mx-6 md:ms-28">
          <h1 className="mt-5 text-2xl font-bold">Instant notifications</h1>
          <p className="mt-3">
            Our advanced algorithms analyze incoming transactions and suspicious
            activity 24/7, instantly notifying you of potential hacks targeting
            your monitored addresses
          </p>
        </div>

        <div className="mx-6">
          <h1 className="mt-5 text-2xl font-bold">Granular control</h1>
          <p className="mt-3">
            Choose which addresses you want to prioritize for real-time
            monitoring, ensuring you receive the most relevant alerts
          </p>
        </div>

        <div className="mx-6">
          <h1 className="mt-5 text-2xl font-bold">Actionable insights</h1>
          <p className="mt-3">
            Each notification goes beyond just a red flag. We provide detailed
            information about the suspected threat, to ensure you to make
            informed decisions
          </p>
        </div>
      </div>

      {/* Proactive risk mitigation */}
      <div className="max-w-[1440px] md:m-auto">
        <h1 className="mx-6 mb-6 text-2xl font-bold md:text-4xl md:ms-28">
          Proactive Risk Mitigation
        </h1>
      </div>

      <div className="pb-6 max-w-[1440px] md:m-auto md:flex md:justify-between">
        <div className="w-11/12 h-[460px] mx-auto bg-[#2F2F2F]/50 pt-8 pl-4 rounded-2xl relative border-[0.1px] border-slate-500 mt-2 md:h-[721px] md:w-[600px] md:ms-28 pb-3">
          <h1 className="font-semibold">Early Warning System</h1>
          <p className="pe-2 mt-2">{warning}</p>
          <Image
            src="/Images/Frame 6330warningS.jpg"
            alt="Mobile Image"
            width={310}
            height={300}
            className="m-auto mt-5 rounded-tl-lg absolute bottom-0 right-0 md:hidden"
          />
          <Image
            src="/Images/Frame 6330desk1.jpg"
            alt="Mobile Image"
            width={400}
            height={40}
            className="m-auto mt-5 rounded-tl-lg absolute rounded-l-lg right-0"
          />
        </div>

        <div className="">
          <div className="w-11/12 h-[420px] mx-auto bg-[#2F2F2F]/50 pt-8 pl-4 rounded-2xl relative border-[0.1px] border-slate-500 mt-4 md:mt-3 md:h-[380px]">
            <h1 className="font-semibold">Minimize Potential Losses</h1>
            <p className="pe-2 mt-2">
              The faster you react, the better. Hack alerts can be the
              difference between losing everything and mitigating the damage,
              saving you valuable crypto.
            </p>
            <Image
              src="/Images/Frame 6330.jpg"
              alt="Mobile Image"
              width={310}
              height={300}
              className="m-auto mt-5 rounded-t-lg absolute bottom-0 md:hidden"
            />
            <Image
              src="/Images/Frame 6330desk2.jpg"
              alt="Mobile Image"
              width={700}
              height={300}
              className="hidden md:block m-auto mt-5 rounded-t-lg  absolute bottom-0"
            />
          </div>

          <div className="w-11/12 h-[460px] mx-auto bg-[#2F2F2F]/50 pt-8 pl-4 rounded-2xl relative border-[0.1px] border-slate-500 mt-4 md:h-[320px]">
            <h1 className="font-semibold">Peace of Mind, Guaranteed!</h1>
            <p className="pe-2 mt-2 md:w-[400px]">
              Sleep soundly knowing your assets are actively monitored and
              protected by cutting-edge security technology.
            </p>
            <Image
              src="/Images/Group 6340guarantee.png"
              alt="Mobile Image"
              width={310}
              height={300}
              className="m-auto mt-5 rounded-tl-lg md:hidden"
            />
            <Image
              src="/Images/Group 6340lmn.png"
              alt="Mobile Image"
              width={530}
              height={300}
              className="hidden md:block m-auto mt-5 rounded-tl-lg absolute md:bottom-0 md:ms-12"
            />
          </div>
        </div>
      </div>

      {/* Unlimited Access to latest update */}
      <div className="bg-[#FFF0F0]">
        <div className="bg-[#FFF0F0] text-black mt-6 pt-2 pb-12 max-w-[1440px] md:m-auto">
          <div className="md:ms-28">
            <h1 className="mt-[2em] mx-6 text-3xl font-bold leading-tight md:text-[52px] md:w-[800px]">
              Unlimited Access to the Latest Information on
              <span className="bg-[#E84142]"> Crypto Hacks</span>
            </h1>
            <p className="mt-[1em] mx-6">
              Just straight-forward pricing that aligns with your goals.
            </p>
          </div>

          {/* Subscriptions Menu*/}
          <div className="md:flex justify-between md:ms-28">
            <div className="hidden md:block w-[500px] mt-12">
              <h1 className="mt-[2em] mx-6 text-3xl font-bold leading-tight">
                Simple pricing
              </h1>
              <p className="mt-[1em] mx-6  w-[350px]">
                No spam. Just the highest quality information you’ll never find
                on the web
              </p>
            </div>
            <BasicPlan />
            <PremiumPlan />
          </div>
        </div>
      <FooterRout />
      </div>
    </div>
  );
}

///home/jaybee/Desktop/BlockHack/blochack/blochack/components/FooterRout.tsx
