import { Main } from '@components/common';
import { useState, useEffect } from 'react';
import Footer from '@components/pages/Footer';
import Navbar from '@components/pages/Navbar';
export default function MainLayout({ children }) {
  // State
  const [scrollBtn, setScrollBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    });
  }, []);

  return (
    <div className='w-full relative'>
      <Main.ScrollToTop scrollBtn={scrollBtn} />
      <Navbar/>
      <div>{children}</div>
      <Footer/>
    </div>
  );
}
