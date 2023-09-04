"use client";
import Admin from "../component/Layout/Admin";
import {
  Box,
  Divider,
  SimpleGrid,
  AbsoluteCenter,
  Text,
  Button,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [arCount, setArCount] = useState(0);

  const handleClick = (url) => {
    router.push(`/game-container`);
  };

  const handleClickMulti = (url) => {
    router.push(`/multi-player-game-container`);
  };

  const handleArTest = async (i) => {
    await setArCount(i);
  };

  useEffect(() => {
    if (arCount === 1) {
      onOpen();
    } else if (arCount === 2) {
      onOpen();
    } else {
      setArCount(0);
    }
  }, [arCount]);

  const handleCloseModal = () => {
    onClose();
    setArCount();
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
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter px="4" color="gray.700">
          AR application
        </AbsoluteCenter>
      </Box>
      <HStack spacing="24px">
        <Button
          colorScheme="teal"
          boxShadow="md"
          onClick={() => handleArTest(1)}
        >
          Cloth Physics Simulation
        </Button>

        <Button
          colorScheme="blue"
          boxShadow="md"
          onClick={() => handleArTest(2)}
        >
          Face Tracking Filter
        </Button>
      </HStack>

      <Modal isOpen={isOpen} onClose={handleCloseModal} bg="dark">
        <ModalOverlay />

        <ModalContent bg="gray.800" color="white">
          <ModalCloseButton />
          <ModalHeader>
            {arCount === 1 && "AR -Cloth Physics Simulation "}
            {arCount === 2 && "AR - Face Tracking Filter"}
          </ModalHeader>
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Scan QR code using phone
            </Text>
            {arCount === 1 && (
              <Image
                boxShadow="md"
                src="/image/ar_test_moon.png"
                width={400}
                height={400}
                style={{ borderRadius: "20%" }}
                alt="profile pic"
              />
            )}

            {arCount === 2 && (
              <Image
                boxShadow="md"
                src="/image/ar_face_tracking.png"
                width={400}
                height={400}
                style={{ borderRadius: "20%" }}
                alt="profile pic"
              />
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Admin>
  );
}
