import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const BasicPlan = () => {
  return (
    <div className="mt-12 md:w-[398px] md:ms-6">
      <div className="mt-4 pb-5 w-11/12 mx-auto bg-slate-100/50 pt-8 pl-4 rounded-2xl shadow-lg md:ps-5">
        <h1 className="font-bold text-3xl">Basic</h1>
        <p className="pe-2 mt-3 text-[#A4A4A4]">
          TAenean at lectus posuere enim id nec. Molestie neque, sed fusce
          faucibus.
        </p>
        <p className="text-black mt-5">
          <span className="font-bold text-4xl">$4.99 </span>/ month
        </p>
        {/* 1 */}
        <div className="flex items-start mt-4">
          <Image
            src="/Images/IconTick.png"
            alt="Mobile Image"
            width={35}
            height={35}
          />
          <p className="ms-3">
            Tortor interdum condimentum nunc molestie quam lectus.
          </p>
        </div>
        {/* 2 */}
        <div className="flex items-start mt-4">
          <Image
            src="/Images/IconTick.png"
            alt="Mobile Image"
            width={35}
            height={35}
          />
          <p className="ms-3">
            Tortor interdum condimentum nunc molestie quam lectus.
          </p>
        </div>
        {/* 3 */}
        <div className="flex items-start mt-4">
          <Image
            src="/Images/IconIconX.png"
            alt="Mobile Image"
            width={30}
            height={30}
          />
          <p className="ms-3">
            Tortor interdum condimentum nunc molestie quam lectus.
          </p>
        </div>
        {/* 4 */}
        <div className="flex items-start mt-4 pb-3">
          <Image
            src="/Images/IconIconX.png"
            alt="Mobile Image"
            width={30}
            height={30}
          />
          <p className="ms-3">
            Tortor interdum condimentum nunc molestie quam lectus.
          </p>
        </div>
        <button className="mt-6 text-red-600 hover:bg-red-600 text-xl hover:text-slate-200 py-2 px-4 border-[0.1px] border-red-600 rounded-full w-[294px] h-[48px] ms-3">
          Subscribe now
        </button>
        <p className="ms-16 my-5">Cancel or pause anytime.</p>
      </div>
    </div>
  );
};

export default BasicPlan;
