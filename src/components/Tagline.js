import React from 'react';
import { Container, Typography } from '@mui/material';

function Tagline() {
  return (
    <Container maxWidth="xl" sx={{ pl: { xs: 0, md: '80px' } }}>
      <Typography variant="h6" sx={{ mb: 6, fontStyle: 'italic', textAlign: { xs: 'center', md: 'left' } }}>
        Seamless Solutions, Endless Possibilities
      </Typography>
    </Container>
  );
}

export default Tagline; 