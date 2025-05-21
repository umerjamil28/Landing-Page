import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useMediaQuery } from '@mui/material';
import { KeyboardArrowDown, Search, Phone, Language, Menu as MenuIcon } from '@mui/icons-material';

function TopNavBar({ isMobile, handleMobileMenuToggle }) {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ bgcolor: '#2D53A4' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" size="small" sx={{ mr: 1 }}>
            <Search />
          </IconButton>
          <IconButton color="inherit" size="small" sx={{ mr: 1 }}>
            <Phone />
          </IconButton>
          <Button 
            color="inherit" 
            startIcon={<Language />} 
            endIcon={<KeyboardArrowDown />}
            size="small"
          >
            EN
          </Button>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isMobile ? (
            <>
              <IconButton color="inherit" size="small" sx={{ mr: 1 }}>
                <Box 
                  component="img" 
                  src='/Images/carbon_chat.png' 
                  alt="Chat" 
                  sx={{ width: 24, height: 24 }}
                />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Box 
                  component="img" 
                  src='/Images/solar_user-broken.png' 
                  alt="User" 
                  sx={{ width: 24, height: 24 }}
                />
              </IconButton>
            </>
          ) : (
            <IconButton 
              color="inherit" 
              edge="end" 
              onClick={handleMobileMenuToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavBar; 