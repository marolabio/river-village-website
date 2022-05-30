import { server } from '../config';
import Header from '../components/Header';
import Explore from '../components/Explore';
import Footer from '../components/Footer';
import { useRef } from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function Home() {
  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Nav executeScroll={executeScroll} />
      <Header />
      <About />
      <Explore myRef={myRef} />
      <Footer />
      <MessengerCustomerChat pageId='105176082125964' appId='690841058692185' />
    </>
  );
}
