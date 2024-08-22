import React, { useState } from "react";
import { color, motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { Box, Flex, Image, Button, IconButton, useDisclosure, Collapse, HStack } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  let location=window.location.pathname;

  return (
    <Flex bg="black" color="white" justify={"space-around"}>
      <Box>
      <Image
        h='60px'
        objectFit='cover'
        src={logo}
        alt='Logo'
      />
      </Box>
      <HStack justify={"space-around"} w="950px">
        <Box px="7px" _hover={{color:"red"}} border={location === "/" ? "2px solid red":"none"} borderRadius={location === "/" ? "30px":"none"}>
          HOME
        </Box>
        <Box px="7px" _hover={{color:"red"}} border={location === "/about" ? "2px solid red":"none"} borderRadius={location === "/about" ? "30px":"none"}>
          ABOUT US 
        </Box>
        <Box px="7px" _hover={{color:"red"}} border={location === "/achievement" ? "2px solid red":"none"} borderRadius={location === "/achievement" ? "30px":"none"}>
          ACHIEVEMENTS
        </Box>
        <Box px="7px" _hover={{color:"red"}} border={location === "/gallery" ? "2px solid red":"none"} borderRadius={location === "/gallery" ? "30px":"none"}>
          GALLERY
        </Box>
        <Box px="7px" _hover={{color:"red"}} border={location === "/team" ? "2px solid red":"none"} borderRadius={location === "/team" ? "30px":"none"}>
          OUR TEAM
        </Box>
        <Box px="7px" _hover={{color:"red"}} border={location === "/sponsors" ? "2px solid red":"none"} borderRadius={location === "/sponsors" ? "30px":"none"}>
          SPONSOR US
        </Box>
        <Box px="7px" _hover={{color:"red"}} border={location === "/contact" ? "2px solid red":"none"} borderRadius={location === "/contact" ? "30px":"none"}>
         CONTACT US
        </Box>
      </HStack>
    </Flex>
  );
};

export default Navbar;