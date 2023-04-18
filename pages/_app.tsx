import 'bootstrap/dist/css/bootstrap.css'
import "animate.css/animate.min.css";
import type { AppProps } from 'next/app'
import{ChakraProvider, extendTheme} from '@chakra-ui/react'
import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const theme = extendTheme({
     colors: {
          black: "#000000",
          slate: "#0E172A",
     },
});

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
     <Provider store={store}>
        <QueryClientProvider client={queryClient}>
           <ChakraProvider theme={theme}>
              {" "}
              <Component {...pageProps} />{" "}
           </ChakraProvider>
        </QueryClientProvider>
     </Provider>
  );
}
