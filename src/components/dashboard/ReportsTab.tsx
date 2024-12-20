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
import { motion } from 'framer-motion';
import { DownloadIcon } from '@chakra-ui/icons';
import { reportData } from '../../data/dashboardData';

const MotionCard = motion(Card);
const MotionBox = motion(Box);

export const ReportsTab = () => {
    const cardBg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('brand.200', 'brand.700');
    const textColor = useColorModeValue('gray.700', 'gray.300');

    return (
        <VStack spacing={8} align="stretch">
            {/* Certificate Eligibility Card */}
            <MotionCard
                bg={cardBg}
                borderWidth="1px"
                borderColor={borderColor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
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

                        {/* Tests Completion Progress */}
                        <MotionBox
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
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
                        </MotionBox>

                        {/* Average Score Progress */}
                        <MotionBox
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
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
                        </MotionBox>
                    </VStack>
                </CardBody>
            </MotionCard>

            {/* Completed Modules Card */}
            <MotionCard
                bg={cardBg}
                borderWidth="1px"
                borderColor={borderColor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <CardHeader>
                    <Heading size="md" color="brand.600">Completed Modules</Heading>
                </CardHeader>
                <CardBody>
                    <Grid gap={4}>
                        {reportData.completedModules.map((module, index) => (
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
                            </MotionBox>
                        ))}
                    </Grid>
                </CardBody>
            </MotionCard>
        </VStack>
    );
};
