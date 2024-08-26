import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Box, Flex, Image, IconButton, Collapse, VStack, HStack } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = window.location.pathname;
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const clickAbout = () => {
    navigate("/about");
  };

  return (
    <VStack>
    <HStack bg="black" color="white" position="fixed" w="100%" zIndex={3} justify="center">
      <Flex justify="space-between" align="center" p={4} w="90%">
        <Image h="60px" src={logo} alt="Logo" />

        <IconButton
          display={{ base: "block", md:"block" ,lg: "none" }}
          onClick={toggleMenu}
          icon={<GiHamburgerMenu />}
          color="red.800"
          variant="outline"
          aria-label="Toggle Navigation"
        />

        <Flex
          as="nav"
          display={{ base: "none", md: "none" ,lg: "flex" }}
          justify="space-around"
          w="950px"
        >
          <Box
            px="7px"
            _hover={{ color: "red" }}
            border={location === "/" ? "2px solid red" : "none"}
            borderRadius={location === "/" ? "30px" : "none"}
          >
            HOME
          </Box>
          <Box
            px="7px"
            _hover={{ color: "red" }}
            onClick={clickAbout}
            border={location === "/about" ? "2px solid red" : "none"}
            borderRadius={location === "/about" ? "30px" : "none"}
          >
            ABOUT US
          </Box>
          <Box
            px="7px"
            _hover={{ color: "red" }}
            border={location === "/achievements" ? "2px solid red" : "none"}
            borderRadius={location === "/achievements" ? "30px" : "none"}
          >
            ACHIEVEMENTS
          </Box>
          <Box
            px="7px"
            _hover={{ color: "red" }}
            border={location === "/gallery" ? "2px solid red" : "none"}
            borderRadius={location === "/gallery" ? "30px" : "none"}
          >
            GALLERY
          </Box>
          <Box
            px="7px"
            _hover={{ color: "red" }}
            border={location === "/team" ? "2px solid red" : "none"}
            borderRadius={location === "/team" ? "30px" : "none"}
          >
            OUR TEAM
          </Box>
          <Box
            px="7px"
            _hover={{ color: "red" }}
            border={location === "/sponsors" ? "2px solid red" : "none"}
            borderRadius={location === "/sponsors" ? "30px" : "none"}
          >
            SPONSOR US
          </Box>
          <Box
            px="7px"
            _hover={{ color: "red" }}
            border={location === "/contact" ? "2px solid red" : "none"}
            borderRadius={location === "/contact" ? "30px" : "none"}
          >
            CONTACT US
          </Box>
        </Flex>
      </Flex>
      </HStack>
      <Collapse in={isOpen} animateOpacity w="100%">
        <VStack
          bg="black"
          color="white"
          p={4}
          display={{ lg: "none" }}
          spacing={4}
          align="stretch"
          w="100%"
          border="2px solid red"
        >
          <Box
            onClick={() => navigate("/")}
            _hover={{ color: "red" }}
            border={location === "/" ? "2px solid red" : "none"}
            borderRadius={location === "/" ? "30px" : "none"}
          >
            HOME
          </Box>
          <Box
            onClick={clickAbout}
            _hover={{ color: "red" }}
            border={location === "/about" ? "2px solid red" : "none"}
            borderRadius={location === "/about" ? "30px" : "none"}
          >
            ABOUT US
          </Box>
          <Box
            onClick={() => navigate("/achievements")}
            _hover={{ color: "red" }}
            border={location === "/achievements" ? "2px solid red" : "none"}
            borderRadius={location === "/achievements" ? "30px" : "none"}
          >
            ACHIEVEMENTS
          </Box>
          <Box
            onClick={() => navigate("/gallery")}
            _hover={{ color: "red" }}
            border={location === "/gallery" ? "2px solid red" : "none"}
            borderRadius={location === "/gallery" ? "30px" : "none"}
          >
            GALLERY
          </Box>
          <Box
            onClick={() => navigate("/team")}
            _hover={{ color: "red" }}
            border={location === "/team" ? "2px solid red" : "none"}
            borderRadius={location === "/team" ? "30px" : "none"}
          >
            OUR TEAM
          </Box>
          <Box
            onClick={() => navigate("/sponsors")}
            _hover={{ color: "red" }}
            border={location === "/sponsors" ? "2px solid red" : "none"}
            borderRadius={location === "/sponsors" ? "30px" : "none"}
          >
            SPONSOR US
          </Box>
          <Box
            onClick={() => navigate("/contact")}
            _hover={{ color: "red" }}
            border={location === "/contact" ? "2px solid red" : "none"}
            borderRadius={location === "/contact" ? "30px" : "none"}
          >
            CONTACT US
          </Box>
        </VStack>
      </Collapse>
    </VStack>
  );
};

export default Navbar;
