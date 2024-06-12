export const TrxnDetails = () => {
  return (
    <div className="trnx-ctn card">
          <div className="header flex flex-row justify-between align-center">
            <p className="text-[18px] text-[#F3F4F6]">Transaction Details</p>
           <img src="/images/cancel.svg" className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out'/>
          </div>
          <div className="body mt-7">
            <div className='text-center p-6 bg-[#080808] border-2 border-[#202020] rounded-xl'>
              <p className="text-[24px]">Transaction Value</p>
              <div className='flx justify-center wallet-info'>
                <img src="/images/pyramid-icon.svg" className='w-[25px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out'/>
                <p className='text-[#a0a2a5] text-[14px] mx-2'>0.025559424289521192 ETH <span className="text-[#bbbdc0] text-[19px]">($480)</span></p>
              </div>
            </div>
            <div className='p-6 mt-3 bg-[#131313] border-2 border-[#202020] rounded-xl'>
              <div className='flx'>
                <div className='flx basis-2/3'>
                  <p className="text-base">To</p>
                  <p className='w-[1.8px] h-[1.8px] rounded-xl bg-[#4A4A4A] mr-2 ml-6'></p>
                  <p className='mr-auto text-[12px] text-[#757879]'>2 hrs 33 mins ago</p>
                </div>
                <p className='text-primary underline cursor-pointer hover:animate-bounce transition duration-2000 ease-in-out'>More Info</p>
              </div>
              <div className='flx mt-2'>
                <div className='wallet-info flx'>
                  <img src="/images/copy.svg" className='w-[25px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out'/>
                  <p className='mr-auto ml-2 text-[#a0a2a5] text-[14px]'>0xB279d48442aAfCF8F2af6d9E7d5d9C23f63b4e16</p>
                </div>
                <div className='wallet-info'>
                  <p className=''>0.01208083 ETH</p>
                </div>
              </div>
            </div>
            <div className='p-6 mt-3 bg-[#131313] border-2 border-[#202020] rounded-xl'>
              <div className='flx'>
                <div className='flx basis-2/3'>
                  <p className="text-base">From</p>
                  <p className='w-[1.8px] h-[1.8px] rounded-xl bg-[#4A4A4A] mr-2 ml-6'></p>
                  <p className='mr-auto text-[12px] text-[#757879]'>2 hrs 33 mins ago</p>
                </div>
                <p className='text-primary underline cursor-pointer hover:animate-bounce transition duration-2000 ease-in-out'>More Info</p>
              </div>
              <div className='flx mt-2'>
                <div className='wallet-info flx'>
                  <img src="/images/copy.svg" className='w-[25px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out'/>
                  <p className='mr-auto ml-2 text-[#a0a2a5] text-[14px]'>0xB279d48442aAfCF8F2af6d9E7d5d9C23f63b4e16</p>
                </div>
                <div className='wallet-info'>
                  <p className=''>0.01208083 ETH</p>
                </div>
              </div>
            </div>
            <div className='p-6 mt-3 bg-[#131313] border-2 border-[#202020] rounded-xl'>
              <div className='flx'>
                <div className='flx basis-2/3'>
                  <p className="text-base">To</p>
                  <p className='w-[1.8px] h-[1.8px] rounded-xl bg-[#4A4A4A] mr-2 ml-6'></p>
                  <p className='mr-auto text-[12px] text-[#757879]'>2 hrs 33 mins ago</p>
                </div>
                <p className='text-primary underline cursor-pointer hover:animate-bounce transition duration-2000 ease-in-out'>More Info</p>
              </div>
              <div className='flx mt-2'>
                <div className='wallet-info flx'>
                  <img src="/images/copy.svg" className='w-[25px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out'/>
                  <p className='mr-auto ml-2 text-[#a0a2a5] text-[14px]'>0xB279d48442aAfCF8F2af6d9E7d5d9C23f63b4e16</p>
                </div>
                <div className='wallet-info'>
                  <p className=''>0.01208083 ETH</p>
                </div>
              </div>
            </div>
            <div className='p-6 mt-3 bg-[#131313] border-2 border-[#202020] rounded-xl'>
              <div className='flx'>
                <div className='flx basis-2/3'>
                  <p className="text-base">From</p>
                  <p className='w-[1.8px] h-[1.8px] rounded-xl bg-[#4A4A4A] mr-2 ml-6'></p>
                  <p className='mr-auto text-[12px] text-[#757879]'>2 hrs 33 mins ago</p>
                </div>
                <p className='text-primary underline cursor-pointer hover:animate-bounce transition duration-2000 ease-in-out'>More Info</p>
              </div>
              <div className='flx mt-2'>
                <div className='wallet-info flx'>
                  <img src="/images/copy.svg" className='w-[25px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out'/>
                  <p className='mr-auto ml-2 text-[#a0a2a5] text-[14px]'>0xB279d48442aAfCF8F2af6d9E7d5d9C23f63b4e16</p>
                </div>
                <div className='wallet-info'>
                  <p className=''>0.01208083 ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
