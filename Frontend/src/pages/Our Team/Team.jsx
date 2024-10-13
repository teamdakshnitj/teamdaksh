import { useState } from 'react';
import { Box, Grid, VStack, HStack, Image, Text, Link, Icon, Tabs, TabList, Stack, TabPanels, Tab, Badge,  TabPanel, Button } from '@chakra-ui/react';
import { FaLinkedin ,FaCode} from 'react-icons/fa';
import img from '../../assets/car.jpg';  // Replace with the actual image if available
import fac from '../../assets/faculty.jpg';
import money from '../../assets/money.jpeg';
import jayant from '../../assets/jayant.jpeg';

function OurTeam() {
  const coreMembers = [
    { name: 'Shubham Tiwari', image: img, designation: 'Captain', linkedIn: 'https://www.linkedin.com/in/shubham-tiwari-68368926a', department: 'Suspension' },
    { name: 'Sanket Kumar', image: img, designation: 'Fabrication Head', linkedIn: 'https://www.linkedin.com/in/sanket-kumar-a43b70229', department: 'Simulation' },
    { name: 'Jai Singh Saini', image: img, designation: 'Electrical Head', linkedIn: 'https://www.linkedin.com/in/jai-singh-saini-282110249', department: 'Electrical' },
    { name: 'Amresh Salehundam', image: img, designation: 'Treasurer', linkedIn: 'https://www.linkedin.com/in/amresh-salehundam-a437a9247', department: 'Transmission' },
  ];

  const allMembers = [
    {
      name: 'Raghvendra Singh Rajpoot',
      image: img, // replace with actual image path
      designation: 'Transmission',
      linkedIn: 'https://www.linkedin.com/in/raghvendra-rajpoot-601017325/',
    },
    {
      name: 'Vaibhav Raj Gupta',
      image: img, // replace with actual image path
      designation: 'Simulation',
      linkedIn: 'https://www.linkedin.com/in/vaibhav-raj-gupta-86718b252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Sukhjinder Kaur',
      image: img, // replace with actual image path
      designation: 'Design and Braking',
      linkedIn: 'https://www.linkedin.com/in/sukhjinder-kaur-97b132325',
    },
    {
      name: 'Vivek Kumar',
      image: img, // replace with actual image path
      designation: 'Simulation',
      linkedIn: 'https://www.linkedin.com/in/vivek-kumar-0400a0264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Pritam Bar',
      image: img, // replace with actual image path
      designation: 'Simulation',
      linkedIn: 'https://www.linkedin.com/in/pritam-bar-37a140295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Dipeeka Kumari',
      image: 'path_to_image', // replace with actual image path
      designation: 'Design and Braking',
      linkedIn: 'https://www.linkedin.com/in/dipeeka-kumari-97202a261',
    },
    {
      name: 'Lovish',
      image: 'path_to_image', // replace with actual image path
      designation: 'Suspension and Steering',
      linkedIn: 'https://www.linkedin.com/in/lovish-6438ba203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Harshit Katiyar',
      image: 'path_to_image', // replace with actual image path
      designation: 'Simulation',
      linkedIn: 'www.linkedin.com/in/ harshit-katiyar04',
    },
    {
      name: 'Gursanjam Singh',
      image: 'path_to_image', // replace with actual image path
      designation: 'Design',
      linkedIn: 'https://www.linkedin.com/in/gursanjam-singh-457b36249/',
    },
    {
      name: 'Ashutosh Singh',
      image: 'path_to_image', // replace with actual image path
      designation: 'Design and Braking',
      linkedIn: 'https://www.linkedin.com/in/ashutosh-singh-953ba8285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Mohammad Ali',
      image: 'path_to_image', // replace with actual image path
      designation: 'Simulation',
      linkedIn: 'www.linkedin.com/in/mohammad-ali-formal',
    },
    {
      name: 'Saurabh Shukla',
      image: 'path_to_image', // replace with actual image path
      designation: 'Simulation',
      linkedIn: 'https://www.linkedin.com/in/saurabh-shukla-b5565b258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BsTLnqBkKSy2%2FMVSbuSnujA%3D%3D',
    },
    {
      name: 'Sagar Meena',
      image: 'path_to_image', // replace with actual image path
      designation: 'Design and Braking',
      linkedIn: 'https://www.linkedin.com/in/sagar-meena-a29776274',
    },
    {
      name: 'Sarteg Singh Jutla',
      image: 'path_to_image', // replace with actual image path
      designation: 'Design',
      linkedIn: 'www.linkedin.com/in/sarteg-dev',
    },
    {
      name: 'Rachit Garg',
      image: 'path_to_image', // replace with actual image path
      designation: 'Suspension and Steering',
      linkedIn: 'https://www.linkedin.com/in/rachit-garg-31b374271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Vivek Pathak',
      image: 'path_to_image', // replace with actual image path
      designation: 'Design and Braking',
      linkedIn: 'https://www.linkedin.com/in/vivek-pathak-nitj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Abhijeet Kaur',
      image: 'path_to_image', // replace with actual image path
      designation: 'Electrical and Automation',
      linkedIn: 'https://www.linkedin.com/in/abhijeet-kaur-5335b7296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Gopal Dheer',
      image: 'path_to_image', // replace with actual image path
      designation: 'Transmission',
      linkedIn: 'https://www.linkedin.com/in/gopal-dheer-866b92325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Palli Sravanee',
      image: 'path_to_image', // replace with actual image path
      designation: 'Electrical and Automation',
      linkedIn: 'https://www.linkedin.com/in/pallisravanee',
    },
    {
      name: 'Kartikey Tyagi',
      image: 'path_to_image', // replace with actual image path
      designation: 'Suspension and Steering',
      linkedIn: 'https://www.linkedin.com/in/kartikey-tyagi-05b964256/',
    },
    {
      name: 'Ayush Gupta',
      image: 'path_to_image', // replace with actual image path
      designation: 'Suspension',
      linkedIn: 'https://www.linkedin.com/in/ayush-gupta-493270308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Riya',
      image: 'path_to_image', // replace with actual image path
      designation: 'Electrical and Automation',
      linkedIn: 'https://www.linkedin.com/in/riya-0a9168297',
    },
    {
      name: 'Tamarakandi Varsha',
      image: 'path_to_image', // replace with actual image path
      designation: 'Transmission',
      linkedIn: 'https://www.linkedin.com/in/varsha-tamarakandi-9ba6b0244',
    },
    {
      name: 'Aryan Rathor',
      image: 'path_to_image', // replace with actual image path
      designation: 'Simulation',
      linkedIn: 'https://www.linkedin.com/in/aryan-rathore-621550231',
    },
    {
      name: 'Abhay Jadon',
      image: 'path_to_image', // replace with actual image path
      designation: 'Transmission',
      linkedIn: 'https://www.linkedin.com/in/abhay-jadon-9a55932a7',
    },
    {
      name: 'Vivek Kumar',
      image: 'path_to_image', // replace with actual image path
      designation: 'Simulation',
      linkedIn: 'https://www.linkedin.com/in/vivek-kumar-0400a0264',
    },
  ];
  

  const alumniMembers = [
    // { name: 'Alumni Member 1', image: img, designation: 'Alumni Role 1', linkedIn: 'https://linkedin.com' },
    
  ];

 

  const [showMoreMembers, setShowMoreMembers] = useState(false);

  const displayedMembers = showMoreMembers ? allMembers : allMembers.slice(0, 4);

  const renderMembers = (members) => (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
      gap={6}
    >
      {members.map((member, index) => (
        <VStack
          key={index}
          borderRadius="lg"
          w="100%"
          h="auto"
          pb="100%"
          position="relative"
          boxShadow="md"
          overflow="hidden"
          transform="scale(1)"
          transition="all 0.3s ease"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl", borderColor: "red.500" }}
          border="2px solid transparent"
          bg="gray.900"
        >
          <Box position="absolute" top="0" left="0" right="0" bottom="0" p={4}>
            <Image src={member.image} borderRadius="md" alt={member.name} objectFit="cover" w="100%" h="60%" />
            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" mt={2} color="white">{member.name}</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.400">{member.designation}</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.400">{member.department}</Text>
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

  const developers = [
    {
      name: 'Money Goyal',
      image: money, 
      designation: 'Developer',
      linkedIn: 'https://www.linkedin.com/in/money-goyal',  
    },
    {
      name: 'Jayant Joshi',
      image: jayant, 
      designation: 'Developer',
      linkedIn: 'https://www.linkedin.com/in/jayant-joshi001/',  
    },
  ];
  

  const renderDevelopers = (developersList) => (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={12}  // Increased space between cards
      align="center"
      justify="center"
      width="100%"
    >
      {developersList.map((developer, index) => (
        <Link
          key={index}
          href={developer.linkedIn}
          isExternal
          _hover={{ textDecoration: 'none' }} // Remove underline on hover
          w={{ base: '90%', md: '350px' }}  // Set the width for the entire box
        >
          <VStack
            bgGradient="linear(to-r, red.600, black)"
            borderRadius="xl"
            p={8}  // Increased padding
            spacing={6}  // Increased space within each card
            boxShadow="2xl"
            transform="scale(1)"
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.05)", bgGradient: "linear(to-l, black, red.600)" }}
            position="relative"
            alignItems="center"
          >
            <Badge
              colorScheme="red"
              position="absolute"
              top={2}
              right={2}
              borderRadius="full"
              px={3}
              py={1}
              fontSize="sm"
            >
              <Icon as={FaCode} mr={1} />
              Developer
            </Badge>
            <Image
              src={developer.image}
              borderRadius="full"
              boxSize="140px"  // Slightly larger image size
              objectFit="cover"
              alt={developer.name}
              border="4px solid red"
              transition="border 0.3s ease"
              _hover={{ border: "4px solid white" }}
            />
            <Text fontSize="xl" fontWeight="bold" color="white" textAlign="center">{developer.name}</Text>
            <Text fontSize="md" color="gray.300" textAlign="center">{developer.designation}</Text>
            <HStack color="red.400" _hover={{ color: "white" }}>
              <Icon as={FaLinkedin} w={5} h={5} />
              <Text>LinkedIn</Text>
            </HStack>
          </VStack>
        </Link>
      ))}
    </Stack>
  );

  return (
    <VStack bgColor="black" p={{ base: '4vh', md: '8vh' }} color="white" mt="8vh" spacing={12}>
      <HStack mb={12} alignItems="center" spacing={12} p={6} borderRadius="lg" bgColor="black" boxShadow="lg" flexDirection={{ base: 'column', md: 'row' }}>
        <Image src={fac} boxSize={{ base: '200px', md: '300px' }} borderRadius="md" alt="Faculty Coordinator" objectFit="cover" />
        <VStack alignItems={{ base: 'center', md: 'flex-start' }} spacing={3} textAlign={{ base: 'center', md: 'left' }}>
          <Text fontSize="3xl" fontWeight="bold" color="white">Dr. Manoj Kumar</Text>
          <Text fontSize="xl" color="gray.500">Assistant Professor (Grade-I), Mechanical Engineering</Text>
          <Text fontSize="md" color="gray.400">Ph.D. Solid Mechanics and Design (IIT Kanpur)</Text>
          <Link href="https://www.linkedin.com/in/manoj-singh-822b3615" isExternal color="red.500">
            <HStack>
              <Icon as={FaLinkedin} w={6} h={6} />
              <Text fontSize="lg">LinkedIn Profile</Text>
            </HStack>
          </Link>
        </VStack>
      </HStack>

      <Box width="100%" textAlign="center" p={6} borderRadius="lg">
        <Text fontSize="2xl" fontWeight="bold" mb={8} color="white">Core <Text as="span" color="red.500">Members</Text></Text>
        {renderMembers(coreMembers)}
      </Box>

      <Tabs variant="soft-rounded" colorScheme="red" width="100%">
        <TabList justifyContent="center" mb={8}>
          <Tab>Members</Tab>
          <Tab>Alumni</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box width="100%" textAlign="center" p={6} borderRadius="lg">
              <Text fontSize="2xl" fontWeight="bold" mb={8} color="white"><Text as="span" color="red.500">Members</Text></Text>
              {renderMembers(displayedMembers)}
              {!showMoreMembers && (
                <Button mt={4} colorScheme="red" onClick={() => setShowMoreMembers(true)}>
                  View More
                </Button>
              )}
            </Box>
          </TabPanel>

          <TabPanel>
            <Box width="100%" textAlign="center" p={6} borderRadius="lg">
              <Text fontSize="2xl" fontWeight="bold" mb={8} color="white"><Text as="span" color="red.500">Alumni</Text></Text>
              {renderMembers(alumniMembers)}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box width="100%" textAlign="center" p={6} borderRadius="lg">
        <Text fontSize="2xl" fontWeight="bold" mb={8} color="white">
          Website <Text as="span" color="red.500">Developers</Text>
        </Text>
        {renderDevelopers(developers)}
      </Box>
    </VStack>
  );
}

export default OurTeam;
