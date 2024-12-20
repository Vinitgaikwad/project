import {
    Box,
    Grid,
    Heading,
    Text,
    VStack,
    Stat,
    StatLabel,
    StatNumber,
    StatGroup,
    Card,
    CardHeader,
    CardBody,
    useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { homeData } from '../../data/dashboardData';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionStat = motion(Stat);

export const HomeTab = () => {
    const cardBg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('brand.200', 'brand.700');
    const textColor = useColorModeValue('gray.700', 'gray.300');

    // Responsive Grid Template
    const statGridColumns = useBreakpointValue({
        base: '1fr', // Single column for small screens
        md: 'repeat(3, 1fr)', // Three columns for medium and larger screens
    });

    return (
        <VStack spacing={8} align="stretch">
            {/* Welcome Message */}
            <MotionBox
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Heading size="lg" mb={2} color="brand.600">
                    {homeData.welcomeMessage}
                </Heading>
                <Text color={textColor}>
                    Track your progress and manage your learning journey
                </Text>
            </MotionBox>

            {/* Quick Stats */}
            <StatGroup width="100%">
                <Grid
                    templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
                    gap={4}
                    width="100%"
                >
                    {Object.entries(homeData.quickStats).map(([label, value], index) => (
                        <MotionStat
                            key={label}
                            p={4}
                            bg={cardBg}
                            borderRadius="lg"
                            borderWidth="1px"
                            borderColor={borderColor}
                            width="100%"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * index, duration: 0.5 }}
                        >
                            <StatLabel>{label.replace(/([A-Z])/g, ' $1')}</StatLabel>
                            <StatNumber color="brand.500">{value}</StatNumber>
                        </MotionStat>
                    ))}
                </Grid>
            </StatGroup>

            {/* Upcoming Events */}
            <MotionCard
                bg={cardBg}
                borderWidth="1px"
                borderColor={borderColor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <CardHeader>
                    <Heading size="md" color="brand.600">Upcoming Events</Heading>
                </CardHeader>
                <CardBody>
                    <VStack spacing={4} align="stretch">
                        {homeData.upcomingEvents.map((event, index) => (
                            <MotionBox
                                key={index}
                                p={4}
                                borderWidth="1px"
                                borderColor={borderColor}
                                borderRadius="md"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 * index, duration: 0.5 }}
                            >
                                <Text fontWeight="bold" color="brand.500">{event.title}</Text>
                                <Text fontSize="sm" color={textColor}>
                                    {event.date} at {event.time}
                                </Text>
                                <Text mt={2} color={textColor}>{event.description}</Text>
                            </MotionBox>
                        ))}
                    </VStack>
                </CardBody>
            </MotionCard>
        </VStack>
    );
};
