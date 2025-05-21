import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
// import { KeyboardArrowDown } from '@mui/icons-material';

const navItems = [
  { label: 'IIGS STRATEGY' },
  { label: 'IIGS iPROCURE' },
  { label: 'IIGS iSUPPLY' },
  { label: 'IIGS iFREIGHT' },
  { label: 'IIGS MANAGED SERVICES' }
];

function SecondaryNavBar({ isMobile }) {
  if (isMobile) return null;
  return (
    <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', py: 1 }}>
          {navItems.map((item) => {
            const [first, ...rest] = item.label.split(' ');
            let afterIIGS = rest.join(' ');
            let afterIIGSNode;
            if (['iPROCURE', 'iSUPPLY', 'iFREIGHT'].includes(afterIIGS)) {
              afterIIGSNode = <>
                <span style={{ color: '#F36434', fontWeight: 'bold' }}>i</span>
                <span className="after-iigs" style={{ color: '#506BA4', fontWeight: 'bold', transition: 'color 0.2s' }}>{afterIIGS.slice(1)}</span>
              </>;
            } else {
              afterIIGSNode = <Typography component="span" className="after-iigs" sx={{ mr: 1 }}>{afterIIGS}</Typography>;
            }
            return (
              <Button
                key={item.label}
                sx={{
                  mx: 1,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  '& .after-iigs': {
                    color: '#506BA4',
                    fontWeight: 'bold',
                    transition: 'color 0.2s',
                  },
                  '&:hover .after-iigs, &:active .after-iigs': {
                    color: '#2D53A4',
                  },
                }}
              >
                <Typography component="span" sx={{ color: '#F36434', fontWeight: 'bold', mr: 0.5 }}>
                  {first}
                </Typography>
                {afterIIGSNode}
                <img src="/Images/down.png" alt="down arrow" style={{ width: 9.7, height: 5, verticalAlign: 'middle' }} />
              </Button>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default SecondaryNavBar; 