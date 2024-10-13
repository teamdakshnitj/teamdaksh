/* eslint-disable no-unused-vars */
import React from "react";
import BgImage from "../../assets/car1.png";
import "../../index.css/";
import { HStack, VStack, Image, Box, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <VStack
      bgColor="#000"
      color="white"
      spacing={{ base: 8, md: 12 }}
      p={{ base: 6, md: "14vh" }}
    >
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
          <Box
            position="relative"
            width="full"
            maxWidth="500px"
            margin="0 auto"
          >
            <Image
              src={BgImage}
              alt="Vehicle"
              width="100%"
              height="auto"
              borderRadius="lg"
            />
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
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="bold"
                color="red"
              >
                “We Work Together, Perform Together, Achieve Together”
              </Text>
            </Box>
          </Box>
          <VStack
            w={{ base: "90%", md: "40%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text
              w="100%"
              borderLeft="5px solid red"
              pl="16px"
              fontSize={{ base: "18px", md: "20px" }}
            >
              WHO WE ARE?
            </Text>
            <Text textAlign={"center"} sx={{ textAlign: "justify" }}>
              Team Daksh was originated by a clique of students who had the
              notion to form a team that would give the team members a pragmatic
              approach toward the automotive field. Apart from studying the
              curriculum taught in the college, the team has put in a lot of
              endeavors to fabricate the vehicle distinguishing our vehicle from
              other vehicles at national as well as international level. The
              team has been successful in promoting greener mobility as well as
              the need to shift to renewable sources of energy. The team has
              brought many laurels to the institute and is determined to
              continue it’s legacy.
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
          <VStack
            w={{ base: "100%", md: "70%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <HStack fontSize={{ base: "24px", md: "32px" }} w="100%">
              <Text>Our</Text>
              <Text color="red">Innovation</Text>
            </HStack>
            <Text textAlign={"center"} sx={{ textAlign: "justify" }}>
              Our innovative exhaust system incorporates a revolutionary plasma
              film, transforming the conventional setup. This technology
              leverages plasma filtration to break down pollutants in exhaust
              gases, reducing harmful emissions significantly. With benefits
              including emission reduction, improved air quality, and a
              commitment to environmental sustainability, our solution
              represents a synergy of traditional engineering and cutting-edge
              science. This marks a substantial leap towards eco-friendly and
              sustainable automotive solutions, aligning with the broader goals
              of the industry.
            </Text>
          </VStack>
          <Image
            src={BgImage}
            alt="Vehicle"
            width={{ base: "300px", md: "200px" }}
            borderRadius="lg"
          />
        </HStack>
        <HStack
          flexDirection={{ base: "column", md: "row-reverse" }}
          spacing={{ base: 4, md: 12 }}
          align="flex-start"
        >
          <VStack
            w={{ base: "100%", md: "70%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <HStack fontSize={{ base: "24px", md: "32px" }} w="100%">
              <Text>Our</Text>
              <Text color="red">Mission</Text>
            </HStack>
            <Text textAlign={"center"} sx={{ textAlign: "justify" }}>
              As members of this proud team, we strive to create technical
              excellence by fabricating and manufacturing electrically powered
              vehicles forthe development and integration of a renewable source
              of energy. Petrol and Diesel are set to become obsolete by 2030,
              hence it’s the need of the an hourto look for a renewable source
              of energy! We hope to be a part of this change, that’s why our
              goal is to participate in ESVC (Electric Solar Vehicle
              Championship) 2023, organized by ISIE INDIA
            </Text>
          </VStack>
          <Image
            src={BgImage}
            alt="Vehicle"
            width={{ base: "300px", md: "200px" }}
            borderRadius="lg"
          />
        </HStack>
        <HStack
          flexDirection={{ base: "column", md: "row" }}
          spacing={{ base: 4, md: 12 }}
          align="flex-start"
        >
          <VStack
            w={{ base: "100%", md: "70%" }}
            justify={"center"}
            textAlign={{ base: "center", md: "left" }}
          >
            <HStack fontSize={{ base: "24px", md: "32px" }} w="100%">
              <Text>What we</Text>
              <Text color="red">Compete for?</Text>
            </HStack>
            <Text textAlign={"center"} sx={{ textAlign: "justify" }}>
              The number of renewable energy-based vehicles is going to rise
              exponentially in the coming years. We hope to be part of this
              change, and that"s why our goal is to participate in IKR(Indian
              Karting Race) 2024, organized by ISIE India. Through this
              competition, we hope to increase our technical competence in this
              non-conventional field.
            </Text>
          </VStack>
          <Image
            src={BgImage}
            alt="Vehicle"
            justify={{ base: "center" }}
            width={{ base: "300px", md: "200px" }}
            borderRadius="lg"
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default About;
