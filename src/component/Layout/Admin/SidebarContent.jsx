"use client";

import {
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Box,
} from "@chakra-ui/react";
import { FiHome, FiTrendingUp } from "react-icons/fi";
import { AiFillAppstore } from "react-icons/ai";
import NavItem from "./NavItem";
import { useRouter } from "next/navigation";

const LinkItems = [
  { name: "Home", icon: FiHome, link: "/" },
  { name: "Games", icon: FiHome, link: "/games" },
  { name: "Demos", icon: FiHome, link: "/demos" },
];

export default function SidebarContent({ onClose, ...rest }) {
  const router = useRouter();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("gray.900")}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => router.push(`${link.link}`)}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}
