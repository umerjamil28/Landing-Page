import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import TopNavBar from './components/TopNavBar';
import MainNavBar from './components/MainNavBar';
import SecondaryNavBar from './components/SecondaryNavBar';
import MobileDrawer from './components/MobileDrawer';
import HeroSection from './components/HeroSection';
import Tagline from './components/Tagline';
import FeatureBoxes from './components/FeatureBoxes';

// Custom theme with IIGS colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#0a1929',
    },
    secondary: {
      main: '#ff6b45', // Orange color from IIGS logo
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b7c3',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:960px)': {
        fontSize: '3.5rem',
      },
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
});

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        minHeight: '100vh', 
        backgroundImage: `url(/Images/splash.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        fontFamily: 'Poppins, Arial, sans-serif'
      }}>
        <TopNavBar isMobile={isMobile} handleMobileMenuToggle={handleMobileMenuToggle} />
        <MainNavBar isMobile={isMobile} />
        <SecondaryNavBar isMobile={isMobile} />
        <MobileDrawer open={mobileMenuOpen} onClose={handleMobileMenuToggle} />
        <HeroSection />
        <Tagline />
        <FeatureBoxes />
      </Box>
    </ThemeProvider>
  );
}

export default App;