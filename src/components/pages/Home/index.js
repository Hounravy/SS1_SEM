import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className='my-0'>
        <div className='w-full bg-slate-50 my-0'>
          <div className='container-fluid'>
            <div className='flex justify-center'>
              <h5 className=' text-black text-3xl font-bold'>全天候待命 7 X 24优质安全</h5>
            </div>
            <div className='flex justify-center items-center py-20'>

              <div className=' bg-white text-black pt-[30px] px-[15px] pb-[15px] m-5'>
                <div className='flex justify-center items-center flex-col'>
                  <div className='my-[10px]'>
                  <Image
                                src="/assets/icon/time-icon.svg"
                                width = {120}
                                height = {110}
                                className=" w-[250px] h-[200px]"
                                />
                  </div>
                  <div className='my-[5px]'>
                    <h5 className=' font-bold '>极速回覆</h5>
                  </div>
                  <di className='my-[5px]'>
                    <p>付款后马上回调，零等待，专业一步到位</p>
                  </di>
                  <div className='flex items-center text-amber-600 my-[15px] hover:text-amber-400 cursor-pointer'>
                    <Link href={'/'}>
                    <p>马上转帐 </p>
                    </Link>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
                  </div>
                </div>
              </div>

              <div className=' bg-white text-black pt-[30px] px-[15px] pb-[15px] m-5'>
                <div className='flex justify-center items-center flex-col'>
                  <div className='my-[10px]'>
                  <Image
                                src="/assets/icon/carlen-icon.svg"
                                width = {120}
                                height = {110}
                                className=" w-[250px] h-[200px]"
                                />
                  </div>
                  <div className='my-[5px]'>
                    <h5 className=' font-bold '>资金直达</h5>
                  </div>
                  <di className='my-[5px]'>
                    <p>最快T＋0 特快结算，支持多种结算方式</p>
                  </di>
                  <div className='flex items-center text-amber-600 my-[15px] hover:text-amber-400 cursor-pointer'>
                    <Link href={'/'}>
                    <p>马上转帐 </p>
                    </Link>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
                  </div>
                </div>
              </div>


              <div className=' bg-white text-black pt-[30px] px-[15px] pb-[15px] m-5'>
                <div className='flex justify-center items-center flex-col'>
                  <div className='my-[10px]'>
                  <Image
                                src="/assets/icon/net-icon.svg"
                                width = {120}
                                height = {110}
                                className=" w-[250px] h-[200px]"
                                />
                  </div>
                  <div className='my-[5px]'>
                    <h5 className=' font-bold '>账户安全</h5>
                  </div>
                  <di className='my-[5px]'>
                    <p>多重确认，防止他人轻易修改结算账户</p>
                  </di>
                  <div className='flex items-center text-amber-600 my-[15px] hover:text-amber-400 cursor-pointer'>
                    <Link href={'/'}>
                    <p>马上转帐 </p>
                    </Link>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className='my-0'>
        <div className='w-full h-36 my-0 bg-foot'>
      
        </div>
      </section>
    </>
  );
}
