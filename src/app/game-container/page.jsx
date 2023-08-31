"use client";
import { Box, Center } from "@chakra-ui/react";
import AdminLayout from "../../component/Layout/Admin";
import Games from "../../component/Games";

export default function GameContainer() {
  return (
    <AdminLayout>
      <Center>
        <Games url="https://play.unity.com/webgl/ddd04929-91bf-4261-90b0-de92fcb89e3e" />
      </Center>
    </AdminLayout>
  );
}
