import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Box, Flex, Image, Icon, Collapse, VStack, HStack } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = window.location.pathname;
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const clickHome = () => {
    navigate("/");
  };

  const clickAbout = () => {
    navigate("/about");
  };

  const clickAchievement = () => {
    navigate("/achievements");
  };

  const clickGallery = () => {
    navigate("/gallery");
  };

  const clickSponsor = () => {
    navigate("/sponsor");
  };

  const clickTeam= () => {
    navigate("/team");
  };

  const clickcontact = () => {
    navigate("/contact");
  };

  return (
    <VStack>
    <HStack bg="black" color="white" position="fixed" w="100%" zIndex={3} justify="center">
      <Flex justify="space-between" align="center" p={4} w="90%">
        <Image h="60px" onClick={clickHome} src={logo} alt="Logo"/>
        <Icon 
          as={GiHamburgerMenu} 
          onClick={toggleMenu}
          display={{ base: "block", md:"block" ,lg: "none" }}
          w={8} 
          h={8} 
          aria-label="Toggle Navigation"
          color='red.500' />

        <Flex
          as="nav"
          display={{ base: "none", md: "none" ,lg: "flex" }}
          justify="space-around"
          w="950px"
        >
          <Box
            px="7px"
            _hover={{ color: "red" , cursor:"pointer"}}
            onClick={clickHome}
            border={location === "/" ? "2px solid red" : "none"}
            borderRadius={location === "/" ? "30px" : "none"}
          >
            HOME
          </Box>
          <Box
            px="7px"
            _hover={{ color: "red" , cursor:"pointer"}}
            onClick={clickAbout}
            border={location === "/about" ? "2px solid red" : "none"}
            borderRadius={location === "/about" ? "30px" : "none"}
          >
            ABOUT US
          </Box>
          <Box
            px="7px"
            _hover={{ color: "red" , cursor:"pointer"}}
            onClick={clickAchievement}
            border={location === "/achievements" ? "2px solid red" : "none"}
            borderRadius={location === "/achievements" ? "30px" : "none"}
          >
            ACHIEVEMENTS
          </Box>
          <Box
            px="7px"
            _hover={{ color: "red" , cursor:"pointer"}}
            onClick={clickGallery}
            border={location === "/gallery" ? "2px solid red" : "none"}
            borderRadius={location === "/gallery" ? "30px" : "none"}
          >
            GALLERY
          </Box>
          <Box
            px="7px"
            _hover={{ color: "red" , cursor:"pointer"}}
            onClick={clickTeam}
            border={location === "/team" ? "2px solid red" : "none"}
            borderRadius={location === "/team" ? "30px" : "none"}
          >
            OUR TEAM
          </Box>
          <Box
            px="7px"
            _hover={{ color: "red" , cursor:"pointer"}}
            onClick={clickSponsor}
            border={location === "/sponsors" ? "2px solid red" : "none"}
            borderRadius={location === "/sponsors" ? "30px" : "none"}
          >
            SPONSOR US
          </Box>
          <Box
            px="7px"
            _hover={{ color: "red" , cursor:"pointer"}}
            onClick={clickcontact}
            border={location === "/contact" ? "2px solid red" : "none"}
            borderRadius={location === "/contact" ? "30px" : "none"}
          >
            CONTACT US
          </Box>
        </Flex>
      </Flex>
      </HStack>
      <Box display={isOpen? "block" : "none"} animateOpacity w="100%"  pt="11vh">
        <VStack
          bg="black"
          color="white"
          p={4}
          display={{ lg: "none" }}
          spacing={4}
          align="stretch"
          w="100%"
        >
          <Box
            onClick={() => navigate("/")}
            _hover={{ color: "red" , cursor:"pointer"}}
            border={location === "/" ? "2px solid red" : "none"}
            borderRadius={location === "/" ? "30px" : "none"}
            p="5px"
          >
            HOME
          </Box>
          <Box
            onClick={clickAbout}
            _hover={{ color: "red" , cursor:"pointer"}}
            border={location === "/about" ? "2px solid red" : "none"}
            borderRadius={location === "/about" ? "30px" : "none"}
            p="5px"
          >
            ABOUT US
          </Box>
          <Box
            onClick={clickAchievement}
            _hover={{ color: "red" , cursor:"pointer"}}
            p="5px"
            border={location === "/achievements" ? "2px solid red" : "none"}
            borderRadius={location === "/achievements" ? "30px" : "none"}
          >
            ACHIEVEMENTS
          </Box>
          <Box
            onClick={clickGallery}
            _hover={{ color: "red" , cursor:"pointer"}}
            p="5px"
            border={location === "/gallery" ? "2px solid red" : "none"}
            borderRadius={location === "/gallery" ? "30px" : "none"}
          >
            GALLERY
          </Box>
          <Box
            onClick={clickTeam}
            _hover={{ color: "red" , cursor:"pointer"}}
            p="5px"
            border={location === "/team" ? "2px solid red" : "none"}
            borderRadius={location === "/team" ? "30px" : "none"}
          >
            OUR TEAM
          </Box>
          <Box
            onClick={clickSponsor}
            _hover={{ color: "red" , cursor:"pointer"}}
            p="5px"
            border={location === "/sponsors" ? "2px solid red" : "none"}
            borderRadius={location === "/sponsors" ? "30px" : "none"}
          >
            SPONSOR US
          </Box>
          <Box
            onClick={clickcontact}
            _hover={{ color:"red" , cursor:"pointer"}}
            p="5px"
            border={location === "/contact" ? "2px solid red" : "none"}
            borderRadius={location === "/contact" ? "30px" : "none"}
          >
            CONTACT US
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Navbar;
