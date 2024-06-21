// import { Link } from "lucide-react";
import Link from "next/link";
import React from "react";

const AbotherReport = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-[#FFD0D0] via-white to-[#FFD0D0]">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-black">
          Thank You for Reporting
        </h1>
        <p className="text-gray-600 mb-6">
          This address. Our team will review your report. We’ll keep you updated
          on the status of the investigation and any relevant findings via the
          email you provided.
        </p>
        <div className="flex justify-around items-center text-black">
          <button className="border border-[#E84142] px-4 py-2 rounded-full text-[#E84142] font-semibold hover:bg-[#E84142] hover:text-slate-50">
            <Link href="/report">Report Another</Link>
          </button>
          <Link href="/">Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default AbotherReport;
