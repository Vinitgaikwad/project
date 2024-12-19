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
  Alert,
  AlertIcon,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { RegistrationForm } from './RegistrationForm';
import { FirebaseError } from 'firebase/app';

export const AuthTabs: React.FC = () => {
  const toast = useToast();
  const { login } = useAuth();

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('brand.200', 'brand.700');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      setLoading(true);
      await login(email, password);
      toast({
        title: 'Login Successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            setError('Invalid email or password');
            break;
          case 'auth/too-many-requests':
            setError('Too many failed attempts. Please try again later');
            break;
          default:
            setError('Failed to log in');
        }
      }
    } finally {
      setLoading(false);
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
      height="100%"
    >
      <Tabs isFitted variant="soft-rounded" colorScheme="brand">
        <TabList mb="1em">
          <Tab _selected={{ bg: 'brand.500', color: 'white' }}>Login</Tab>
          <Tab _selected={{ bg: 'brand.500', color: 'white' }}>Register</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {error && (
              <Alert status="error" mb={4} borderRadius="md">
                <AlertIcon />
                {error}
              </Alert>
            )}
            <form onSubmit={handleLogin}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isDisabled={loading}
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
                    isDisabled={loading}
                    focusBorderColor="brand.500"
                  />
                </FormControl>
                <Text fontSize="sm" color="gray.500" alignSelf="start">
                  Demo credentials: username: project, password: 123456
                </Text>
                <Button
                  type="submit"
                  colorScheme="brand"
                  width="100%"
                  isLoading={loading}
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