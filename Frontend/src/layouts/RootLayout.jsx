import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";

export default function RootLayout() {
  return (
    <Box w="100%">
      <Navbar />
      <Outlet />
      {/* <Footer/> */}
    </Box>
  );
}