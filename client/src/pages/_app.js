import 'assets/styles/globals.css';
import 'assets/fonts/stylesheet.css';
import Header from 'components/Header';
import BottomNav from 'components/BottomNav';
import Footer from 'components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <BottomNav />
    </>
  );
}

export default MyApp;
