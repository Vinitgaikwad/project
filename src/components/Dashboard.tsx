import React, { useState } from 'react';
import { TestDashboard } from "./TestDashboard";
import {
    Box,
    Flex,
    IconButton,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Button,
    VStack,
    useColorModeValue,
    Text,
    Collapse,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
interface DashboardProps {
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboard: React.FC<DashboardProps> = ({ setIsAuthenticated }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const sidebarBg = useColorModeValue('brand.50', 'gray.800');
    const mainBg = useColorModeValue('gray.50', 'gray.900');
    const buttonHoverBg = useColorModeValue('brand.100', 'brand.800');
    const tabHoverBg = useColorModeValue('brand.50', 'brand.900');

    return (
        <Flex h="100vh" bg={mainBg}>
            {/* Sidebar */}
            <Box
                bg={sidebarBg}
                w={isSidebarOpen ? '240px' : '70px'}
                transition="width 0.4s ease"
                overflow="hidden"
                boxShadow="lg"
            >
                <VStack align="stretch" h="100%">
                    <IconButton
                        aria-label="Toggle Sidebar"
                        icon={isSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
                        onClick={toggleSidebar}
                        mt={4}
                        mx={4}
                        size="lg"
                        colorScheme="brand"
                        variant="ghost"
                        _hover={{ bg: buttonHoverBg }}
                    />
                    <Collapse in={isSidebarOpen} animateOpacity>
                        <VStack align="stretch" mt={8} spacing={4} px={4}>
                            <Button w="full" variant="ghost" _hover={{ bg: buttonHoverBg }}>
                                Dashboard
                            </Button>
                            <Button w="full" variant="ghost" _hover={{ bg: buttonHoverBg }}>
                                Settings
                            </Button>
                            <Button w="full" variant="ghost" _hover={{ bg: buttonHoverBg }}>
                                Profile
                            </Button>
                        </VStack>
                    </Collapse>
                    {isSidebarOpen && (
                        <Flex mt="auto" mb={4} px={4}>
                            <Button
                                colorScheme="red"
                                w="full"
                                size="lg"
                                _hover={{ bg: 'red.600' }}
                                boxShadow="md"
                                onClick={() => { setIsAuthenticated(false) }}
                            >
                                Logout
                            </Button>
                        </Flex>
                    )}
                </VStack>
            </Box>

            {/* Main Content */}
            <Box flex="1" p={4}>
                <Tabs
                    isFitted
                    variant="soft-rounded"
                    colorScheme="brand"
                    borderRadius="md"
                    boxShadow="lg"
                >
                    <TabList>
                        <Tab
                            _hover={{ bg: tabHoverBg }}
                            _selected={{ bg: 'brand.500', color: 'white' }}
                        >
                            Home
                        </Tab>
                        <Tab
                            _hover={{ bg: tabHoverBg }}
                            _selected={{ bg: 'brand.500', color: 'white' }}
                        >
                            Analytics
                        </Tab>
                        <Tab
                            _hover={{ bg: tabHoverBg }}
                            _selected={{ bg: 'brand.500', color: 'white' }}
                        >
                            Tests
                        </Tab>
                        <Tab
                            _hover={{ bg: tabHoverBg }}
                            _selected={{ bg: 'brand.500', color: 'white' }}
                        >
                            Reports
                        </Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Text fontSize="lg">Welcome to the Home Tab!</Text>
                        </TabPanel>
                        <TabPanel>
                            <Text fontSize="lg">Analytics Overview</Text>
                        </TabPanel>
                        <TabPanel>
                            <TestDashboard />
                        </TabPanel>
                        <TabPanel>
                            <Text fontSize="lg">Reports Section</Text>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Flex>
    );
};

export default Dashboard;