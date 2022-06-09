import Header from '../components/Header';
import Explore from '../components/Explore';
import Footer from '../components/Footer';
import { useRef } from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import Meta from '../components/Meta';
import { MessengerChat } from 'react-messenger-chat-plugin';

export default function Home() {
  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  //  appId='690841058692185'
  return (
    <>
      <Meta />
      <MessengerChat pageId='105176082125964' />
      <Nav />
      <Header executeScroll={executeScroll} />
      <About />
      <Explore myRef={myRef} />
      <Footer />
    </>
  );
}
