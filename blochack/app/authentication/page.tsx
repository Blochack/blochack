import React from "react";

const Authenticate = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#FFD0D0] p-4">
        <div className="bg-white shadow-md rounded-2xl p-8 max-w-md w-full">
          <button className="text-gray-600 mb-4 flex items-center text-xl font-semibold">
            <span className="text-5xl font-bold -mt-3">&larr;</span> Back
          </button>
          <h2 className="text-xl font-bold mb-6 text-black">
            Report a Hack or <br className="md:hidden" />
            Suspicious Activity
          </h2>
          <form>
            <div className="mb-4">
              <label className=" text-black">
                Paste or Type Address (Example: 0x...)
              </label>
              <input
                type="text"
                className="mt-2 p-2 border border-gray-300 rounded-full w-full text-black"
                placeholder="0x..."
                required
              />
            </div>
            <div className="mb-4">
              <label className=" text-black">
                Select the Blockchain (Chain)
              </label>
              <select
                className="mt-2 p-2 border border-gray-300 rounded-full w-full bg-white text-black"
                required
              >
                <option className="rounded">Chain</option>
              </select>
            </div>
            <div className="mb-4">
              <label className=" text-black">
                Your Email (We&apos;ll Keep You Posted)
              </label>
              <input
                type="email"
                className="mt-2 p-2 border border-gray-300 rounded-full w-full text-black"
                placeholder="example@email.com"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-full mt-4 hover:bg-red-600 transition-colors text-xl"
            >
              Report
            </button>
          </form>
          <p className="text-gray-600 text-sm mt-4">
            If you&apos;ve encountered an address that appears to be compromised
            or involved in malicious activity, please report it to us.
          </p>
          <p className="text-gray-600 text-sm mt-1">
            We&apos;ll investigate promptly and take appropriate action to
            safeguard the community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
