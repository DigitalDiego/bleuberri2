import Head from "next/head";
import { useCart } from "react-use-cart";
import { Flex, Heading, Text, Button, Input, Box } from "@chakra-ui/react";
import { formatCurrency, getStripe } from "../../utils";
import Link from "next/link";
import { CartItem } from "../../components";

export default function Cart() {
  const { isEmpty, cartTotal, items } = useCart();

  const checkout = async () => {
    const stripe = await getStripe();

    const response: any = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <>
      <Head>
        <title>Bleuberri | Cart</title>
      </Head>
      <Flex
        w="full"
        justifyContent="start"
        alignItems="start"
        gap="4"
        py="10"
        direction={{ base: "column", md: "row" }}
      >
        {/* Items */}
        <Flex w={{ base: "full", md: "50%" }}>
          <Flex w="full" direction="column" gap="2">
            <Heading className="poppins">Your Cart</Heading>
            {isEmpty ? (
              <Text fontSize="sm" opacity=".7">
                Your cart has no item in it. Start shopping{" "}
                <Link
                  style={{ textDecoration: "underline", opacity: "1" }}
                  href="/shop"
                >
                  here
                </Link>
                .
              </Text>
            ) : (
              <Text fontSize="sm" opacity=".7">
                Not ready to checkout? Continue Shopping.
              </Text>
            )}
            {items?.map((item) => (
              <CartItem key={item?.id} {...item} />
            ))}
          </Flex>
        </Flex>
        {/* Checkout */}
        <Flex w={{ base: "full", md: "50%" }} direction="column" gap="4">
          <Heading className="poppins" fontSize="md">
            Order Sumary
          </Heading>
          <Input
            type="text"
            placeholder="Enter coupon code here"
            fontSize="sm"
            rounded="none"
            focusBorderColor="lightgray"
          />
          <Flex w="full" justifyContent="space-between" alignItems="center">
            <Text fontSize="sm">Subtotal</Text>
            <Text fontSize="sm">{formatCurrency(cartTotal, "USD")}</Text>
          </Flex>
          <Flex w="full" justifyContent="space-between" alignItems="center">
            <Text fontSize="sm">Shipping</Text>
            <Text fontSize="sm">Free</Text>
          </Flex>
          <Box w="full" h="1px" bg="black"></Box>
          <Flex w="full" justifyContent="space-between" alignItems="center">
            <Text fontSize="sm">Total</Text>
            <Text fontSize="sm">{formatCurrency(cartTotal, "USD")}</Text>
          </Flex>
          <Button
            fontSize="sm"
            rounded="none"
            bg="black"
            color="white"
            _hover={{ bg: "black" }}
            isDisabled={isEmpty}
            onClick={checkout}
          >
            Checkout
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
