import { useEffect } from "react";
import Link from "next/link";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { useCart } from "react-use-cart";
import Head from "next/head";

export default function Success() {
  const { emptyCart } = useCart();

  useEffect(() => {
    emptyCart();
  }, []);
  return (
    <>
      <Head>
        <title>Bleuberri | Purchase Confirmation</title>
      </Head>
      <Flex
        w="full"
        h="90vh"
        justifyContent="center"
        alignItems="center"
        gap="2"
        direction="column"
      >
        <Heading className="poppins" textAlign="center">
          Thank you for your purchase!
        </Heading>
        <Link href="/">
          <Button
            rounded="none"
            bg="black"
            color="white"
            _hover={{ bg: "black" }}
          >
            Home
          </Button>
        </Link>
      </Flex>
    </>
  );
}
