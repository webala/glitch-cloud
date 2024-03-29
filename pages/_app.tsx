import 'bootstrap/dist/css/bootstrap.css'
import "animate.css/animate.min.css";
import type { AppProps } from 'next/app'
import{ChakraProvider, extendTheme} from '@chakra-ui/react'
import "react-slideshow-image/dist/styles.css";
import '../styles/globals.scss'
import { Provider } from 'react-redux';
import store from '../store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

const theme = extendTheme({
     colors: {
          black: "#000000",
          slate: "#0E172A",
     },
});

const queryClient = new QueryClient()

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
     <SessionProvider session={session}>
        <Provider store={store}>
           <QueryClientProvider client={queryClient}>
              <ChakraProvider theme={theme}>
                 {" "}
                 <Component {...pageProps} />{" "}
              </ChakraProvider>
           </QueryClientProvider>
        </Provider>
     </SessionProvider>
  );
}
