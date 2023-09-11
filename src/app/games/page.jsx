"use client";
import AdminLayout from "../../component/Layout/Admin";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Center,
  Link,
} from "@chakra-ui/react";
import { FcAssistant, FcCollaboration } from "react-icons/fc";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Card = ({ heading, description, image, href }) => {
  const router = useRouter();

  const handleCilck = async (url) => {
    await Cookies.set("gameUrl", url);
    router.push("/game-container");
  };
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderRadius="lg"
      overflow="hidden"
      bg="teal"
      p={5}
      boxShadow="lg"
    >
      <Stack align={"center"} spacing={2}>
        <Image
          boxShadow="md"
          src={image}
          width={149}
          height={149}
          style={{ borderRadius: "20%" }}
          alt="profile pic"
        />
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>

        <Button
          variant={"link"}
          colorScheme={"light"}
          size={"sm"}
          onClick={() => handleCilck(href)}
        >
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function Games() {
  return (
    <AdminLayout>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            fontSize={{ base: "2xl", sm: "4xl" }}
            fontWeight={"bold"}
            color={useColorModeValue("gray.700")}
          >
            Games
          </Heading>
        </Stack>

        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={"Jigsaw Puzzle"}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"https://www.addictinggames.com/embed/html5-games/24876"}
              image="/image/multiplayervoice.jpeg"
            />
            <Card
              heading={"Coloring Book"}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"https://www.addictinggames.com/embed/html5-games/24951"}
              image="/image/multiplayervoice.jpeg"
            />
            <Card
              heading={"Turn Based Game"}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                "copy this link and share with your friend to play (https://finsalwin.github.io/newTrunBased/)"
              }
              href={"https://finsalwin.github.io/newTrunBased/"}
              image="/image/multiplayervoice.jpeg"
            />

            <Card
              heading={"scenery games-Farm"}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={
                "https://springroll-tc.pbskids.org/4be1cd30-6cbb-4800-9eaa-fdff1de5950f/2841424154621804ac405d0a1893d98d410255b5/release/index.html?playOptions=%7B%22game_guid%22%3A%224be1cd30-6cbb-4800-9eaa-fdff1de5950f%22%7D"
              }
              image="/image/multiplayervoice.jpeg"
            />

            <Card
              heading={"Flash Card - Guess the feeling"}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href="https://springroll-tc.pbskids.org/guess-the-feeling/865cb42df9a791fe368c84be029d3722b19eab78/release/index.html"
              image="/image/multiplayervoice.jpeg"
            />
          </Flex>
        </Container>
      </Box>
    </AdminLayout>
  );
}
