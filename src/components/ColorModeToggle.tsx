import { IconButton, useColorMode } from '@chakra-ui/react';
<<<<<<< HEAD
import { Moon, Sun } from 'lucide-react';

export const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={colorMode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
=======
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
>>>>>>> vtong/main
      onClick={toggleColorMode}
      position="fixed"
      top={4}
      right={4}
      rounded="full"
      size="lg"
<<<<<<< HEAD
=======
      colorScheme="brand"
      _hover={{ bg: colorMode === 'light' ? 'brand.100' : 'brand.700' }}
>>>>>>> vtong/main
    />
  );
};