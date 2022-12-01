/** @format */

import "bootstrap/dist/css/bootstrap.css";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      {" "}
      <Component {...pageProps} />{" "}
    </ChakraProvider>
  );
}
