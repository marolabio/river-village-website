import { server } from '../config';
import Header from '../components/Header';
import Explore from '../components/Explore';
import Contact from '../components/Contact';
import { useRef } from 'react';
import Nav from '../components/Nav';
import VideoPlayer from '../components/VideoPlayer';

export default function Home() {
  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Nav executeScroll={executeScroll} />
      <Header />
      <VideoPlayer />
      <Explore myRef={myRef} />
      <Contact />
    </>
  );
}
