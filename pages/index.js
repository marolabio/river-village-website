import { server } from '../config';
import Header from '../components/Header';
import Explore from '../components/Explore';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <Explore />
      <Contact />
    </>
  );
}
