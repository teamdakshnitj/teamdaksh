import React from "react";
import { Box, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast, HStack } from "@chakra-ui/react";

const Contact = () => {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    toast({
      title: "Message sent.",
      description: "We've received your message and will get back to you shortly.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box bgColor="black" color="white" p={{ base: '6vh', md: '10vh' }} mt="10vh">
      <VStack spacing={12} textAlign="center">
        {/* Get in Touch Heading */}
        <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold">
          Get in <Text as="span" color="red.500">Touch</Text>
        </Text>

        <HStack spacing={16} align="start" wrap="wrap">
          {/* Contact Information Section */}
          <Box width={{ base: "100%", md: "45%" }} textAlign="left">
            <VStack spacing={8} align="stretch">
              <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="red.500">
                Feel free to reach out to us
              </Text>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.300">
                with any inquiries, feedback, or concerns. Your communication is important to us, and we aim to respond promptly to assist you.
              </Text>
              <Box>
                <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color="red.500" mb={3}>
                  Our Address
                </Text>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.300">
                  National Institute of Technology Jalandhar
                </Text>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.300">
                Grand Trunk Road, Barnala - Amritsar Bypass Rd, Jalandhar, Punjab 144011
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color="red.500" mb={3}>
                  Contact
                </Text>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.300">
                  Mobile: +91 
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color="red.500" mb={3}>
                  Mail
                </Text>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.300">
                  Email: 
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Contact Form Section */}
          <Box width={{ base: "100%", md: "45%" }} mx="auto" textAlign="left">
            <form onSubmit={handleSubmit}>
              <VStack spacing={8} align="stretch">
                <FormControl id="name" isRequired>
                  <FormLabel color="gray.300">Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    bgColor="gray.800"
                    borderColor="gray.600"
                    color="white"
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel color="gray.300">Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    bgColor="gray.800"
                    borderColor="gray.600"
                    color="white"
                  />
                </FormControl>
                <FormControl id="message" isRequired>
                  <FormLabel color="gray.300">Message</FormLabel>
                  <Textarea
                    placeholder="Your Message"
                    bgColor="gray.800"
                    borderColor="gray.600"
                    color="white"
                  />
                </FormControl>
                <Button
                  type="submit"
                  bgColor="red.500"
                  color="white"
                  _hover={{ bgColor: "red.600" }}
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Contact;
