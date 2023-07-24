import { ItemProps } from "@/types";
import { Flex, Image, Text, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { formatCurrency } from "../utils";

export default function Item(props: ItemProps) {
  const { id, name, image, price } = props;

  return (
    <>
      <Head>
        <title>Bleuberri | Shop</title>
      </Head>
      <Link href={`/shop/${id}`}>
        <Flex direction="column" w="full" gap="2">
          <Image w="full" h="300px" objectFit="cover" src={image} alt={name} />
          <Heading className="poppins" fontSize="md" whiteSpace="nowrap">
            {name.length > 38 ? `${name.slice(0, 38)}...` : name}
          </Heading>
          <Text>{formatCurrency(price, "USD")}</Text>
        </Flex>
      </Link>
    </>
  );
}
