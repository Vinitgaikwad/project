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
import { useState } from 'react';
import { RegistrationForm } from './RegistrationForm';

interface AuthTabsProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthTabs: React.FC<AuthTabsProps> = ({ setIsAuthenticated }) => {
  const toast = useToast();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('brand.200', 'brand.700');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'project' && password === '123456') {
      setIsAuthenticated(true);
      toast({
        title: 'Login Successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Invalid Credentials',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      bg={bgColor}
      p={8}
      borderRadius="lg"
      shadow="lg"
      width="100%"
      borderColor={borderColor}
      borderWidth="1px"
    >
      <Tabs isFitted variant="soft-rounded" colorScheme="brand">
        <TabList mb="1em">
          <Tab _selected={{ bg: 'brand.500', color: 'white' }}>Login</Tab>
          <Tab _selected={{ bg: 'brand.500', color: 'white' }}>Register</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <form onSubmit={handleLogin}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    focusBorderColor="brand.500"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    focusBorderColor="brand.500"
                  />
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="brand"
                  width="100%"
                  _hover={{ bg: 'brand.600' }}
                >
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