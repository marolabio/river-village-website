import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { MessengerChat } from 'react-messenger-chat-plugin';
import Menu from '../components/Menu';
import Meta from '../components/Meta';
import { useEffect } from 'react';
import * as ga from '../lib/ga';

function menu() {
  useEffect(() => {
    ga.pageview('/menu');
  }, []);

  return (
    <>
      <Meta
        title='River Village Restaurant Menu'
        description='We have a wide variety of delicious seafood dishes including sungayan, bangus, shrimp, squid and etc. Try out our boodle fight and bilao, perfect for families and friends to gather and enjoy a meal together.'
        keywords='seafood menu, bolinao seafood, sungayan, bangus, pizza, pasta, seafood, bolinao pangasinan, boodle fight, pansit, bilao'
      />
      <MessengerChat pageId='105176082125964' />
      <Nav />
      <Menu />
      <Footer />
    </>
  );
}

export default menu;
