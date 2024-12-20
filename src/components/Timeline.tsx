<<<<<<< HEAD
import { useState } from 'react';
=======
import { useState } from "react";
>>>>>>> vtong/main
import {
  Box,
  VStack,
  Text,
  useColorModeValue,
  Collapse,
<<<<<<< HEAD
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
=======
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";
import { forwardRef } from "react";
import { timelineData } from "../data/timelineData";

type MotionBoxProps = MotionProps & React.ComponentProps<typeof Box>;

export const MotionBox = motion(
  forwardRef<HTMLDivElement, MotionBoxProps>((props, ref) => (
    <Box ref={ref} {...props} />
  ))
);

export const Timeline = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const lineColor = useColorModeValue("brand.200", "brand.700");
  const dotColor = useColorModeValue("brand.700", "highlight.500");
  const bgColor = useColorModeValue("brand.50", "gray.800");
  const hoverBg = useColorModeValue("brand.100", "gray.700");
  const borderColor = useColorModeValue("brand.300", "brand.600");

  const showTimelineDecoration = useBreakpointValue({ base: false, md: true });

  return (
    <Box position="relative" w="100%">
      {/* Vertical timeline line */}
      {showTimelineDecoration && (
        <Box
          position="absolute"
          top={0}
          left="8px"
          borderWidth="2px"
          borderColor={borderColor}
          borderRadius="lg"
          bottom={0}
          width="2px"
          bg={lineColor}
        />
      )}
      <VStack
        spacing={6}
        align="stretch"
        pl={showTimelineDecoration ? 10 : 0} // Adjust padding for decoration
      >
        {timelineData.map((item, index) => (
          <MotionBox
            key={item.day}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            cursor="pointer"
            p={4}
            bg={bgColor}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="lg"
            boxShadow="md"
            _hover={{ bg: hoverBg }}
            onClick={() => setSelectedDay(selectedDay === item.day ? null : item.day)}
            position="relative"
          >
            {/* Dot on the timeline */}
            {showTimelineDecoration && (
              <Box
                position="absolute"
                top="50%"
                left="8px"
                transform="translate(-295%, -50%)"
                width="16px"
                height="16px"
                bg={dotColor}
                borderRadius="full"
                boxShadow="md"
              />
            )}
            <HStack pl={showTimelineDecoration ? 0 : 4}>
              {/* Content positioned to the right */}
              <Text fontWeight="bold" fontSize="lg">
                {item.day}: {item.title}
              </Text>
            </HStack>
            <Collapse in={selectedDay === item.day}>
              <Text mt={2} fontSize="md">
                {item.details}
              </Text>
            </Collapse>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
};
>>>>>>> vtong/main
