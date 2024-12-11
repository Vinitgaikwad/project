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
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Participant Category</FormLabel>
          <Select {...register('category', { required: true })}>
            <option value="Research Scholar">Research Scholar</option>
            <option value="Academia">Academia</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Affiliation</FormLabel>
          <Input
            {...register('affiliation', { required: true })}
            placeholder="Full name and address of the Affiliation"
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
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>WhatsApp Number</FormLabel>
          <Input
            {...register('whatsappNumber', { required: true })}
            placeholder="Enter your WhatsApp number"
          />
        </FormControl>
        <FormControl>
          <FormLabel>VU Account Number (optional)</FormLabel>
          <Select {...register('vuAccountNumber')}>
            <option value="" disabled selected hidden>Select Account Number</option> {/* Changed duplicate value */}
            <option value="Acc-1">3127636236</option>
            <option value="Acc-2">3179187398</option>
          </Select>
        </FormControl>

        <Text>
          Join our WhatsApp group:{' '}
          <Link href="https://whatsapp.group/fdp" color="blue.500" isExternal>
            Click here
          </Link>
        </Text>

        <Button
          type="submit"
          colorScheme="blue"
          size="lg"
          width="100%"
        >
          Submit Registration
        </Button>
      </VStack>
    </form>
  );
};