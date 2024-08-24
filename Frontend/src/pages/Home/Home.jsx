
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
import "../../index.css/";
import { Button, Flex, HStack, VStack, Image} from "@chakra-ui/react";
import { Box , Text} from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Box
      backgroundImage={`url(${BgImage})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      width="100%"
      height="100vh">
        <Box h="100%" w="100%">
          <Box w="630px" textAlign="center" pl="50px" pt="150px">
            <Text color="white" fontSize="30px">"Unleash the thrill of the terrain with unstoppable off-road prowess."</Text>
          </Box>
          <Box pl="280px" pt="50px">
            <Button bgColor="#9B2C2C" border="3px solid red" borderRadius="30px" p="10px" px="20px" color="white">
              Support Us
            </Button>
          </Box>
        </Box>
      </Box>
      <Box backgroundImage={`url(${aboutImage})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      width="100%"
      height="92vh">
        <VStack h="100%" w="100%" justify="center" alignItems="center" color="white">
            <HStack>
              <Text color="red" fontSize="60px" fontWeight="bold">About</Text>
              <Text fontSize="60px" fontWeight="bolder">Us</Text>
            </HStack>
            <Text fontSize="24px" fontWeight="bold">Who are we?</Text>
            <Text w="90%" textAlign="justify">Team Daksh is the official technical team of NIT Jamshedpur which design and fabricates ATVs. We also proudly claim the first position as the official club at NIT Jamshedpur. Team Daksh was started in the year 2009 by a small group of students who have their own determination to Explore the mechanism of ATVs. Every year we participate in BAJA SAE and holds top position among all the teams. Our Team under the guidance of Dr.sanjay and Mr. Rupak kumar have made remarkable innovation and got shifted from roar of the engine to the electric pulse of progress. Now Team daksh is charged with the electrifying power of electricity.</Text>
            <Button bgColor="#E53E3E" border="2px solid red" borderRadius="5px" p="10px">Know More</Button>
        </VStack>
      </Box>
      <Box backgroundImage={`url(${achievementImage})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      width="100%"
      height="auto"
      p="20px">
        <VStack h="100%" w="100%" justify="center" alignItems="center" color="white">
            <HStack>
              <Text color="red" fontSize="60px" fontWeight="bold">Our</Text>
              <Text fontSize="60px" fontWeight="bolder">Achievements</Text>
            </HStack>
            <HStack w="90%" justifyContent="center" spacing={80} wrap="wrap">
                <VStack border="2px solid white" p="20px" textAlign="left" borderRadius="15px">
                  <HStack textAlign="left">
                    <Text fontWeight="bold">BAJA SAE INDIA </Text>
                    <Text fontWeight="bold" color="red">2010:</Text>
                  </HStack>
                  <Text textAlign="left">Best Engineering Design Award.</Text>
                  <Text textAlign="left">1st Position In least Emission Category.</Text>
                </VStack>
                <VStack border="2px solid white" p="20px" textAlign="left" borderRadius="15px">
                  <HStack textAlign="left">
                    <Text fontWeight="bold">BAJA SAE INDIA </Text>
                    <Text fontWeight="bold" color="red">2010:</Text>
                  </HStack>
                  <Text textAlign="left">Best Engineering Design Award.</Text>
                  <Text textAlign="left">1st Position In least Emission Category.</Text>
                </VStack>
                <VStack border="2px solid white" p="20px" textAlign="left" borderRadius="15px">
                  <HStack textAlign="left">
                    <Text fontWeight="bold">BAJA SAE INDIA </Text>
                    <Text fontWeight="bold" color="red">2010:</Text>
                  </HStack>
                  <Text textAlign="left">Best Engineering Design Award.</Text>
                  <Text textAlign="left">1st Position In least Emission Category.</Text>
                </VStack>
                <VStack border="2px solid white" p="20px" textAlign="left" borderRadius="15px">
                  <HStack textAlign="left">
                    <Text fontWeight="bold">BAJA SAE INDIA </Text>
                    <Text fontWeight="bold" color="red">2010:</Text>
                  </HStack>
                  <Text textAlign="left">Best Engineering Design Award.</Text>
                  <Text textAlign="left">1st Position In least Emission Category.</Text>
                </VStack>
                <VStack border="2px solid white" p="20px" textAlign="left" borderRadius="15px">
                  <HStack textAlign="left">
                    <Text fontWeight="bold">BAJA SAE INDIA </Text>
                    <Text fontWeight="bold" color="red">2010:</Text>
                  </HStack>
                  <Text textAlign="left">Best Engineering Design Award.</Text>
                  <Text textAlign="left">1st Position In least Emission Category.</Text>
                </VStack>
                <VStack border="2px solid white" p="20px" textAlign="left" borderRadius="15px">
                  <HStack textAlign="left">
                    <Text fontWeight="bold">BAJA SAE INDIA </Text>
                    <Text fontWeight="bold" color="red">2010:</Text>
                  </HStack>
                  <Text textAlign="left">Best Engineering Design Award.</Text>
                  <Text textAlign="left">1st Position In least Emission Category.</Text>
                </VStack>
                <VStack border="2px solid white" p="20px" textAlign="left" borderRadius="15px">
                  <HStack textAlign="left">
                    <Text fontWeight="bold">BAJA SAE INDIA </Text>
                    <Text fontWeight="bold" color="red">2010:</Text>
                  </HStack>
                  <Text textAlign="left">Best Engineering Design Award.</Text>
                  <Text textAlign="left">1st Position In least Emission Category.</Text>
                </VStack>
                <VStack border="2px solid white" p="20px" textAlign="left" borderRadius="15px">
                  <HStack textAlign="left">
                    <Text fontWeight="bold">BAJA SAE INDIA </Text>
                    <Text fontWeight="bold" color="red">2010:</Text>
                  </HStack>
                  <Text textAlign="left">Best Engineering Design Award.</Text>
                  <Text textAlign="left">1st Position In least Emission Category.</Text>
                </VStack>
                <VStack border="2px solid white" p="20px" textAlign="left" borderRadius="15px">
                  <HStack textAlign="left">
                    <Text fontWeight="bold">BAJA SAE INDIA </Text>
                    <Text fontWeight="bold" color="red">2010:</Text>
                  </HStack>
                  <Text textAlign="left">Best Engineering Design Award.</Text>
                  <Text textAlign="left">1st Position In least Emission Category.</Text>
                </VStack>
                <VStack border="2px solid white" p="20px" textAlign="left" borderRadius="15px">
                  <HStack textAlign="left">
                    <Text fontWeight="bold">BAJA SAE INDIA </Text>
                    <Text fontWeight="bold" color="red">2010:</Text>
                  </HStack>
                  <Text textAlign="left">Best Engineering Design Award.</Text>
                  <Text textAlign="left">1st Position In least Emission Category.</Text>
                </VStack>
            </HStack>
            <Button border="2px solid red" borderRadius="5px" p="10px" m="10px">Know More</Button>
        </VStack>
      </Box>
      <Box backgroundImage={`url(${sponsorImage})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      width="100%"
      height="92vh">
        <VStack h="100%" w="100%" justify="center" alignItems="center" color="white">
            <HStack>
              <Text fontSize="60px" fontWeight="bold">Our</Text>
              <Text color="red" fontSize="60px" fontWeight="bolder">Sponsors</Text>
            </HStack>
            <HStack w="90%" overflow="hidden" spacing={100}>
              <VStack w="200px" >
                <Image src={sponsor1}/>
                <Text>Platinum Sponsor</Text>
              </VStack>
              <VStack w="200px">
                <Image src={sponsor2}/>
                <Text>Gold Sponsor</Text>
              </VStack>
              <VStack w="200px">
                <Image src={sponsor3}/>
                <Text>Silver Sponsor</Text>
              </VStack>
              <VStack w="200px">
                <Image src={sponsor4}/>
                <Text>Platinum Sponsor</Text>
              </VStack>
              <VStack w="200px">
                <Image src={sponsor5}/>
                <Text>Platinum Sponsor</Text>
              </VStack>
              <VStack w="200px">
                <Image src={sponsor6}/>
                <Text>Platinum Sponsor</Text>
              </VStack>
            </HStack>
            <VStack h="auto" w="100%" justify="center" alignItems="center" color="white">
                <HStack>
                  <Text color="red" fontSize="60px" fontWeight="bold">Support</Text>
                  <Text fontSize="60px" fontWeight="bolder">Us</Text>
                </HStack>
                <Text w="90%" textAlign="center" fontSize="24px">"Dreams aspirations are not easily obtained but one of the hardest things to do is to keep going is to keep chasing. Being a Predator we will definitely strive for success but we want you to be our support while carrying this responsibility. Contribute to a cause, Be a Predator with us."</Text>
                <Button border="2px solid red" borderRadius="5px" p="10px">Know More</Button>
            </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Home;
