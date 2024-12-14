import {
    Box,
    Grid,
    Heading,
    Progress,
    Text,
    VStack,
    Badge,
    Card,
    CardHeader,
    CardBody,
    useColorModeValue,
} from '@chakra-ui/react';
import { analyticsData } from '../../data/dashboardData';

export const AnalyticsTab = () => {
    const cardBg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('brand.200', 'brand.700');
    const textColor = useColorModeValue('gray.700', 'gray.300');

    const getStatusColor = (status?: string) => {
        if (!status) return 'green';
        switch (status) {
            case 'upcoming':
                return 'blue';
            case 'missed':
                return 'red';
            default:
                return 'gray';
        }
    };

    return (
        <VStack spacing={8} align="stretch">
            <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
                <CardHeader>
                    <Heading size="md" color="brand.600">Test Performance</Heading>
                </CardHeader>
                <CardBody>
                    <VStack spacing={4} align="stretch">
                        {analyticsData.testPerformance.map((test, index) => (
                            <Box
                                key={index}
                                p={4}
                                borderWidth="1px"
                                borderColor={borderColor}
                                borderRadius="md"
                            >
                                <Grid templateColumns="1fr auto" gap={4} alignItems="center">
                                    <Box>
                                        <Text fontWeight="bold" color="brand.500">{test.name}</Text>
                                        {test.score ? (
                                            <Progress
                                                value={test.score}
                                                max={test.maxScore}
                                                colorScheme="brand"
                                                mt={2}
                                            />
                                        ) : (
                                            <Badge colorScheme={getStatusColor(test.status)}>
                                                {test.status}
                                            </Badge>
                                        )}
                                    </Box>
                                    {test.score && (
                                        <Text fontWeight="bold" color="brand.500">
                                            {test.score}/{test.maxScore}
                                        </Text>
                                    )}
                                </Grid>
                            </Box>
                        ))}
                    </VStack>
                </CardBody>
            </Card>

            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
                    <CardHeader>
                        <Heading size="md" color="brand.600">Progress Overview</Heading>
                    </CardHeader>
                    <CardBody>
                        <VStack spacing={4} align="stretch">
                            <Box>
                                <Text mb={2}>Module Completion</Text>
                                <Progress
                                    value={analyticsData.progressStats.completedModules}
                                    max={analyticsData.progressStats.totalModules}
                                    colorScheme="brand"
                                />
                                <Text mt={2} fontSize="sm" color={textColor}>
                                    {analyticsData.progressStats.completedModules} of{' '}
                                    {analyticsData.progressStats.totalModules} modules completed
                                </Text>
                            </Box>
                        </VStack>
                    </CardBody>
                </Card>

                <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
                    <CardHeader>
                        <Heading size="md" color="brand.600">Time Statistics</Heading>
                    </CardHeader>
                    <CardBody>
                        <VStack spacing={4} align="stretch">
                            <Box>
                                <Text fontWeight="bold">Total Time Spent</Text>
                                <Text fontSize="2xl" color="brand.500">
                                    {analyticsData.timeSpent.totalHours} hours
                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold">Last Access</Text>
                                <Text color={textColor}>
                                    {new Date(analyticsData.timeSpent.lastAccess).toLocaleDateString()}
                                </Text>
                            </Box>
                        </VStack>
                    </CardBody>
                </Card>
            </Grid>
        </VStack>
    );
};