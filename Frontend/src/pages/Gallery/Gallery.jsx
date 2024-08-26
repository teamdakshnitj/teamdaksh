import { Box, Grid, HStack, Image, VStack, Text } from '@chakra-ui/react';
import { useState } from 'react';

// Importing images individually
import img1 from '../../assets/image1 (1).jpg';
import img2 from '../../assets/image1 (2).jpg';
import img3 from '../../assets/image1 (3).jpg';
import img4 from '../../assets/image1 (4).jpg';
import img5 from '../../assets/image1 (5).jpg';
import img6 from '../../assets/image1 (6).jpg';
import img7 from '../../assets/image1 (7).jpg';
import img8 from '../../assets/image1 (8).jpg';
import img9 from '../../assets/image1 (9).jpg';
import img10 from '../../assets/image1 (10).jpg';
import img11 from '../../assets/image1 (11).jpg';

function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Storing imported images in an array
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

  return (
    <VStack bgColor="black" p="8vh" color="white">
      <HStack fontSize="32px" fontWeight="bold">
        <Text>Our</Text>
        <Text color="red">Memories</Text>
      </HStack>
      <Grid
        templateColumns="repeat(5, 1fr)"
        p={4}
        justifyItems="center"
        alignItems="center"
        w="90%"
      >
        {images.map((src, index) => (
          <Box
            key={index}
            width={hoveredIndex === index ? 'auto' : '240px'}
            height={hoveredIndex === index ? 'auto' : '240px'}
            overflow="hidden"
            position="relative"
            cursor="pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            transition="all 0.3s ease"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              boxSize={hoveredIndex === index ? 'auto' : '240px'}
              objectFit="cover"
              transition="all 0.3s ease"
            />
          </Box>
        ))}
      </Grid>
    </VStack>
  );
}

export default Gallery;
