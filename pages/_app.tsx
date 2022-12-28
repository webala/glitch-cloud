import 'bootstrap/dist/css/bootstrap.css'
import "animate.css/animate.min.css";
import type { AppProps } from 'next/app'
import{ChakraProvider, extendTheme} from '@chakra-ui/react'
import '../styles/globals.css'

const theme = extendTheme({
     colors: {
          black: "#000000",
          slate: "#0E172A",
     },
});

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}> <Component {...pageProps} /> </ChakraProvider>
}
