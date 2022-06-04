import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Menu from '../components/Menu';

function menu() {
  return (
    <div>
      <MessengerCustomerChat pageId='105176082125964' appId='690841058692185' />
      <Nav />
      <Menu />
      <Footer />
    </div>
  );
}

export default menu;
