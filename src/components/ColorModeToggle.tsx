import { IconButton, useColorMode } from '@chakra-ui/react';
import { Moon, Sun } from 'lucide-react';

export const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={colorMode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      onClick={toggleColorMode}
      position="fixed"
      top={4}
      right={4}
      rounded="full"
      size="lg"
    />
  );
};