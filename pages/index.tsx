import {
  Center,
  Heading,
  Text,
  Button,
  Image,
  Flex,
  Input,
} from "@chakra-ui/react";
import { footerLinks } from "../constants";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Center
        w="full"
        h={{ base: "70vh", md: "50vh" }}
        flexDirection="column"
        gap="2"
        alignItems={{ base: "start", md: "center" }}
      >
        <Heading size="2xl" className="poppins">
          Better Products For The Planet
        </Heading>
        <Text
          textAlign={{ base: "left", md: "center" }}
          w={{ base: "full", md: "50%" }}
          fontSize="sm"
          opacity=".7"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laborum
          officia assumenda harum! Similique incidunt sit voluptatem cumque,
          laborum voluptas ut architecto.
        </Text>
        <Link href="/shop">
          <Button
            rounded="none"
            variant="outline"
            colorScheme="blackAlpha"
            w={{ base: "full", md: "auto" }}
          >
            Shop All
          </Button>
        </Link>
      </Center>
      <Image
        src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="home image"
        w="full"
        h="500px"
        objectFit="cover"
      />
      <Flex
        w="full"
        h={{ base: "auto", md: "30vh" }}
        justifyContent="space-evenly"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
      >
        <Image
          w={{ base: "full", md: "25%" }}
          src="https://logos-world.net/wp-content/uploads/2020/11/The-New-York-Times-Logo.png"
          alt="The New York Times"
          // h="150px"
          objectFit="contain"
        />
        <Image
          w={{ base: "full", md: "25%" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHaMLIKRakZHzwQHQJEP6lYtt73gZormk3w&usqp=CAU"
          alt="Vogue"
          h="60px"
          objectFit="contain"
          mt={{ base: "-2em", md: "0" }}
        />
        <Image
          w={{ base: "full", md: "25%" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Vanity_Fair_Logo.svg/2560px-Vanity_Fair_Logo.svg.png"
          alt="Vanity Fair"
          h="150px"
          objectFit="contain"
        />
      </Flex>
      <Center
        w="full"
        h={{ base: "70vh", md: "50vh" }}
        flexDirection="column"
        gap="2"
        alignItems={{ base: "start", md: "center" }}
      >
        <Heading size="2xl" className="poppins">
          Out latest arrivals
        </Heading>
        <Text
          textAlign={{ base: "left", md: "center" }}
          w={{ base: "full", md: "50%" }}
          fontSize="sm"
          opacity=".7"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          aliquid, tempore fugit pariatur voluptates quos?
        </Text>
        <Link href="/shop">
          <Button
            rounded="none"
            variant="outline"
            colorScheme="blackAlpha"
            w={{ base: "full", md: "auto" }}
          >
            Shop All
          </Button>
        </Link>
      </Center>
      <Flex
        w="full"
        h={{ base: "270vh", md: "90vh" }}
        gap="5"
        direction={{ base: "column", md: "row" }}
      >
        <Flex w="full" h="full" alignItems="end">
          <Image
            src="https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image one"
            w="full"
            h={{ base: "full", md: "80%" }}
            objectFit="cover"
          />
        </Flex>
        <Flex w="full" h="full">
          <Image
            src="https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image two"
            w="full"
            h={{ base: "full", md: "80%" }}
            objectFit="cover"
          />
        </Flex>
        <Flex w="full" h="full" alignItems="end">
          <Image
            src="https://images.pexels.com/photos/2826787/pexels-photo-2826787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image three"
            w="full"
            h={{ base: "full", md: "80%" }}
            objectFit="cover"
          />
        </Flex>
      </Flex>
      <Flex
        w="full"
        gap={{ base: "5vh", md: "0" }}
        py="10vh"
        direction={{ base: "column", md: "row" }}
      >
        <Flex direction="column" gap="2" w={{ base: "full", md: "50%" }}>
          <Heading className="poppins">Sign up for our newsletter</Heading>
          <Text fontSize="sm" opacity=".7">
            Be the frist to know about our special offers, new product
            <br />
            launches, and events
          </Text>
          <Flex borderWidth="1px" borderColor="lightgray" w="80%">
            <Input
              type="text"
              placeholder="Email Address"
              fontSize="sm"
              border="none"
              focusBorderColor="transparent"
            />
            <Button
              fontSize="sm"
              bg="transparent"
              _hover={{ bg: "transparent" }}
            >
              Sign Up
            </Button>
          </Flex>
        </Flex>
        <Flex
          w={{ base: "full", md: "50%" }}
          gap="1"
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          {footerLinks.map((link) => (
            <Flex
              key={link.id}
              direction="column"
              gap="1.5"
              w={{ base: "45%", md: "full" }}
            >
              <Heading fontSize="md" className="poppins">
                {link.heading}
              </Heading>
              {link.links.map((item) => (
                <Text fontSize="sm" opacity=".7" key={item.id}>
                  {item.text}
                </Text>
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
