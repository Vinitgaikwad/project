import { Box, Container, Grid, useColorModeValue } from '@chakra-ui/react';
<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { InfoSection } from './components/InfoSection';
import { AuthTabs } from './components/AuthTabs';
import { ColorModeToggle } from './components/ColorModeToggle';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile'; // Import the Profile component
import { useAuth } from './contexts/AuthContext';
import Settings from "./components/Settings";

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
              <Navigate to="/profile" replace /> // Redirect to dashboard if logged in
            ) : (
              <Box bg={bgColor} minH="100vh" py={8} display="flex" flexDirection="column">
                <ColorModeToggle />
                <Container
                  maxW="container.xl"
                  flex="1"
                  display="flex"
                  flexDirection="column"
                >
                  <Grid
                    templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
                    gap={8}
                    flex="1"
                    templateAreas={{
                      base: `"auth"
                             "info"`,
                      lg: `"info auth"`
                    }}
                  >
                    <Box
                      gridArea="info"
                      display="flex"
                      flexDirection="column"
                    >
                      <Box flex="1">
                        <InfoSection />
                      </Box>
                    </Box>
                    <Box
                      gridArea="auth"
                      display="flex"
                      flexDirection="column"
                    >
                      <Box flex="1">
                        <AuthTabs />
                      </Box>
                    </Box>
                  </Grid>
                </Container>
              </Box>
            )
          }
        />

        {/* Profile page */}
        <Route
          path="/profile"
          element={
            !currentUser ? (
              <Navigate to="/" replace /> // Redirect to login page if not logged in
            ) : (
              <Profile handleLogout={handleLogout} /> // Render the Profile component
            )
          }
        />
        {/* Dashboard page */}
        <Route
          path="/settings"
          element={
            !currentUser ? (
              <Navigate to="/" replace />
            ) : (
              <Settings handleLogout={handleLogout} />
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
>>>>>>> vtong/main
