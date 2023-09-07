"use client";
import { Box, Center } from "@chakra-ui/react";
import AdminLayout from "../../component/Layout/Admin";
import Games from "../../component/Games";

export default function GameContainer() {
  return (
    <AdminLayout>
      <Games url="https://v6p9d9t4.ssl.hwcdn.net/html/8650377/index.html" />
    </AdminLayout>
  );
}
