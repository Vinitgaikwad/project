import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      position="fixed"
      top={4}
      right={4}
      rounded="full"
      size="lg"
      colorScheme="brand"
      _hover={{ bg: colorMode === 'light' ? 'brand.100' : 'brand.700' }}
    />
  );
};