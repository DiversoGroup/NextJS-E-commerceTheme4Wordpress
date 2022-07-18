import 'assets/styles/globals.css';
import 'assets/fonts/stylesheet.css';
import { ApolloProvider } from '@apollo/client';
import client from 'apollo/client';
import Header from 'components/Header';
import BottomNav from 'components/BottomNav';
import Footer from 'components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <BottomNav />
    </ApolloProvider>
  );
}

export default MyApp;
