import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { Nav, Menu } from "@/components";
import Head from "next/head";
import { CartProvider } from "react-use-cart";
import { useMenuStore } from "@/store/menuStore";

export default function App({ Component, pageProps }: AppProps) {
  const { initialState } = useMenuStore();

  return (
    <>
      <Head>
        <title>Bleuberri</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider>
        <CartProvider>
          {initialState ? (
            <Menu />
          ) : (
            <>
              <Nav />
              <Container maxW={{ base: "6xl", md: "7xl" }}>
                <Component {...pageProps} />
              </Container>
            </>
          )}
        </CartProvider>
      </ChakraProvider>
    </>
  );
}
