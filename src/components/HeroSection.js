import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';

function HeroSection() {
  return (
    <Container maxWidth="xl" sx={{ mt: 8, mb: 6, position: 'relative' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '50px' }}>
            {/* Vertical Lines Decorative Image */}
            <Box
              component="img"
              src="/Images/Vertical Lines.png"
              alt="Vertical Lines"
              sx={{
                height: 120,
                width: 'auto',
                mt: 2,
                display: { xs: 'none', sm: 'block' }
              }}
            />
            <Box sx={{ maxWidth: 600, width: '100%', textAlign: { xs: 'center', md: 'left' }, mx: { xs: 'auto', md: 0 } }}>
              <Typography variant="h3" component="h1" gutterBottom sx={{ 
                fontWeight: 700, 
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                lineHeight: 1.2,
                textAlign: { xs: 'center', md: 'left' }
              }}>
                IIGS exemplifies its dedication to sustainability through innovative procurement and supply chain practices that boost operational efficiency and drive industry-leading innovation
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, color: '#FFFFFF', fontWeight: 400, fontSize: '20px', textAlign: { xs: 'center', md: 'left' } }}>
                IIGS is committed to delivering high-quality products on time, every time.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  sx={{ 
                    bgcolor: 'white', 
                    color: '#1B5A90',
                    fontWeight: 600,
                    fontSize: '16px',
                    '&:hover': {
                      bgcolor: '#1B5A90',
                      color: 'white',
                    },
                    px: 3,
                    py: 1
                  }}
                >
                  BOOK A MEETING →
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
          <Box 
            component="img"
            src={`Images/banner-image.png`}
            alt="Robot hands holding Earth"
            sx={{
              width: '100%',
              maxWidth: 500,
              display: 'block',
              pr: { xs: 0, md: 6 },
              transform: 'scaleX(-1)'
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HeroSection; 