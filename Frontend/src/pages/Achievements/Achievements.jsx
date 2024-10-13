import React from "react";
import BgImage from "../../assets/i1.png"; // Background image path
import { Box, Grid, Text, Image, VStack, HStack } from "@chakra-ui/react";

// JSON data with achievements
const achievementsData = {
  team: "Team Daksh",
  achievements: [
    {
      year: 2011,
      event: "Shell Eco-Marathon",
      description: "First participation with a record mileage of 300 km/l"
    },
    {
      year: 2012,
      event: "Shell Eco-Marathon",
      description: "Achieved 65 km/kWh"
    },
    {
      year: 2013,
      event: "SAENIS Efficycle",
      description: "Participated and attended the main event at Chandigarh"
    },
    {
      year: 2014,
      event: "Shell Eco-Marathon, Manila, Philippines",
      description: "Represented India under the Diesel Prototype category"
    },
    {
      year: 2016,
      event: "Effi Cars, Chandigarh",
      description: "Secured 2nd position nationally"
    },
    {
      year: 2017,
      event: "Effi Cars, Chandigarh",
      description: "Won 1st position nationally"
    },
    {
      year: 2018,
      event: "Electric Solar Vehicle Championship (ESVC)",
      description: "Participated with innovation on regenerative braking"
    },
    {
      year: 2019,
      events: [
        {
          name: "FSDC",
          result: "Runner-up"
        },
        {
          name: "Electric Solar Vehicle Championship (ESVC)",
          result: "Champion of Asia's biggest solar vehicle event"
        }
      ]
    },
    {
      year: 2020,
      event: "ESVC Engineering (Virtual)",
      description: "Runner-up"
    },
    {
      year: 2022,
      event: "Indian Karting Race (IKR), Noida",
      description: "Runner-up in the endurance round"
    }
  ],
  future_goals: [
    {
      year: 2024,
      event: "Indian Karting Race (IKR)",
      description:
        "Participation promoting Make in India and Skill India programs, supported by the Ministry of New and Renewable Energy"
    }
  ]
};

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
        {achievementsData.achievements.map((achievement, index) => (
          <Box key={index} bg="whiteAlpha.900" borderRadius="md" p={5} boxShadow="lg">
            <Image src={BgImage} alt="achievement" borderRadius="md" mb={4} />
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {achievement.year}: {achievement.event}
            </Text>
            {Array.isArray(achievement.events) ? (
              achievement.events.map((event, i) => (
                <Text key={i} mb={1}>
                  - {event.name}: {event.result}
                </Text>
              ))
            ) : (
              <Text>{achievement.description}</Text>
            )}
          </Box>
        ))}
      </Grid>
    </VStack>
  );
};

export default Achievements;
