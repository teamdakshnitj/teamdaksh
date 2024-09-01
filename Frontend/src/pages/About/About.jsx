import React from "react";
import BgImage from "../../assets/car1.png";
import "../../index.css/";
import { HStack, VStack, Image, Box, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <VStack bgColor="#000" color="white" spacing={{ base: 8, md: 12 }} p={{ base: 6, md: "14vh" }}>
      <VStack spacing={{ base: 6, md: 12 }}>
        <HStack fontSize={{ base: "24px", md: "32px" }}>
          <Text>Welcome to</Text>
          <Text color="red">Team Daksh</Text>
        </HStack>
        <HStack
          w="100%"
          flexDirection={{ base: "column", md: "row" }}
          justify="center"
          spacing={{ base: 8, md: 12 }}
        >
          <Box position="relative" width="full" maxWidth="500px" margin="0 auto">
            <Image src={BgImage} alt="Vehicle" width="100%" height="auto" borderRadius="lg" />
            <Box
              position="absolute"
              bg="black"
              bottom="-20px"
              left={{ base: "10%", md: "60%" }}
              padding="10px 20px"
              borderRadius="md"
              border="3px solid red"
              boxShadow="md"
              w={{ base: "260px", md: "300px" }}
            >
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color="red">
                “We Work Together, Perform Together, Achieve Together”
              </Text>
            </Box>
          </Box>
          <VStack w={{ base: "90%", md: "40%" }} textAlign={{ base: "center", md: "left" }}>
            <Text
              w="100%"
              borderLeft="5px solid red"
              pl="16px"
              fontSize={{ base: "18px", md: "20px" }}
            >
              WHO WE ARE?
            </Text>
            <Text textAlign={"center"} sx={{textAlign:"justify"}}>
              Team Daksh is the official technical team of NIT Jamshedpur which designs and
              fabricates ATVs. We also proudly claim the first position as the official club at NIT
              Jamshedpur. Team Daksh was started in the year 2009 by a small group of students who
              have their own determination to explore the mechanism of ATVs. Every year we
              participate in BAJA SAE and hold top positions among all the teams. Our Team, under
              the guidance of Dr. Sanjay and Mr. Rupak Kumar, has made remarkable innovations and
              transitioned from the roar of the engine to the electric pulse of progress. Now, Team
              Daksh is charged with the electrifying power of electricity.
            </Text>
          </VStack>
        </HStack>
      </VStack>
      <VStack w="90%" spacing={{ base: 8, md: 12 }} mb="75px">
        <HStack
          flexDirection={{ base: "column", md: "row" }}
          spacing={{ base: 4, md: 12 }}
          align="flex-start"
        >
          <VStack w={{ base: "100%", md: "70%" }} textAlign={{ base: "center", md: "left" }}>
            <HStack fontSize={{ base: "24px", md: "32px" }} w="100%">
              <Text>Our</Text>
              <Text color="red">Innovation</Text>
            </HStack>
            <Text textAlign={"center"} sx={{textAlign:"justify"}}>
              Our innovative exhaust system incorporates a revolutionary plasma film, transforming
              the conventional setup. This technology leverages plasma filtration to break down
              pollutants in exhaust gases, reducing harmful emissions significantly. With benefits
              including emission reduction, improved air quality, and a commitment to environmental
              sustainability, our solution represents a synergy of traditional engineering and
              cutting-edge science. This marks a substantial leap towards eco-friendly and
              sustainable automotive solutions, aligning with the broader goals of the industry.
            </Text>
          </VStack>
          <Image src={BgImage} alt="Vehicle" width={{ base: "300px", md: "200px" }} borderRadius="lg" />
        </HStack>
        <HStack
          flexDirection={{ base: "column", md: "row-reverse" }}
          spacing={{ base: 4, md: 12 }}
          align="flex-start"
        >
          <VStack w={{ base: "100%", md: "70%" }} textAlign={{ base: "center", md: "left" }}>
            <HStack fontSize={{ base: "24px", md: "32px" }} w="100%">
              <Text>Our</Text>
              <Text color="red">Mission</Text>
            </HStack>
            <Text textAlign={"center"} sx={{textAlign:"justify"}}>
              Our mission is to lead the electric vehicle revolution with innovative designs that
              prioritize sustainability and efficiency. Spearheading this commitment, our team is
              dedicated to creating a greener future, exemplified in projects like the e-Baja, where
              cutting-edge electric vehicle technology meets off-road performance. We strive to set
              new standards in environmental responsibility while pushing the boundaries of electric
              mobility.
            </Text>
          </VStack>
          <Image src={BgImage} alt="Vehicle" width={{ base: "300px", md: "200px" }} borderRadius="lg" />
        </HStack>
        <HStack
          flexDirection={{ base: "column", md: "row" }}
          spacing={{ base: 4, md: 12 }}
          align="flex-start"
        >
          <VStack w={{ base: "100%", md: "70%" }} justify={"center"} textAlign={{ base: "center", md: "left" }}>
            <HStack fontSize={{ base: "24px", md: "32px" }} w="100%">
              <Text>What we</Text>
              <Text color="red">Compete for?</Text>
            </HStack>
            <Text textAlign={"center"} sx={{textAlign:"justify"}}>
              At our college, Team DAKSH, we strive to excel in designing and constructing
              all-terrain vehicles. Transitioning from internal combustion to electric engines
              represents our commitment to innovation and sustainability. By participating in the
              e-BAJA event, we aim to showcase our expertise in engineering, teamwork, and
              adaptability as we embrace the challenges and opportunities of electric vehicle
              technology. Join us on this exhilarating journey as we push the boundaries of vehicle
              performance and efficiency in the electrifying realm of e-BAJA.
            </Text>
          </VStack>
          <Image src={BgImage} alt="Vehicle" justify={{base:"center"}} width={{ base: "300px", md: "200px" }} borderRadius="lg" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default About;
