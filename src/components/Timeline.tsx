import { useState } from 'react';
import {
  Box,
  VStack,
  Text,
  useColorModeValue,
  Collapse,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const timelineData = [
  {
    day: 'Day 1',
    title: 'Introduction & Foundations',
    details: 'Overview of modern pedagogical approaches, introduction to educational technology, and interactive teaching methods.',
  },
  {
    day: 'Day 2',
    title: 'Digital Tools & Resources',
    details: 'Hands-on workshops on digital teaching tools, learning management systems, and creating engaging online content.',
  },
  {
    day: 'Day 3',
    title: 'Assessment Strategies',
    details: 'Modern assessment techniques, rubric development, and implementing effective feedback mechanisms.',
  },
  {
    day: 'Day 4',
    title: 'Research Integration',
    details: 'Incorporating research into teaching, developing research-based learning activities, and fostering critical thinking.',
  },
  {
    day: 'Day 5',
    title: 'Future of Education',
    details: 'Emerging trends in education, AI in teaching, and preparing for the next generation of learners.',
  },
];

export const Timeline = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const bgColor = useColorModeValue('blue.50', 'blue.900');
  const borderColor = useColorModeValue('blue.200', 'blue.700');
  const hoverBg = useColorModeValue('blue.100', 'blue.800');

  return (
    <VStack spacing={4} align="stretch" w="100%">
      {timelineData.map((item, index) => (
        <MotionBox
          key={item.day}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          cursor="pointer"
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="lg"
          p={4}
          bg={bgColor}
          _hover={{ bg: hoverBg }}
          onClick={() => setSelectedDay(selectedDay === item.day ? null : item.day)}
        >
          <Text fontWeight="bold" fontSize="lg">
            {item.day}: {item.title}
          </Text>
          <Collapse in={selectedDay === item.day}>
            <Text mt={2} fontSize="md">
              {item.details}
            </Text>
          </Collapse>
        </MotionBox>
      ))}
    </VStack>
  );
};