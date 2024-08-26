import React, { useState } from "react";
import { Box, Flex, Image, Button, Text, HStack, VStack, Icon, extendTheme } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";
import { GoLocation } from "react-icons/go";
import { FaPhoneAlt,  FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

  return (
    <VStack bgGradient="linear(to-b, red.700, black)" 
    color="white"
    justify="center"
    >
      <VStack w="90%">
        <HStack justify="space-around" p="2%">
            <VStack w="30%" h="130px">
                <Text fontSize="24px" fontWeight="bold">Quick Link</Text>
                <HStack>
                    <Text>Home</Text>
                    <Text>|</Text>
                    <Text>About</Text>
                    <Text>|</Text>
                    <Text>Team</Text>
                    <Text>|</Text>
                    <Text>Achivements</Text>
                    <Text>|</Text>
                    <Text>Contact us</Text>
                </HStack>
            </VStack>
            <VStack w="30%" h="130px">
                <Text fontSize="24px" fontWeight="bold">About Us</Text>
                <Box>
                    <Text>We participate in SAE Collegiate competitions like BAJA SAEINDIA & BAJA SAE International.</Text>
                </Box>
            </VStack>
            <VStack w="30%" h="130px" justify="left">
                <HStack justify="left">
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
        <HStack justify="left" w="100%">
            <Text>Designed By:</Text>
            <Text color="red">Jayant Joshi , Money Goyal</Text>
        </HStack>
        <HStack justify="space-between" w="100%">
            <HStack fontSize="20px" fontWeight="bold">
                <Text>Team</Text>
                <Text color="red">Daksh</Text>
            </HStack>
            <Text>© 2024 NIT Jalandhar —www.teamdaksh.com</Text>
            <HStack spacing={5}>
                <Icon as={FaFacebook}  w={6} h={6} />
                <Icon as={RiInstagramFill}  w={6} h={6} />
                <Icon as={FaLinkedin}  w={6} h={6} />
            </HStack>
        </HStack>
    </VStack>      
    </VStack>
  );
};

export default Footer;