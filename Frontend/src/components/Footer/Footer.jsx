import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Image, Button, Text, HStack, VStack, Icon, useBreakpointValue } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";
import { GoLocation } from "react-icons/go";
import { FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  
  const clickHome = () => {
    navigate("/");
  };
  
  const clickAbout = () => {
    navigate("/about");
  };
  
  const clickAchievement = () => {
    navigate("/achievements");
  };
  
  const clickTeam = () => {
    navigate("/team");
  };
  
  const clickcontact = () => {
    navigate("/contact");
  };

  // Adjust the font size based on screen size
  const fontSize = useBreakpointValue({ base: "18px", md: "24px" });

  // Adjust alignment and spacing for different screen sizes
  const stackDirection = useBreakpointValue({ base: "column", md: "row" });
  const spacing = useBreakpointValue({ base: 2, md: 5 });
  const justifyContent = useBreakpointValue({ base: "center", md: "space-between" });

  return (
    <VStack
      bgGradient="linear(to-b, red.700, black)"
      color="white"
      justify="center"
      p={5}
    >
      <VStack w="90%">
        <HStack
          justify="space-around"
          p="2%"
          flexDirection={stackDirection} // Adjust direction for smaller screens
          spacing={spacing}
        >
          <VStack w={{ base: "100%", md: "30%" }} my={{ base : "10px"}} h="auto" textAlign={{ base: "center", md: "left" }}>
            <Text fontSize={fontSize} fontWeight="bold">Quick Link</Text>
            <HStack
              wrap="wrap"
              justify={{ base: "center", md: "left" }} // Center on smaller screens
              _hover={{ cursor: "pointer" }}
            >
              <Text onClick={clickHome}>Home</Text>
              <Text>|</Text>
              <Text onClick={clickAbout}>About</Text>
              <Text>|</Text>
              <Text onClick={clickTeam}>Team</Text>
              <Text>|</Text>
              <Text onClick={clickAchievement}>Achievements</Text>
              <Text>|</Text>
              <Text onClick={clickcontact}>Contact us</Text>
            </HStack>
          </VStack>

          <VStack w={{ base: "100%", md: "30%" }} my={{ base : "10px"}} h="auto" textAlign={{ base: "center", md: "left" }}>
            <Text fontSize={fontSize} fontWeight="bold">About Us</Text>
            <Box>
              <Text>We participate in SAE Collegiate competitions like BAJA SAEINDIA & BAJA SAE International.</Text>
            </Box>
          </VStack>

          <VStack w={{ base: "100%", md: "30%" }} h="auto" my={{ base : "10px"}} textAlign={{ base: "center", md: "left" }}>
            <HStack justify="left" w="100%">
              <Box><Icon as={GoLocation} color={"red"} w={6} h={6} /></Box>
              <Box><Text>G.T Road, Amritsar Bypass, Jalandhar, Punjab, India-144008</Text></Box>
            </HStack>
            <HStack justify="left" w="100%">
              <Box><Icon as={FaPhoneAlt} color={"red"} w={6} h={6} /></Box>
              <Box><Text>+91-1234567890</Text></Box>
            </HStack>
            <HStack justify="left" w="100%">
              <Box><Icon as={IoMail} color={"red"} w={6} h={6} /></Box>
              <Box><Text>abc@gmail.com</Text></Box>
            </HStack>
          </VStack>
        </HStack>

        <HStack justify={justifyContent} fontWeight={"bold"} w="100%" flexDirection={stackDirection} spacing={spacing}>
          <Text>Designed By:</Text>
          <Text color="red">Jayant Joshi, Money Goyal</Text>
        </HStack>

        <HStack justify={justifyContent} w="100%" my={{ base : "10px"}} flexDirection={stackDirection} spacing={spacing}>
          <HStack fontSize="20px" fontWeight="bold">
            <Text>Team</Text>
            <Text color="red">Daksh</Text>
          </HStack>
          <Text textAlign={{ base: "center", md: "left" }}>© 2024 NIT Jalandhar — www.teamdaksh.com</Text>
          <HStack spacing={5} my={{ base : "10px"}}>
            <Icon as={FaFacebook} w={6} h={6} />
            <Icon as={RiInstagramFill} w={6} h={6} />
            <Icon as={FaLinkedin} w={6} h={6} />
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Footer;
