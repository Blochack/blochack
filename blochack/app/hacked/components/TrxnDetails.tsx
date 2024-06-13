export const TrxnDetails = ({closeModal}) => {
  return (
    <div className="trnx-ctn card z-50 mt-24">
          <div className="header flex flex-row justify-between align-center">
            <p className="text-[18px] text-[#F3F4F6]">Transaction Details</p>
           <img src="/images/cancel.svg" className='cursor-pointer cancel' onClick={() => {closeModal()}}/>
          </div>
          <div className="body mt-7">
            <div className='text-center p-6 bg-[#080808] border-2 border-[#202020] rounded-xl'>
              <p className="text-[24px]">Transaction Value</p>
              <div className='flx justify-center wallet-info'>
                <img src="/images/pyramid-icon.svg" className='w-[25px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out'/>
                <p className='text-[#a0a2a5] text-[14px] mx-2'>0.025559424289521192 ETH <span className="text-[#bbbdc0] text-[19px]">($480)</span></p>
              </div>
            </div>
            <div className='p-6 mt-3 bg-[#080808] border-2 border-[#202020] rounded-xl'>
              <div className='flx'>
                <p className="text-base">From</p>
                <div className='wallet-info flx'>
                  <p className='mr-auto text-[#a0a2a5] text-[14px]'>0xB279d48442aAfCF8F2af6d9E7d5d9C23f63b4e16</p>
                  <img src="/images/copy.svg" className='w-[25px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out'/>
                </div>
              </div>
              <div className='flx mt-4'>
                <p className="text-base">To</p>
                <div className='wallet-info flx'>
                  <p className='mr-auto text-[#a0a2a5] text-[14px]'>0xB279d48442aAfCF8F2af6d9E7d5d9C23f63b4e16</p>
                  <img src="/images/copy.svg" className='w-[25px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out'/>
                </div>
              </div>
            </div>
            <div className='p-6 mt-3 bg-[#080808] border-2 border-[#202020] rounded-xl'>
              <div className='flx'>
                <p className="text-base">Transaction fee</p>
                <div className='wallet-info flx'>
                  <p className='mr-auto text-[#a0a2a5] text-[14px]'>0.000692823022682 ETH <span className="text-white">($0.8)</span></p>
                </div>
              </div>
              <div className='flx mt-4'>
                <p className="text-base">Gas Price</p>
                <div className='wallet-info flx'>
                  <p className='mr-auto text-white text-[14px]'>31.333862 Gwei<span className="text-[12px] text-[#6C757D]"> (0.000000031333862 ETH)</span></p>
                </div>
              </div>
            </div>
            <div className='p-6 mt-3 bg-[#131313] border-2 border-[#202020] rounded-xl'>
              <div className='flx mt-4'>
                <p className="text-base">Transaction Hash</p>
                <div className='wallet-info flx'>
                  <p className='mr-auto text-[#a0a2a5] text-[14px]'>0xB279d48442aAfCF8F2af6d9E7d5d9C23f63b4e16</p>
                  <img src="/images/copy.svg" className='w-[25px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out'/>
                </div>
              </div>
              <div className='flx mt-4'>
                <p className="text-base">Status</p>
                <div className='wallet-info flx'>
                  <p className='mr-auto text-[#a0a2a5] text-[14px] success'>Success</p>
                </div>
              </div>
              <div className='flx mt-4'>
                <p className="text-base">Block</p>
                <div className='wallet-info flx'>
                  <p className='mr-auto text-[#a0a2a5] text-[14px]'>14589210</p>
                </div>
              </div>
              <div className='flx mt-4'>
                <p className="text-base">Timestamp</p>
                <div className='wallet-info flx'>
                  <p className='mr-auto text-[#a0a2a5] text-[14px]'>2 hrs 33 mins ago (Jan-05-2024 03:38:35 PM +UTC)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
