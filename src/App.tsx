import { Box, Container, Grid, useColorModeValue, Button } from '@chakra-ui/react';
import { InfoSection } from './components/InfoSection';
import { AuthTabs } from './components/AuthTabs';
import { ColorModeToggle } from './components/ColorModeToggle';
import { useAuth } from './contexts/AuthContext';

function App() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <Box bg={bgColor} minH="100vh" py={8}>
      <ColorModeToggle />
      {currentUser && (
        <Button
          position="fixed"
          top={4}
          right={20}
          onClick={handleLogout}
        >
          Logout
        </Button>
      )}
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={8}
          minHeight="90vh"
        >
          <InfoSection />
          {!currentUser && <AuthTabs />}
        </Grid>
      </Container>
    </Box>
  );
}

export default App;