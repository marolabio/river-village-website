import { server } from '../config';
import Header from '../components/Header';
import Explore from '../components/Explore';
import Footer from '../components/Footer';
import { useRef } from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import Meta from '../components/Meta';
import { MessengerChat } from 'react-messenger-chat-plugin';

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/explore`);
  const exploreData = await res.json();

  return {
    props: {
      exploreData,
    },
  };
}

export default function Home({ exploreData }) {
  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Meta />
      <MessengerChat pageId='105176082125964' />
      <Nav />
      <Header executeScroll={executeScroll} />
      <About />
      <Explore myRef={myRef} exploreData={exploreData} />
      <Footer />
    </>
  );
}
