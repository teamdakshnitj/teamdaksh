import { Box, Grid, VStack, HStack, Image, Text, Link, Icon, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';
import img from '../../assets/car.jpg';

function OurTeam() {
  const coreMembers = [
    { name: 'Core Member 1', image: img, designation: 'Role 1', linkedIn: 'https://linkedin.com' },
    // ... other core members
  ];

  const members = [
    { name: 'Member 1', image: img, designation: 'Member Role 1', linkedIn: 'https://linkedin.com' },
    // ... other members
  ];

  const alumniMembers = [
    { name: 'Alumni Member 1', image: img, designation: 'Alumni Role 1', linkedIn: 'https://linkedin.com' },
    // ... other alumni members
  ];

  const renderMembers = (members) => (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',  // 1 column on small screens
        sm: 'repeat(2, 1fr)',    // 2 columns on small-medium screens
        md: 'repeat(3, 1fr)',    // 3 columns on medium screens
        lg: 'repeat(4, 1fr)',    // 4 columns on large screens
      }}
      gap={8}
    >
      {members.map((member, index) => (
        <VStack
          key={index}
          borderRadius="lg"
          w="100%"
          h="0"
          pb="150%"  // Adjusted aspect ratio for a taller image
          position="relative"
          boxShadow="md"
          overflow="hidden"
          transform="scale(1)"
          transition="all 0.3s ease"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl", borderColor: "red.500" }}
          border="2px solid transparent"
        >
          <Box position="absolute" top="0" left="0" right="0" bottom="0" p={4}>
            <Image
              src={member.image}
              borderRadius="md"
              alt={member.name}
              objectFit="cover"
              w="100%"
              h="70%"  // Taller image height
            />
            <Text fontSize="lg" fontWeight="bold" mt={2} color="white">{member.name}</Text>
            <Text fontSize="md" color="gray.400">{member.designation}</Text>
            <Link href={member.linkedIn} isExternal color="red.500" mt={2}>
              <HStack justify="center">
                <Icon as={FaLinkedin} />
                <Text>LinkedIn</Text>
              </HStack>
            </Link>
          </Box>
        </VStack>
      ))}
    </Grid>
  );

  return (
    <VStack bgColor="black" p={{ base: '4vh', md: '8vh' }} color="white" mt="8vh" spacing={12}>
      {/* Faculty Coordinator Section */}
      <HStack
        mb={12}
        alignItems="center"
        spacing={12}
        p={6}
        borderRadius="lg"
        bgColor="black"
        boxShadow="lg"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Image
          src={img}
          boxSize={{ base: '250px', md: '300px' }} // Increased size
          borderRadius="md"
          alt="Faculty Coordinator"
          objectFit="cover"
        />
        <VStack alignItems={{ base: 'center', md: 'flex-start' }} spacing={3} textAlign={{ base: 'center', md: 'left' }}>
          <Text fontSize="3xl" fontWeight="bold" color="white">Faculty Coordinator Name</Text>
          <Text fontSize="xl" color="gray.500">Designation</Text>
          <Link href="https://linkedin.com" isExternal color="red.500">
            <HStack>
              <Icon as={FaLinkedin} w={6} h={6} />
              <Text fontSize="lg">LinkedIn Profile</Text>
            </HStack>
          </Link>
        </VStack>
      </HStack>

      {/* Core Members Section */}
      <Box width="100%" textAlign="center" p={6} borderRadius="lg">
        <Text fontSize="2xl" fontWeight="bold" mb={8} color="white">
          Core <Text as="span" color="red.500">Members</Text>
        </Text>
        {renderMembers(coreMembers)}
      </Box>

      {/* Tabs Section for Members and Alumni */}
      <Tabs variant="soft-rounded" colorScheme="red" width="100%">
        <TabList justifyContent="center" mb={8}>
          <Tab>Members</Tab>
          <Tab>Alumni</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box width="100%" textAlign="center" p={6} borderRadius="lg">
              <Text fontSize="2xl" fontWeight="bold" mb={8} color="white">
                <Text as="span" color="red.500">Members</Text>
              </Text>
              {renderMembers(members)}
            </Box>
          </TabPanel>

          <TabPanel>
            <Box width="100%" textAlign="center" p={6} borderRadius="lg">
              <Text fontSize="2xl" fontWeight="bold" mb={8} color="white">
                <Text as="span" color="red.500">Alumni</Text>
              </Text>
              {renderMembers(alumniMembers)}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}

export default OurTeam;
