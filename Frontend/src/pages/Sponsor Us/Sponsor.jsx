import React from "react";
import { Box, Text, VStack, Divider, List, ListItem, Button } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const Sponsor = () => {
  return (
    <Box bgColor="black" color="white" p={{ base: '4vh', md: '8vh' }} mt="8vh">
      <VStack spacing={8} textAlign="center">
        {/* Sponsor Us Heading */}
        <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold">
          Sponsor <Text as="span" color="red.500">us</Text>
        </Text>

        {/* Be a Part of Our Journey */}
        <VStack spacing={2} align="center">
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
            Be a Part of Our Journey!
          </Text>
          <Divider borderColor="red.500" borderWidth="2px" width="15vw" maxWidth="800px" />
        </VStack>

        {/* Description */}
        <Box width="65vw" textAlign="left">
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.300">
            Be at the forefront of innovation! Support our college technical team as we electrify the all-terrain vehicle scene for the e-BAJA event. By sponsoring us, you align your brand with sustainable technology, cutting-edge engineering, and the excitement of competition. Partner with us and drive the future of mobility at Team DAKSH.
          </Text>
        </Box>

        {/* Why Should You Sponsor Us */}
        <Box width="65vw" mt={8} textAlign="left" mx="auto">
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="red.500" mb={4} textAlign="center">
            Why Should You Sponsor Us
          </Text>
          <List spacing={3} textAlign="left">
            <ListItem>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.300">
                <strong>Networking Opportunities:</strong> Sponsors might see opportunities to connect with like-minded individuals or organizations, leading to potential collaborations and business relationships.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.300">
                <strong>Brand Recognition:</strong> Sponsoring can enhance a company's or individual's brand image. Being associated with successful or meaningful endeavors can positively impact how the sponsor is perceived by the public.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.300">
                <strong>Corporate Social Responsibility (CSR):</strong> Many companies are committed to contributing to social and environmental causes as part of their CSR initiatives. Sponsoring individuals or projects that promote positive social impact aligns with these values.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.300">
                <strong>Shared Values:</strong> Sponsors may be interested in supporting causes or projects that align with their values and mission. If there is a strong alignment between the sponsor's goals and the goals of the individual or project seeking sponsorship, it can be a compelling reason to offer support.
              </Text>
            </ListItem>
          </List>
        </Box>

        {/* Download Button */}
        <Box mt={8}>
          <Button
            as="a"
            href="/project-plan.pdf"  // Link to the PDF file
            download="project-plan.pdf"  // Suggest file name when downloading
            colorScheme="red"
            size="lg"
            leftIcon={<DownloadIcon />}
          >
            Download Project Plan
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Sponsor;
