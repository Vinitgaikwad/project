import React, { useState } from 'react';
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
    Collapse
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { HomeTab } from './dashboard/HomeTab';
import { AnalyticsTab } from './dashboard/AnalyticsTab';
import { TestDashboard } from './dashboard/TestDashboard';
import { ReportsTab } from './dashboard/ReportsTab';

interface Props {
    handleLogout: () => Promise<void>;
}

const Dashboard: React.FC<Props> = ({ handleLogout }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarBg = useColorModeValue('brand.50', 'gray.800');
    const mainBg = useColorModeValue('gray.50', 'gray.900');
    const buttonHoverBg = useColorModeValue('brand.100', 'brand.800');
    const tabHoverBg = useColorModeValue('brand.50', 'brand.900');

    return (
        <Flex h="100vh" bg={mainBg}>
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
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
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
                                onClick={handleLogout}
                                _hover={{ bg: 'red.600' }}
                                boxShadow="md"
                            >
                                Logout
                            </Button>
                        </Flex>
                    )}
                </VStack>
            </Box>

            <Box flex="1" p={4}>
                <Tabs isFitted variant="soft-rounded" colorScheme="brand">
                    <TabList>
                        <Tab _hover={{ bg: tabHoverBg }} _selected={{ bg: 'brand.500', color: 'white' }}>
                            Home
                        </Tab>
                        <Tab _hover={{ bg: tabHoverBg }} _selected={{ bg: 'brand.500', color: 'white' }}>
                            Analytics
                        </Tab>
                        <Tab _hover={{ bg: tabHoverBg }} _selected={{ bg: 'brand.500', color: 'white' }}>
                            Tests
                        </Tab>
                        <Tab _hover={{ bg: tabHoverBg }} _selected={{ bg: 'brand.500', color: 'white' }}>
                            Reports
                        </Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <HomeTab />
                        </TabPanel>
                        <TabPanel>
                            <AnalyticsTab />
                        </TabPanel>
                        <TabPanel>
                            <TestDashboard />
                        </TabPanel>
                        <TabPanel>
                            <ReportsTab />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Flex>
    );
};

export default Dashboard;