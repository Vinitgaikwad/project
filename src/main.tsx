import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from './theme';
import App from './App';
<<<<<<< HEAD
=======
import { AuthProvider } from './contexts/AuthContext';
>>>>>>> vtong/main

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
<<<<<<< HEAD
      <App />
=======
      <AuthProvider>
        <App />
      </AuthProvider>
>>>>>>> vtong/main
    </ChakraProvider>
  </StrictMode>
);