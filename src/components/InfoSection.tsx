import { Box, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { GraduationCap } from 'lucide-react';
import { Timeline } from './Timeline';

export const InfoSection = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('brand.200', 'brand.700');
  const headingColor = useColorModeValue('brand.700', 'brand.300');
  const textColor = useColorModeValue('gray.800', 'gray.300');
  const iconColor = useColorModeValue('accent.600', 'highlight.300');


  return (
    <Box p={8} bg={bgColor} borderRadius="lg" shadow="lg" height="100%" borderColor={borderColor} borderWidth="1px">
      <VStack spacing={6} align="start">
        <Box display="flex" alignItems="center" gap={3}>
          <GraduationCap size={32} color={iconColor} />
          <Heading size="lg" color={headingColor}>
            Faculty Development Programme
          </Heading>
        </Box>

        <Text fontSize="lg" color={textColor}>
          Welcome to our comprehensive Faculty Development Programme, designed to enhance
          teaching excellence and professional growth.
        </Text>

        <Box width="100%">
          <Heading size="md" color={headingColor} mb={4}>
            Programme Schedule & Content
          </Heading>
          <Timeline />
        </Box>
      </VStack>
    </Box>
  );
};