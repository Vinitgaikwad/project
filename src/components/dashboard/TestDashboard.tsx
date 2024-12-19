import {
    Box,
    Grid,
    VStack,
    Text,
    Badge,
    Heading,
    List,
    ListItem,
    useColorModeValue,
    Link,
    Container,
} from '@chakra-ui/react';
import { useState, forwardRef } from 'react';
import { Test } from '../../types/test.ts';
import { testData } from '../../data/testData.ts';
import { motion, MotionProps } from 'framer-motion';

type MotionBoxProps = MotionProps & React.ComponentProps<typeof Box>;

export const MotionBox = motion(
    forwardRef<HTMLDivElement, MotionBoxProps>((props, ref) => (
        <Box ref={ref} {...props} />
    ))
);

const StatusBadge = ({ status }: { status: Test['status'] }) => {
    const colors = {
        completed: 'green',
        upcoming: 'blue',
        missed: 'red',
        incomplete: 'yellow',
    };

    return (
        <Badge colorScheme={colors[status]} fontSize="sm">
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
    );
};

export const TestDashboard = () => {
    const [selectedTest, setSelectedTest] = useState<Test>(testData[0]);
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('brand.200', 'brand.700');
    const hoverBg = useColorModeValue('gray.50', 'gray.700');
    const textColor = useColorModeValue('gray.700', 'gray.300');

    return (
        <Container maxW="container.xl" py={8}>
            <Grid
                templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
                gap={8}
                alignItems="start"
            >
                {/* Left Panel - Test List */}
                <VStack align="stretch" spacing={4}>
                    <Heading size="md" mb={4} color="brand.600">
                        Available Tests
                    </Heading>
                    {testData.map((test, index) => (
                        <MotionBox
                            key={test.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Box
                                p={4}
                                bg={bgColor}
                                borderWidth="1px"
                                borderColor={borderColor}
                                borderRadius="lg"
                                cursor="pointer"
                                onClick={() => setSelectedTest(test)}
                                _hover={{ bg: hoverBg }}
                                transition="all 0.2s"
                                transform={selectedTest.id === test.id ? 'scale(1.02)' : 'scale(1)'}
                            >
                                <Grid
                                    templateColumns={{ base: '1fr', md: '1fr auto' }}
                                    gap={4}
                                    alignItems="center"
                                >
                                    <VStack align="start" spacing={2}>
                                        <Text fontWeight="bold" color={textColor}>
                                            {test.name}
                                        </Text>
                                        <Text fontSize="sm" color={textColor}>
                                            {new Date(test.date).toLocaleDateString()} at{' '}
                                            {new Date(test.date).toLocaleTimeString()}
                                        </Text>
                                    </VStack>
                                    <VStack align="end" spacing={2}>
                                        <StatusBadge status={test.status} />
                                        {test.score !== undefined && (
                                            <Text
                                                fontWeight="bold"
                                                color={
                                                    test.score >= 70 ? 'green.500' : 'red.500'
                                                }
                                            >
                                                Score: {test.score}%
                                            </Text>
                                        )}
                                    </VStack>
                                </Grid>
                            </Box>
                        </MotionBox>
                    ))}
                </VStack>

                {/* Right Panel - Test Details */}
                <MotionBox
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    width={{ base: '100%', lg: 'auto' }}
                >
                    <Box
                        p={6}
                        bg={bgColor}
                        borderWidth="1px"
                        borderColor={borderColor}
                        borderRadius="lg"
                        height="100%"
                    >
                        <VStack align="stretch" spacing={6}>
                            <Heading size="md">{selectedTest.name}</Heading>
                            <Text>{selectedTest.description}</Text>

                            <Box>
                                <Heading size="sm" mb={3}>
                                    Resources
                                </Heading>
                                <List spacing={2}>
                                    {selectedTest.resources.map((resource, index) => (
                                        <ListItem key={index}>
                                            <Link
                                                color="blue.500"
                                                href="#"
                                                _hover={{ textDecoration: 'underline' }}
                                            >
                                                {resource}
                                            </Link>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>

                            <Box>
                                <Text fontWeight="bold" mb={2}>
                                    Test Information
                                </Text>
                                <Text>
                                    Date: {new Date(selectedTest.date).toLocaleDateString()}
                                    <br />
                                    Time: {new Date(selectedTest.date).toLocaleTimeString()}
                                    <br />
                                    Status: <StatusBadge status={selectedTest.status} />
                                    {selectedTest.score !== undefined && (
                                        <>
                                            <br />
                                            Score: {selectedTest.score}%
                                        </>
                                    )}
                                </Text>
                            </Box>
                        </VStack>
                    </Box>
                </MotionBox>
            </Grid>
        </Container>
    );
};
