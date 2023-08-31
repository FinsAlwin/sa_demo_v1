"use client";
import { Box, Center } from "@chakra-ui/react";
import AdminLayout from "../../component/Layout/Admin";
import Games from "../../component/Games";

export default function GameContainer() {
  return (
    <AdminLayout>
      <Center>
        <Games url="https://play.unity.com/webgl/766b11f9-4a6a-468f-bff3-c57f57de0330" />
      </Center>
    </AdminLayout>
  );
}
