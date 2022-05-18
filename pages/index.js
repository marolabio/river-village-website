import { server } from '../config';
import Header from '../components/Header';
import Explore from '../components/Explore';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Explore />
      <Contact />
      <Footer />
    </>
  );
}
