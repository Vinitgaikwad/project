import { Box, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { GraduationCap } from 'lucide-react';
import { Timeline } from './Timeline';

export const InfoSection = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('blue.700', 'blue.200');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const iconColor = useColorModeValue('#2B6CB0', '#90CDF4');

  return (
    <Box p={8} bg={bgColor} borderRadius="lg" shadow="lg" height="100%">
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

        <Box>
          <Heading size="md" color={headingColor} mb={2}>
            Registration Fee
          </Heading>
          <Text color={textColor}>
            Research Scholars: ₹1,500
            <br />
            Academia: ₹2,500
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};