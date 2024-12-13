import { Box, Container, Grid, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { InfoSection } from './components/InfoSection';
import { AuthTabs } from './components/AuthTabs';
import { ColorModeToggle } from './components/ColorModeToggle';
import Dashboard from './components/Dashboard';
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
    <Router>
      <Routes>
        {/* Main page (login page) */}
        <Route
          path="/"
          element={
            currentUser ? (
              <Navigate to="/dashboard" replace /> // Redirect to dashboard if logged in
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
                    <AuthTabs />
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
            !currentUser ? (
              <Navigate to="/" replace /> // Redirect to login page if not logged in
            ) : (
              <Dashboard handleLogout={handleLogout} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
