"use client";
import Admin from "../component/Layout/Admin";
import {
  Box,
  Divider,
  SimpleGrid,
  AbsoluteCenter,
  Text,
  Center,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = (url) => {
    router.push(`/game-container`);
  };

  const handleClickMulti = (url) => {
    router.push(`/multi-player-game-container`);
  };

  return (
    <Admin>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter px="4" color="gray.700">
          Single Player Games
        </AbsoluteCenter>
      </Box>
      <HStack spacing="24px">
        <Box p={2} cursor="pointer" onClick={() => handleClick()}>
          <Image
            boxShadow="md"
            src="/image/kart.jpg"
            width={149}
            height={149}
            style={{ borderRadius: "20%" }}
            alt="profile pic"
          />
        </Box>
      </HStack>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter px="4" color="gray.700">
          Multi-Player Games
        </AbsoluteCenter>
      </Box>
      <HStack spacing="24px">
        <Box p={2} cursor="pointer" onClick={() => handleClickMulti()}>
          <Image
            boxShadow="md"
            src="/image/multi.png"
            width={149}
            height={149}
            style={{ borderRadius: "20%" }}
            alt="profile pic"
          />
        </Box>
      </HStack>
    </Admin>
  );
}
