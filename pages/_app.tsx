import 'bootstrap/dist/css/bootstrap.css'
import "animate.css/animate.min.css";
import type { AppProps } from 'next/app'
import{ChakraProvider, extendTheme} from '@chakra-ui/react'
import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../store';

const theme = extendTheme({
     colors: {
          black: "#000000",
          slate: "#0E172A",
     },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
     <Provider store={store}>
        <ChakraProvider theme={theme}>
           {" "}
           <Component {...pageProps} />{" "}
        </ChakraProvider>
     </Provider>
  );
}
