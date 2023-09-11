"use client";
import { Box, Center } from "@chakra-ui/react";
import AdminLayout from "../../component/Layout/Admin";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Page() {
  const [gameUrl, setGameUrl] = useState("");

  useEffect(() => {
    const url = Cookies.get("gameUrl");
    setGameUrl(url);
  }, [gameUrl]);

  return (
    <AdminLayout>
      <iframe width="100%" height="640" src={gameUrl}></iframe>
    </AdminLayout>
  );
}
