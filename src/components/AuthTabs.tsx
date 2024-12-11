import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import { RegistrationForm } from './RegistrationForm';

export const AuthTabs = () => {
  const toast = useToast();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Login Successful',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box bg={bgColor} p={8} borderRadius="lg" shadow="lg" width="100%" borderColor={borderColor} borderWidth="1px">
      <Tabs isFitted variant="soft-rounded" colorScheme="blue">
        <TabList mb="1em">
          <Tab>Login</Tab>
          <Tab>Register</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <form onSubmit={handleLogin}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="Enter your email" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="Enter your password" />
                </FormControl>
                <Button type="submit" colorScheme="blue" width="100%">
                  Login
                </Button>
              </VStack>
            </form>
          </TabPanel>
          <TabPanel>
            <RegistrationForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};