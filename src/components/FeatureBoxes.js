import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';

function FeatureBoxes() {
  return (
    <Container maxWidth="xl" sx={{ mb: 10, pl: { xs: 0, md: '110px' }, pr: { xs: 0, md: '110px' } }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: { xs: 'wrap', md: 'nowrap' }, overflowX: { xs: 'visible', md: 'auto' } }}>
        {/* Box 1 */}
        <Box sx={{
          bgcolor: 'rgba(0,0,0,0.5)',
          p: '20px 13px', 
          width: { xs: '85%', md: 510 },
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'left',
        }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
            Expertly crafted solutions with global reach
          </Typography>
          <Typography paragraph sx={{ color: 'white', mb: 3, textAlign: 'left' }}>
            Our procurement and supply chain processes enhance operations for your organization's success.
          </Typography>
          <Button
            sx={{ textTransform: 'none', pl: 0, color: '#F06230', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
            endIcon={<img src="/Images/Forward.png" alt="forward" style={{ width: 11, height: 11, marginLeft: 1 }} />}
          >
            Let's Co-Create
          </Button>
        </Box>




        {/* Box 2 */}
        <Box sx={{
          bgcolor: 'rgba(0,0,0,0.5)',
          p: '20px 13px', 
          width: { xs: '85%', md: 510 },
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'left',
        }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
            Strategic, collaborative, and driven
          </Typography>
          <Typography paragraph sx={{ color: 'white', mb: 3, textAlign: 'left' }}>
            We leverage innovative strategies and cutting-edge technology to streamline our processes.
          </Typography>
          <Button
            sx={{ color: '#F06230', textTransform: 'none', pl: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
            endIcon={<img src="/Images/Forward.png" alt="forward" style={{ width: 11, height: 11, marginLeft: 1 }} />}
          >
            Business Process Outsourcing
          </Button>
        </Box>



        {/* Box 3 */}
        <Box sx={{
          // bgcolor: '#FFFFFF1A',
          // backdropFilter: 'blur(6px)',
          bgcolor: 'rgba(0,0,0,0.5)',
          p: '20px 13px', 
          width: { xs: '85%', md: 510 },
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'left',
        }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
            Fresh perspective for continuous transformation
          </Typography>
          <Typography paragraph sx={{ color: 'white', mb: 3, textAlign: 'left' }}>
            Xpert teams to develop groundbreaking solutions "Yes, we can do it even better."
          </Typography>
          <Button
            sx={{ color: '#F06230', textTransform: 'none', pl: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
            endIcon={<img src="/Images/Forward.png" alt="forward" style={{ width: 11, height: 11, marginLeft: 1 }} />}
          >
            Direct Procurement
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default FeatureBoxes; 


