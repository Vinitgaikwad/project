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
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useBreakpointValue,
    Collapse
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { HomeTab } from './dashboard/HomeTab';
import { AnalyticsTab } from './dashboard/AnalyticsTab';
import { TestDashboard } from './dashboard/TestDashboard';
import { ReportsTab } from './dashboard/ReportsTab';
import { useNavigate } from 'react-router-dom';

interface Props {
    handleLogout: () => Promise<void>;
}

const Dashboard: React.FC<Props> = ({ handleLogout }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarBg = useColorModeValue('brand.50', 'gray.800');
    const mainBg = useColorModeValue('gray.50', 'gray.900');
    const buttonHoverBg = useColorModeValue('brand.100', 'brand.800');
    const tabHoverBg = useColorModeValue('brand.50', 'brand.900');
    const navigate = useNavigate();

    const isMobile = useBreakpointValue({ base: true, lg: false });

    const navigateTo = (path: string) => {
        navigate(path);
        setIsSidebarOpen(false); // Close the sidebar after navigation
    };

    const MobileSidebar = () => (
        <Drawer isOpen={isSidebarOpen} placement="left" onClose={() => setIsSidebarOpen(false)}>
            <DrawerOverlay />
            <DrawerContent bg={sidebarBg}>
                <DrawerCloseButton />
                <DrawerHeader textAlign="center">Menu</DrawerHeader>
                <DrawerBody>
                    <VStack align="stretch" spacing={4}>
                        <Button w="full" variant="ghost" _hover={{ bg: buttonHoverBg }} onClick={() => navigateTo('/profile')}>
                            Profile
                        </Button>
                        <Button w="full" variant="ghost" _hover={{ bg: buttonHoverBg }} onClick={() => navigateTo('/')}>
                            Dashboard
                        </Button>
                        <Button w="full" variant="ghost" _hover={{ bg: buttonHoverBg }} onClick={() => navigateTo('/settings')}>
                            Settings
                        </Button>
                        <Button
                            colorScheme="red"
                            w="full"
                            size="lg"
                            onClick={handleLogout}
                            _hover={{ bg: 'red.600' }}
                            mt={4}
                        >
                            Logout
                        </Button>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );

    const DesktopSidebar = () => (
        <Box
            bg={sidebarBg}
            w={isSidebarOpen ? '240px' : '70px'}
            transition="width 0.4s ease"
            overflow="hidden"
            boxShadow="lg"
            display={{ base: 'none', lg: 'block' }}
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
                        <Button w="full" variant="ghost" _hover={{ bg: buttonHoverBg }} onClick={() => navigateTo('/profile')}>
                            Profile
                        </Button>
                        <Button w="full" variant="ghost" _hover={{ bg: buttonHoverBg }} onClick={() => navigateTo('/dashboard')}>
                            Dashboard
                        </Button>
                        <Button w="full" variant="ghost" _hover={{ bg: buttonHoverBg }} onClick={() => navigateTo('/settings')}>
                            Settings
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
    );

    const MobileHeader = () => (
        <Flex
            position="fixed"
            top="0"
            left="0"
            right="0"
            zIndex="1000"
            bg={mainBg}
            p={2}
            display={{ lg: 'none' }}
            alignItems="center"
            boxShadow="sm"
        >
            <IconButton
                aria-label="Open Menu"
                icon={<HamburgerIcon />}
                onClick={() => setIsSidebarOpen(true)}
                variant="ghost"
                colorScheme="brand"
            />
        </Flex>
    );

    return (
        <Flex h="100vh" bg={mainBg} flexDirection={{ base: 'column', lg: 'row' }}>
            {isMobile && <MobileHeader />}
            {isMobile && <MobileSidebar />}
            <DesktopSidebar />
            <Box
                flex="1"
                p={4}
                pt={{ base: isMobile ? '60px' : 4, lg: 4 }}
            >
                <Tabs isFitted variant="soft-rounded" colorScheme="brand">
                    <TabList>
                        <Tab _hover={{ bg: tabHoverBg }} _selected={{ bg: 'brand.500', color: 'white' }}>
                            Home
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
                            <ReportsTab />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Flex>
    );
};

export default Dashboard;
