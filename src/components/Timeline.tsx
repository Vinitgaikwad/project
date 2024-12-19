import { useState } from "react";
import {
  Box,
  VStack,
  Text,
  useColorModeValue,
  Collapse,
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
