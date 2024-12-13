import { Box, Container, Grid, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { InfoSection } from './components/InfoSection';
import { AuthTabs } from './components/AuthTabs';
import { ColorModeToggle } from './components/ColorModeToggle';
import Dashboard from './components/Dashboard';

function App() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Main page */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Box bg={bgColor} minH="100vh" py={8}>
                <ColorModeToggle />
                <Container maxW="container.xl">
                  <Grid
                    templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
                    gap={8}
                    minHeight="90vh"
                  >
                    <InfoSection />
                    <AuthTabs setIsAuthenticated={setIsAuthenticated} />
                  </Grid>
                </Container>
              </Box>
            )
          }
        />

        {/* Dashboard page */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
