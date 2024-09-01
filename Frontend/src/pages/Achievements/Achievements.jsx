import React from "react";
import BgImage from "../../assets/i1.png"; // Your background image path
import achievementImage from "../../assets/achievements.png";
import { Box, Grid, Text, Image, VStack, HStack } from '@chakra-ui/react';

const Achievements = () => {

  return (
    <VStack bg="black" color="white" py={10}>
      <HStack spacing={5} mb={8} pt="8vh">
        <Text fontSize="4xl" fontWeight="bold">
          Our
        </Text>
        <Text fontSize="4xl" fontWeight="bold" color="red">
          Achievements
        </Text>
      </HStack>
      <Grid 
        templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} 
        gap={6} 
        px={5} 
        w="90%" 
        color="black"
      >
        {Array(10).fill().map((_, i) => (
          <Box key={i} bg="whiteAlpha.900" borderRadius="md" p={5} boxShadow="lg">
            <Image src={BgImage} alt="image" borderRadius="md" mb={4} />
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              BAJA SAE INDIA 2023:
            </Text>
            <Text>
              - In 2023, Team DAKSH continued their legacy with a commendable Rank of 29th out of 114 participating teams and maintained their leadership among NITs, DTU, & NSUT by achieving the 1st Position.
            </Text>
          </Box>
        ))}
      </Grid>
    </VStack>
  );
};

export default Achievements;
