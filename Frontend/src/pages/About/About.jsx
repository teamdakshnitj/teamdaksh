
import React from "react";
import BgImage from "../../assets/car1.png";
import "../../index.css/";
import {HStack, VStack, Image} from "@chakra-ui/react";
import { Box , Text} from "@chakra-ui/react";

const About = () => {
  return (
    <VStack bgColor="#000" color="white">
       <VStack p="14vh" spacing={12}>
        <HStack fontSize="32px">
        <Text>Welcome to</Text>
        <Text color="red">Team Daksh</Text>
        </HStack>
        <HStack w="100%" justify="center" justifyContent="space-around">
        <Box position="relative" width="full" maxWidth="500px" margin="0 auto">
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
        ml="60%"
        padding="10px 20px" 
        borderRadius="md" 
        border="3px solid red"
        boxShadow="md"
        w="300px"
        
      >
        <Text 
          fontSize="lg" 
          fontWeight="bold" 
          color="red"
        >
          “We Work Together, Perform Together, Achieve Together”
        </Text>
      </Box>
    </Box>
    <VStack w="40%">
        <Text textAlign="left" w="100%" borderLeft="5px solid red" pl="16px" fontSize="20px">
              WHO WE ARE?
        </Text>
        <Text>Team Daksh is the official technical team of NIT Jamshedpur which design and fabricates ATVs. We also proudly claim the first position as the official club at NIT Jamshedpur. Team Daksh was started in the year 2009 by a small group of students who have their own determination to Explore the mechanism of ATVs. Every year we participate in BAJA SAE and holds top position among all the teams. Our Team under the guidance of Dr.sanjay and Mr. Rupak kumar have made remarkable innovation and got shifted from roar of the engine to the electric pulse of progress. Now Team daksh is charged with the electrifying power of electricity.</Text>
     </VStack>
    </HStack>
    </VStack>
    <HStack w="90%" justifyContent="space-around" mb="75px">
      <VStack w="70%">
        <HStack fontSize="32px" w="100%" textAlign="left">
          <Text>
            Our
          </Text>
          <Text color="red">
            Innovation
          </Text>
        </HStack>
        <Text>
        Our innovative exhaust system incorporates a revolutionary plasma film, transforming the conventional setup. This technology leverages plasma filtration to break down pollutants in exhaust gases, reducing harmful emissions significantly. With benefits including emission reduction, improved air quality, and a commitment to environmental sustainability, our solution represents a synergy of traditional engineering and cutting-edge science. This marks a substantial leap towards eco-friendly and sustainable automotive solutions, aligning with the broader goals of the industry.
        </Text>
      </VStack>
      <Image 
        src={BgImage}
        alt="Vehicle" 
        width="160px" 
        h="90px"
        height="auto" 
        borderRadius="lg"
      />
    </HStack>
    <HStack w="90%" justifyContent="space-around" mb="75px">
      <Image 
          src={BgImage}
          alt="Vehicle" 
          width="160px" 
          h="90px"
          height="auto" 
          borderRadius="lg"
        />
      <VStack w="70%">
        <HStack fontSize="32px" w="100%" textAlign="left">
          <Text>
            Our
          </Text>
          <Text color="red">
            Mission
          </Text>
        </HStack>
        <Text>
        Our mission is to lead the electric vehicle revolution with innovative designs that prioritize sustainability and efficiency. Spearheading this commitment, our team is dedicated to creating a greener future, exemplified in projects like the e-Baja, where cutting-edge electric vehicle technology meets off-road performance. We strive to set new standards in environmental responsibility while pushing the boundaries of electric mobility.
        </Text>
      </VStack>
    </HStack>
    <HStack w="90%" justifyContent="space-around" mb="75px">
      <VStack w="70%">
        <HStack fontSize="32px" w="100%" textAlign="left">
          <Text>
          What we 
          </Text>
          <Text color="red">
          Compete for?
          </Text>
        </HStack>
        <Text>
        At our college Team DAKSH, we strive to excel in designing and constructing all-terrain vehicles. Transitioning from internal combustion to electric engines represents our commitment to innovation and sustainability. By participating in the e-BAJA event, we aim to showcase our expertise in engineering, teamwork, and adaptability, as we embrace the challenges and opportunities of electric vehicle technology. Join us on this exhilarating journey as we push the boundaries of vehicle performance and efficiency in the electrifying realm of e-BAJA.
        </Text>
      </VStack>
      <Image 
        src={BgImage}
        alt="Vehicle" 
        width="160px" 
        h="90px"
        height="auto" 
        borderRadius="lg"
      />
    </HStack>
  </VStack>
  );
};

export default About;
