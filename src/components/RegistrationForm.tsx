import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  useToast,
  Text,
  Link,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { FirebaseError } from 'firebase/app';

export const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    category: '',
    affiliation: '',
    whatsappNumber: '',
    vuAccountNumber: '',
  });
<<<<<<< HEAD

  const toast = useToast();
  const { signup } = useAuth();

=======
  
  const toast = useToast();
  const { signup } = useAuth();

>>>>>>> 8cb4b60e686d32207bce3907277f9b39548184a1
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
<<<<<<< HEAD

=======
    
>>>>>>> 8cb4b60e686d32207bce3907277f9b39548184a1
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
<<<<<<< HEAD

=======
    
>>>>>>> 8cb4b60e686d32207bce3907277f9b39548184a1
    try {
      setLoading(true);
      await signup(formData.email, formData.password);
      // Here you would typically also save the additional user data to your database
<<<<<<< HEAD

=======
      
>>>>>>> 8cb4b60e686d32207bce3907277f9b39548184a1
      toast({
        title: 'Registration Successful',
        description: "You've successfully registered. Please check your email for verification.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case 'auth/email-already-in-use':
            setError('An account with this email already exists');
            break;
          case 'auth/invalid-email':
            setError('Invalid email address');
            break;
          default:
            setError('Failed to create an account');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch">
        {error && (
          <Alert status="error" borderRadius="md">
            <AlertIcon />
            {error}
          </Alert>
        )}
<<<<<<< HEAD

=======
        
>>>>>>> 8cb4b60e686d32207bce3907277f9b39548184a1
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            isDisabled={loading}
<<<<<<< HEAD
            focusBorderColor="brand.500"
=======
>>>>>>> 8cb4b60e686d32207bce3907277f9b39548184a1
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
<<<<<<< HEAD
            focusBorderColor="brand.500"
=======
>>>>>>> 8cb4b60e686d32207bce3907277f9b39548184a1
            isDisabled={loading}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Name (As required on Certificate)</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
<<<<<<< HEAD
            focusBorderColor="brand.500"
=======
>>>>>>> 8cb4b60e686d32207bce3907277f9b39548184a1
            isDisabled={loading}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Participant Category</FormLabel>
          <Select
            name="category"
            value={formData.category}
            onChange={handleChange}
<<<<<<< HEAD
            focusBorderColor="brand.500"
=======
>>>>>>> 8cb4b60e686d32207bce3907277f9b39548184a1
            isDisabled={loading}
          >
            <option value="Research Scholar">Research Scholar</option>
            <option value="Academia">Academia</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Affiliation</FormLabel>
          <Input
            name="affiliation"
            value={formData.affiliation}
            onChange={handleChange}
<<<<<<< HEAD
            focusBorderColor="brand.500"
=======
>>>>>>> 8cb4b60e686d32207bce3907277f9b39548184a1
            placeholder="Full name and address of the Affiliation"
            isDisabled={loading}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>WhatsApp Number</FormLabel>
          <Input
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
<<<<<<< HEAD
            focusBorderColor="brand.500"
=======
>>>>>>> 8cb4b60e686d32207bce3907277f9b39548184a1
            placeholder="Enter your WhatsApp number"
            isDisabled={loading}
          />
        </FormControl>

        <FormControl>
          <FormLabel>VU Account Number (optional)</FormLabel>
<<<<<<< HEAD
          <Input
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            focusBorderColor="brand.500"
            placeholder="Enter your VU Account Number"
            isDisabled={loading}
          />
=======
          <Select
            name="vuAccountNumber"
            value={formData.vuAccountNumber}
            onChange={handleChange}
            isDisabled={loading}
          >
            <option value="" disabled selected hidden>Select Account Number</option>
            <option value="Acc-1">3127636236</option>
            <option value="Acc-2">3179187398</option>
          </Select>
>>>>>>> 8cb4b60e686d32207bce3907277f9b39548184a1
        </FormControl>

        <Text>
          Join our WhatsApp group:{' '}
          <Link href="https://whatsapp.group/fdp" color="blue.500" isExternal>
            Click here
          </Link>
        </Text>

        <Button
          type="submit"
          colorScheme="brand"
          width="100%"
<<<<<<< HEAD
          _hover={{ bg: 'brand.600' }}
=======
>>>>>>> 8cb4b60e686d32207bce3907277f9b39548184a1
          isLoading={loading}
          loadingText="Creating Account..."
        >
          Submit Registration
        </Button>
      </VStack>
    </form>
  );
};