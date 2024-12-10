import { 
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
  Text,
  useColorModeValue,
  Box
} from '@chakra-ui/react';
import { Upload } from 'lucide-react';
import { useRef, useState } from 'react';

interface FileInputProps {
  label: string;
  isRequired?: boolean;
  accept?: string;
  register: any;
  name: string;
}

export const FileInput = ({ label, isRequired = false, accept, register, name }: FileInputProps) => {
  const [fileName, setFileName] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const buttonBg = useColorModeValue('gray.100', 'gray.700');
  const buttonHoverBg = useColorModeValue('gray.200', 'gray.600');

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <FormControl isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          type="file"
          accept={accept}
          {...register(name)}
          ref={inputRef}
          onChange={handleChange}
          display="none"
        />
        <Box
          onClick={handleClick}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          borderColor={borderColor}
          p={2}
          width="100%"
          display="flex"
          alignItems="center"
        >
          <Button
            leftIcon={<Upload size={16} />}
            size="sm"
            bg={buttonBg}
            _hover={{ bg: buttonHoverBg }}
            mr={3}
          >
            Choose File
          </Button>
          <Text fontSize="sm" color="gray.500">
            {fileName || 'No file chosen'}
          </Text>
        </Box>
      </InputGroup>
    </FormControl>
  );
};