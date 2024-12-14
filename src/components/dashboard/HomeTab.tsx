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
} from '@chakra-ui/react';
import { homeData } from '../../data/dashboardData';

export const HomeTab = () => {
    const cardBg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('brand.200', 'brand.700');
    const textColor = useColorModeValue('gray.700', 'gray.300');

    return (
        <VStack spacing={8} align="stretch">
            <Box>
                <Heading size="lg" mb={2} color="brand.600">
                    {homeData.welcomeMessage}
                </Heading>
                <Text color={textColor}>
                    Track your progress and manage your learning journey
                </Text>
            </Box>

            <StatGroup>
                <Grid templateColumns="repeat(3, 1fr)" gap={4} width="100%">
                    <Stat
                        p={4}
                        bg={cardBg}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor={borderColor}
                    >
                        <StatLabel>Completed Tests</StatLabel>
                        <StatNumber color="brand.500">{homeData.quickStats.completedTests}</StatNumber>
                    </Stat>
                    <Stat
                        p={4}
                        bg={cardBg}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor={borderColor}
                    >
                        <StatLabel>Upcoming Tests</StatLabel>
                        <StatNumber color="brand.500">{homeData.quickStats.upcomingTests}</StatNumber>
                    </Stat>
                    <Stat
                        p={4}
                        bg={cardBg}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor={borderColor}
                    >
                        <StatLabel>Average Score</StatLabel>
                        <StatNumber color="brand.500">{homeData.quickStats.averageScore}%</StatNumber>
                    </Stat>
                </Grid>
            </StatGroup>

            <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
                <CardHeader>
                    <Heading size="md" color="brand.600">Upcoming Events</Heading>
                </CardHeader>
                <CardBody>
                    <VStack spacing={4} align="stretch">
                        {homeData.upcomingEvents.map((event, index) => (
                            <Box
                                key={index}
                                p={4}
                                borderWidth="1px"
                                borderColor={borderColor}
                                borderRadius="md"
                            >
                                <Text fontWeight="bold" color="brand.500">{event.title}</Text>
                                <Text fontSize="sm" color={textColor}>
                                    {event.date} at {event.time}
                                </Text>
                                <Text mt={2} color={textColor}>{event.description}</Text>
                            </Box>
                        ))}
                    </VStack>
                </CardBody>
            </Card>
        </VStack>
    );
};