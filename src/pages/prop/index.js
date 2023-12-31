import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPlayLink } from '@utilities/dev';
import { useRouter } from 'next/router'

const Pop = () => {
    const router = useRouter()
    const { pathname } = router
   const chil = React.ReactNode;
   if(pathname === "/about" )
   {
    return ( 
        <>
        
        <div className='my-5'><h5 className=' text-2xl font-bold sm:text-5xl'>关于我们</h5></div>
           

           
      
        </>
     );
   }else
   {
    return ( 
        <>
        
        <div className='my-5'><h5 className=' text-2xl font-bold sm:text-5xl'>铂金瀚支付 - 充U代付</h5></div>
            <div className='my-5'> <h5 className=' text-lg sm:text-2xl'>全球秒速到达</h5></div>
            <div>
            <Link href={getPlayLink()}>
              <button className='font-bold bg-white  hover:bg-amber-600 text-amber-600 outline-none border-2 border-amber-600 py-[15px] px-[45px] rounded-full'>马上转帐</button>
            </Link>

            </div>
      
        </>
     );

   }
    
}
 
export default Pop;