import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <>
      <nav className='w-full'>
        <div className='bg-nav h-[38vw] '>
          <div className='container-fluid pt-[30px] px-[20px]'>
            <div className=' flex justify-between'>
              <Link href={'/'}>
                <div className='logo cursor-pointer'>
                  <Image
                    src='/assets/pic/logo.png'
                    width={200}
                    height={200}
                    className=' w-full h-full'
                  />
                </div>
              </Link>

              <div>
                <ul className=' text-white flex '>
                  <li className='mx-3 hover:underline hover:underline-offset-8 hover:decoration-amber-600  hover:decoration-4'>
                    <Link href={'/about'}>关于我们</Link>
                  </li>
                  <li className='mx-3 hover:underline hover:underline-offset-8 hover:decoration-amber-600  hover:decoration-4'>
                    <Link href={'/'}>联系客服</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
