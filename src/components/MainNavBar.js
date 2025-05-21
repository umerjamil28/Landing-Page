import React from 'react';
import { Box, Button, Container, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

function MainNavBar({ isMobile }) {
  return (
    <Box sx={{ bgcolor: 'transparent' }}>
      <Container maxWidth="xl">
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          py: 2
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box 
              component="img" 
              src={`Images/logo.png`} 
              alt="IIGS Logo" 
              sx={{ height: 50, mr: 2 }}
            />
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                Reshaping
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                Procurement
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                Through Innovation
              </Typography>
            </Box>
          </Box>
          {!isMobile && (
            <Box sx={{ display: 'flex' }}>
              {['Partner', 'Company', 'Managed Services', 'Industries', 'Careers'].map((item) => (
                <Button 
                  key={item}
                  color="inherit"
                  sx={{ mx: 1, display: 'flex', alignItems: 'center' }}
                >
                  {item}
                  <img src="/Images/down.png" alt="down arrow" style={{ width: 9.7, height: 5, marginLeft: 6, verticalAlign: 'middle' }} />
                </Button>
              ))}
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default MainNavBar; 