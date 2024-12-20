import React, { useState } from 'react';
import {
    Box,
    Flex,
    IconButton,
    VStack,
    useColorModeValue,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useBreakpointValue,
    Collapse,
    Button,
    FormControl,
    FormLabel,
    Switch,
    Text,
    Select,
    Textarea,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { notificationData } from '../data/settingsData'; // Import your settings data

interface Props {
    handleLogout: () => Promise<void>;
}

const Settings: React.FC<Props> = ({ handleLogout }) => {
    // States for sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // States for issue reporting
    const [issueType, setIssueType] = useState('');
    const [issueDescription, setIssueDescription] = useState('');

    // States for notifications
    const [notifications, setNotifications] = useState(notificationData.notifications);
    const [notificationSettings, setNotificationSettings] = useState(notificationData.settings);

    // Theme colors
    const sidebarBg = useColorModeValue('brand.50', 'gray.800');
    const mainBg = useColorModeValue('gray.50', 'gray.900');
    const buttonHoverBg = useColorModeValue('brand.100', 'brand.800');
    const tabHoverBg = useColorModeValue('brand.50', 'brand.900');

    const isMobile = useBreakpointValue({ base: true, lg: false });
    const navigate = useNavigate();

    // Navigation function
    const navigateTo = (path: string) => {
        navigate(path);
        setIsSidebarOpen(false);
    };

    // Handlers
    const handleSubmitIssue = () => {
        console.log('Issue submitted:', { issueType, issueDescription });
        setIssueType('');
        setIssueDescription('');
    };

    const handleNotificationRead = (id: string) => {
        setNotifications(notifications.map(notification =>
            notification.id === id
                ? { ...notification, isRead: true }
                : notification
        ));
    };

    const handleSettingChange = (setting: 'emailEnabled' | 'pushEnabled') => {
        setNotificationSettings(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
    };

    // Sidebar Components
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

    const MobileSidebar = () => (
        <Drawer isOpen={isSidebarOpen} placement="left" onClose={() => setIsSidebarOpen(false)}>
            <DrawerOverlay />
            <DrawerContent bg={sidebarBg}>
                <DrawerCloseButton />
                <DrawerHeader textAlign="center">Menu</DrawerHeader>
                <DrawerBody>
                    <VStack align="stretch" spacing={4}>
                        <Button w="full" variant="ghost" onClick={() => navigateTo('/profile')}>
                            Profile
                        </Button>
                        <Button w="full" variant="ghost" onClick={() => navigateTo('/dashboard')}>
                            Dashboard
                        </Button>
                        <Button w="full" variant="ghost" onClick={() => navigateTo('/settings')}>
                            Settings
                        </Button>
                        <Button colorScheme="red" w="full" onClick={handleLogout}>
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
                />
                <Collapse in={isSidebarOpen} animateOpacity>
                    <VStack align="stretch" mt={8} spacing={4} px={4}>
                        <Button w="full" variant="ghost" onClick={() => navigateTo('/profile')}>
                            Profile
                        </Button>
                        <Button w="full" variant="ghost" onClick={() => navigateTo('/dashboard')}>
                            Dashboard
                        </Button>
                        <Button w="full" variant="ghost" onClick={() => navigateTo('/settings')}>
                            Settings
                        </Button>
                    </VStack>
                </Collapse>
                {isSidebarOpen && (
                    <Button
                        colorScheme="red"
                        w="90%"
                        mx="5%"
                        mt="auto"
                        mb={4}
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                )}
            </VStack>
        </Box>
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
                        <Tab
                            _hover={{ bg: tabHoverBg }}
                            _selected={{ bg: 'brand.500', color: 'white' }}
                        >
                            Report Issue
                        </Tab>
                        <Tab
                            _hover={{ bg: tabHoverBg }}
                            _selected={{ bg: 'brand.500', color: 'white' }}
                        >
                            Notifications
                            <Badge ml={2} colorScheme="red" borderRadius="full">
                                {notifications.filter(n => !n.isRead).length}
                            </Badge>
                        </Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <VStack spacing={6} align="stretch">
                                <FormControl isRequired>
                                    <FormLabel>Issue Type</FormLabel>
                                    <Select
                                        placeholder="Select issue type"
                                        value={issueType}
                                        onChange={(e) => setIssueType(e.target.value)}
                                    >
                                        <option value="bug">Bug Report</option>
                                        <option value="assessment">Test Assessment Issue</option>
                                        <option value="content">Content Error</option>
                                        <option value="feature">Feature Request</option>
                                        <option value="other">Other</option>
                                    </Select>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Description</FormLabel>
                                    <Textarea
                                        placeholder="Please describe the issue in detail..."
                                        value={issueDescription}
                                        onChange={(e) => setIssueDescription(e.target.value)}
                                        minHeight="200px"
                                    />
                                </FormControl>
                                <Button
                                    colorScheme="brand"
                                    onClick={handleSubmitIssue}
                                    isDisabled={!issueType || !issueDescription}
                                >
                                    Submit Issue
                                </Button>
                            </VStack>
                        </TabPanel>

                        <TabPanel>
                            <VStack spacing={6} align="stretch">
                                <List spacing={3}>
                                    {notifications.map(notification => (
                                        <ListItem
                                            key={notification.id}
                                            p={3}
                                            bg={notification.isRead ? "gray.50" : "gray.100"}
                                            borderRadius="md"
                                            onClick={() => handleNotificationRead(notification.id)}
                                            cursor="pointer"
                                            transition="all 0.2s"
                                            _hover={{ bg: "gray.200" }}
                                        >
                                            <Text fontWeight="bold">{notification.title}</Text>
                                            <Text fontSize="sm">{notification.message}</Text>
                                        </ListItem>
                                    ))}
                                </List>
                                <FormControl display='flex' alignItems='center'>
                                    <FormLabel mb='0'>Email Notifications</FormLabel>
                                    <Switch
                                        colorScheme='brand'
                                        isChecked={notificationSettings.emailEnabled}
                                        onChange={() => handleSettingChange('emailEnabled')}
                                    />
                                </FormControl>
                                <FormControl display='flex' alignItems='center'>
                                    <FormLabel mb='0'>Push Notifications</FormLabel>
                                    <Switch
                                        colorScheme='brand'
                                        isChecked={notificationSettings.pushEnabled}
                                        onChange={() => handleSettingChange('pushEnabled')}
                                    />
                                </FormControl>
                            </VStack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Flex>
    );
};

export default Settings;