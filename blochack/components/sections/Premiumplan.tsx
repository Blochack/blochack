import React from "react";
import Image from "next/image";

const PremiumPlan = () => {
  return (
    <div className="mt-6 md:mt-12 md:w-[398px]">
      <div className="mt-4 pb-5 w-11/12 mx-auto bg-slate-100/50 pt-8 pl-4 rounded-2xl shadow-lg md:ps-5">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">Premium</h1>
          <h1 className="font-bold text-base me-8 bg-[#E84142]  text-slate-100 px-3 py-1 rounded-full">
            Best Value
          </h1>
        </div>
        <p className="pe-2 mt-3 text-[#A4A4A4]">
          TAenean at lectus posuere enim id nec. Molestie neque, sed fusce
          faucibus.
        </p>
        <p className="text-black mt-5">
          <span className="font-bold text-4xl">$10.99 </span>/ month
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
            src="/Images/IconTick.png"
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
            src="/Images/IconTick.png"
            alt="Mobile Image"
            width={30}
            height={30}
          />
          <p className="ms-3">
            Tortor interdum condimentum nunc molestie quam lectus.
          </p>
        </div>
        <button className="mt-6 bg-red-600 text-xl text-slate-200 py-2 px-4 rounded-full w-[294px] h-[48px] ms-3">
          Subscribe now
        </button>
        <p className="ms-16 my-5">Cancel or pause anytime.</p>
      </div>
    </div>
  );
};

export default PremiumPlan;
