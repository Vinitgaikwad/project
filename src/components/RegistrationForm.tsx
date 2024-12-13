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
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import type { RegistrationFormData } from '../types';

export const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>();
  const toast = useToast();

  const onSubmit = (data: RegistrationFormData) => {
    console.log(data);
    toast({
      title: 'Registration Successful',
      description: "You've successfully registered for the FDP. Please check your email for further instructions.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel>Name (As required on Certificate)</FormLabel>
          <Input
            {...register('name', { required: true })}
            placeholder="Enter your full name"
            focusBorderColor="brand.500"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Participant Category</FormLabel>
          <Select
            {...register('category', { required: true })}
            defaultValue=""
            focusBorderColor="brand.500"
          >
            <option value="" disabled>Select Category</option>
            <option value="Research Scholar">Research Scholar</option>
            <option value="Academia">Academia</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Affiliation</FormLabel>
          <Input
            {...register('affiliation', { required: true })}
            placeholder="Full name and address of the Affiliation"
            focusBorderColor="brand.500"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            type="email"
            placeholder="Enter your email"
            focusBorderColor="brand.500"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>WhatsApp Number</FormLabel>
          <Input
            {...register('whatsappNumber', { required: true })}
            placeholder="Enter your WhatsApp number"
            focusBorderColor="brand.500"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Account Number</FormLabel>
          <Input
            {...register('vuAccountNumber')}
            placeholder="Enter your WhatsApp number"
            focusBorderColor="brand.500"
          />
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
          _hover={{ bg: 'brand.600' }}
        >
          Submit Registration
        </Button>
      </VStack>
    </form>
  );
};