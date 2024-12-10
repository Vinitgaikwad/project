import { Box, Container, Grid, useColorModeValue } from '@chakra-ui/react';
import { InfoSection } from './components/InfoSection';
import { AuthTabs } from './components/AuthTabs';
import { ColorModeToggle } from './components/ColorModeToggle';

function App() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box bg={bgColor} minH="100vh" py={8}>
      <ColorModeToggle />
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={8}
          minHeight="90vh"
        >
          <InfoSection />
          <AuthTabs />
        </Grid>
      </Container>
    </Box>
  );
}

export default App;