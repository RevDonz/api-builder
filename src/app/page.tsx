import Footer from '@/components/footer';
import Section1 from '@/components/landing page/section1';
import Section2 from '@/components/landing page/section2';
import Section3 from '@/components/landing page/section3';
import Section4 from '@/components/landing page/section4';
import Section5 from '@/components/landing page/section5';
import Section6 from '@/components/landing page/section6';
import Section7 from '@/components/landing page/section7';
import Section8 from '@/components/landing page/section8';
import Navbar from '@/components/navbar';

export default function page() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </>
  );
}
