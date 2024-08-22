/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import BgImage from "../../assets/car.png"; // Your background image path
import "../../index.css";
import { Flex } from "@chakra-ui/react";
import { Box , Text} from "@chakra-ui/react";

// Define the background image style
// const bgImage = {
//   backgroundImage: `url(${BgImage})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundAttachment: "fixed",
//   filter: "brightness(60%)", // Darkens the background image
// };

const Home = () => {
  return (
    <Box>
      <Box
      backgroundImage={`url(${BgImage})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      filter="brightness(60%)"
      width="100%"
      height="92vh">
        <Box h="100%" w="100%">
          <Box w="630px" textAlign="center" pl="50px" pt="150px">
           <Text color="white" fontSize="30px">"Unleash the thrill of the terrain with unstoppable off-road prowess."</Text>
          </Box>
        </Box>
      </Box>
      <Box>
        hellooo
      </Box>
    </Box>
  );
};

export default Home;
