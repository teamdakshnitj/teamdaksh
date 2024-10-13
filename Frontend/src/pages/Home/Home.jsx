import React from "react";
import BgImage from "../../assets/car.png"; // Your background image path
import aboutImage from "../../assets/IMG_20220830_130731.jpg";
import achievementImage from "../../assets/achievements.png";
import sponsorImage from "../../assets/20190926_005344.jpg";
import sponsor1 from "../../assets/sponsor1.png";
import sponsor2 from "../../assets/sponsor2.png";
import sponsor3 from "../../assets/sponsor3.png";
import sponsor4 from "../../assets/sponsor4.png";
import sponsor5 from "../../assets/sponsor5.png";
import sponsor6 from "../../assets/sponsor6.png";
import { Box, Button, Flex, HStack, VStack, Image, Text, keyframes } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const clickSponsor = () => {
    navigate("/sponsor");
  };


  const infiniteScroll = keyframes`
  from { 
    transform: translateX(0); 
  }
  to { 
    transform: translateX(-100%); 
  }
`;

// Define the animation style
const animation = `${infiniteScroll} 25s linear infinite`;

  return (
    <Box>
      {/* Section 1: Background with Title and Button */}
      <Box
        backgroundImage={`url(${BgImage})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundAttachment="fixed"
        width="100%"
        height={{ base: "80vh", md: "100vh" }}
      >
        <VStack
          h="100%"
          w={{ base: "90%", md: "60%", lg: "45%" }}
          justify="center"
          align="center"
          spacing={{ base: 10, md: 20 }}
          mx="auto"
        >
          <Box textAlign="center" px={{ base: 4, md: 0 }}>
            <Text
              color="white"
              fontSize={{ base: "24px", md: "32px", lg: "40px" }}
              fontWeight="bold"
            >
              "Unleash the thrill of the terrain with unstoppable off-road prowess."
            </Text>
          </Box>
          <Box>
            <Button
              bgColor="#9B2C2C"
              fontSize={{ base: "14px", md: "16px" }}
              border="3px solid red"
              borderRadius="30px"
              p={{ base: "16px", md: "20px" }}
              px={{ base: "16px", md: "20px" }}
              color="white"
              onClick={clickSponsor}
            >
              Support Us
            </Button>
          </Box>
        </VStack>
      </Box>

      {/* Section 2: About Us */}
      <Box
        backgroundImage={`url(${aboutImage})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundAttachment="fixed"
        width="100%"
        height="auto"
        py={{ base: 10, md: 20 }}
      >
        <VStack
          h="100%"
          w="100%"
          justify="center"
          alignItems="center"
          color="white"
          px={{ base: 4, md: 0 }}
        >
          <HStack spacing={2} justifyContent="center">
            <Text color="red" fontSize={{ base: "36px", md: "48px", lg: "60px" }} fontWeight="bold">
              About
            </Text>
            <Text fontSize={{ base: "36px", md: "48px", lg: "60px" }} fontWeight="bolder">
              Us
            </Text>
          </HStack>
          <Text fontSize={{ base: "18px", md: "24px" }} fontWeight="bold">
            Who are we?
          </Text>
          <Text w={{ base: "90%", md: "80%" }} textAlign="justify">
            Team Daksh is the official technical team of NIT Jamshedpur which designs and fabricates ATVs. We also proudly claim the first position as the official club at NIT Jamshedpur. Team Daksh was started in the year 2009 by a small group of students who have their own determination to explore the mechanism of ATVs. Every year we participate in BAJA SAE and hold top positions among all the teams. Our Team, under the guidance of Dr. Sanjay and Mr. Rupak Kumar, has made remarkable innovations and shifted from the roar of the engine to the electric pulse of progress. Now Team Daksh is charged with the electrifying power of electricity.
          </Text>
          <Button colorScheme="red" mt={4}>
            Know More
          </Button>
        </VStack>
      </Box>

      {/* Section 3: Achievements */}
      <Box
        backgroundImage={`url(${achievementImage})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundAttachment="fixed"
        width="100%"
        py={{ base: 10, md: 20 }}
      >
        <VStack h="100%" w="100%" justify="center" alignItems="center" color="white" spacing={8}>
          <HStack spacing={2} justifyContent="center">
            <Text color="red" fontSize={{ base: "36px", md: "48px", lg: "60px" }} fontWeight="bold">
              Our
            </Text>
            <Text fontSize={{ base: "36px", md: "48px", lg: "60px" }} fontWeight="bolder">
              Achievements
            </Text>
          </HStack>
          <Flex wrap="wrap" justifyContent="center" gap={6} w="100%">
            {[...Array(9)].map((_, i) => (
              <VStack
                key={i}
                border="2px solid white"
                p={{ base: 4, md: 6 }}
                textAlign="left"
                borderRadius="15px"
                w={{ base: "90%", sm: "40%", md: "30%" }}
              >
                <HStack textAlign="left">
                  <Text fontWeight="bold">BAJA SAE INDIA</Text>
                  <Text fontWeight="bold" color="red">2010:</Text>
                </HStack>
                <Text textAlign="left">Best Engineering Design Award.</Text>
                <Text textAlign="left">1st Position In least Emission Category.</Text>
              </VStack>
            ))}
          </Flex>
          <Button variant="outline" colorScheme="red" p="10px" mt={4}>
            Know More
          </Button>
        </VStack>
      </Box>

      {/* Section 4: Sponsors */}
      <Box
        backgroundImage={`url(${sponsorImage})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundAttachment="fixed"
        width="100%"
        py={{ base: 10, md: 20 }}
      >
        <VStack h="100%" w="100%" justify="center" alignItems="center" color="white" spacing={8}>
          <HStack spacing={2} justifyContent="center">
            <Text fontSize={{ base: "36px", md: "48px", lg: "60px" }} fontWeight="bold">
              Our
            </Text>
            <Text color="red" fontSize={{ base: "36px", md: "48px", lg: "60px" }} fontWeight="bolder">
              Sponsors
            </Text>
          </HStack>
          <Flex
    wrap="nowrap" // Ensures the items are in a single row for scrolling
    justifyContent="center"
    alignItems="center"
    spacing={6}
    w="100%"
    px={{ base: 4, md: 8 }}
    overflow="hidden" // Hide overflowing content to create a carousel effect
  >
    <Flex
      animation={animation}
      w="200%" // Width should be sufficient to accommodate all items in a scrolling row
    >
      {[sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6].map((sponsor, i) => (
        <VStack 
          key={i}
          mx="100px"
          w={{ base: "100px", md: "150px", lg: "200px" }} 
          align="center"
          flexShrink={0} // Prevent the items from shrinking
        >
          <Image src={sponsor} alt={`Sponsor ${i + 1}`} />
          <Text>Platinum Sponsor</Text>
        </VStack>
      ))}
      {/* Duplicate the list to create a seamless scroll
      {[sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6].map((sponsor, i) => (
        <VStack 
          key={i + 6} 
          w={{ base: "100px", md: "150px", lg: "200px" }} 
          align="center"
          flexShrink={0}
        >
          <Image src={sponsor} alt={`Sponsor ${i + 7}`} />
          <Text>Platinum Sponsor</Text>
        </VStack>
      ))} */}
    </Flex>
  </Flex>
          <VStack h="auto" w="100%" justify="center" alignItems="center" color="white" spacing={4}>
            <HStack spacing={2} justifyContent="center">
              <Text color="red" fontSize={{ base: "36px", md: "48px", lg: "60px" }} fontWeight="bold">
                Support
              </Text>
              <Text fontSize={{ base: "36px", md: "48px", lg: "60px" }} fontWeight="bolder">
                Us
              </Text>
            </HStack>
            <Text w={{ base: "90%", md: "80%" }} textAlign="center" fontSize={{ base: "18px", md: "24px" }}>
              "Dreams and aspirations are not easily obtained, but one of the hardest things to do is to keep going and to keep chasing. Being a Predator, we will definitely strive for success, but we want you to be our support while carrying this responsibility. Contribute to a cause, be a Predator with us."
            </Text>
            <Button variant="outline" colorScheme="red" p="10px" mt={4}>
              Know More
            </Button>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Home;
