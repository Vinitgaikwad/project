import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Grid,
    Heading,
    Progress,
    Text,
    VStack,
    useColorModeValue,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { reportData } from '../../data/dashboardData';

export const ReportsTab = () => {
    const cardBg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('brand.200', 'brand.700');
    const textColor = useColorModeValue('gray.700', 'gray.300');

    return (
        <VStack spacing={8} align="stretch">
            <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
                <CardHeader>
                    <Heading size="md" color="brand.600">Certificate Eligibility</Heading>
                </CardHeader>
                <CardBody>
                    <VStack spacing={6} align="stretch">
                        <Alert
                            status={reportData.certificateStatus.isEligible ? 'success' : 'info'}
                            borderRadius="md"
                        >
                            <AlertIcon />
                            {reportData.certificateStatus.isEligible
                                ? 'Congratulations! You are eligible for the certificate.'
                                : 'Complete all required tests to become eligible for the certificate.'}
                        </Alert>

                        <Box>
                            <Text mb={2}>Tests Completion</Text>
                            <Progress
                                value={reportData.certificateStatus.completedTests}
                                max={reportData.certificateStatus.requiredTests}
                                colorScheme="brand"
                            />
                            <Text mt={2} fontSize="sm" color={textColor}>
                                {reportData.certificateStatus.completedTests} of{' '}
                                {reportData.certificateStatus.requiredTests} tests completed
                            </Text>
                        </Box>

                        <Box>
                            <Text mb={2}>Average Score</Text>
                            <Progress
                                value={reportData.certificateStatus.currentAverageScore}
                                max={100}
                                colorScheme="brand"
                            />
                            <Text mt={2} fontSize="sm" color={textColor}>
                                Current: {reportData.certificateStatus.currentAverageScore}% (Minimum required:{' '}
                                {reportData.certificateStatus.minimumScore}%)
                            </Text>
                        </Box>
                    </VStack>
                </CardBody>
            </Card>

            <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
                <CardHeader>
                    <Heading size="md" color="brand.600">Completed Modules</Heading>
                </CardHeader>
                <CardBody>
                    <Grid gap={4}>
                        {reportData.completedModules.map((module, index) => (
                            <Box
                                key={index}
                                p={4}
                                borderWidth="1px"
                                borderColor={borderColor}
                                borderRadius="md"
                            >
                                <Grid templateColumns="1fr auto" gap={4} alignItems="center">
                                    <Box>
                                        <Text fontWeight="bold" color="brand.500">{module.name}</Text>
                                        <Text fontSize="sm" color={textColor}>
                                            Completed on: {new Date(module.completionDate).toLocaleDateString()}
                                        </Text>
                                        <Text fontSize="sm" color={textColor}>
                                            Score: {module.score}%
                                        </Text>
                                    </Box>
                                    {module.certificate && (
                                        <Button
                                            leftIcon={<DownloadIcon />}
                                            colorScheme="brand"
                                            size="sm"
                                            onClick={() => window.open(module.certificate, '_blank')}
                                        >
                                            Certificate
                                        </Button>
                                    )}
                                </Grid>
                            </Box>
                        ))}
                    </Grid>
                </CardBody>
            </Card>
        </VStack>
    );
};