import React, { useState } from 'react';
import { Box, Button, Container, Typography, Popper, Paper, ClickAwayListener, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

const navItems = [
  { label: 'IIGS iSTRATEGY' },
  { label: 'IIGS iPROCURE' },
  { label: 'IIGS iSUPPLY' },
  { label: 'IIGS iFREIGHT' },
  { label: 'IIGS MANAGED SERVICES' }
];

function SecondaryNavBar() {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  // Desktop handlers
  const handleMenuOpen = (event, idx) => {
    setAnchorEl(event.currentTarget);
    setOpenIndex(idx);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenIndex(null);
  };

  // Mobile handlers
  const handleMobileMenuOpen = (event) => {
    if (mobileMenuAnchor) {
      setMobileMenuAnchor(null);
    } else {
      setMobileMenuAnchor(event.currentTarget);
    }
  };
  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  if (isMobile) {
    return (
      <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', py: 1 }}>
            <Button
              onClick={handleMobileMenuOpen}
              sx={{
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
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
              endIcon={<KeyboardArrowDown />}
            >
              <Typography component="span" sx={{ color: '#F36434', fontWeight: 'bold', mr: 0.5 }}>IIGS</Typography>
              <span style={{ color: '#F36434', fontWeight: 'bold' }}>i</span>
              <span className="after-iigs" style={{ color: '#506BA4', fontWeight: 'bold', transition: 'color 0.2s', marginLeft: 2 }}>STRATEGY</span>
            </Button>
          </Box>
          {/* Full-width dropdown menu, only appears when IIGS iSTRATEGY is clicked */}
          <Popper
            open={Boolean(mobileMenuAnchor)}
            anchorEl={mobileMenuAnchor}
            placement="bottom-start"
            style={{ zIndex: 1300, width: '100%' }}
            modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}
          >
            <ClickAwayListener onClickAway={handleMobileMenuClose}>
              <Box sx={{ width: '100vw', maxWidth: '100vw', borderRadius: 0, p: 0, m: 0, bgcolor: 'rgba(10,25,41,0.98)', color: 'white', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  {navItems.slice(1).map((item) => {
                    const [first, ...rest] = item.label.split(' ');
                    let afterIIGS = rest.join(' ');
                    let afterIIGSNode;
                    if (["iPROCURE", "iSUPPLY", "iFREIGHT", "iSTRATEGY"].includes(afterIIGS)) {
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
                        onClick={handleMobileMenuClose}
                        sx={{
                          justifyContent: 'flex-start',
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '1rem',
                          textTransform: 'none',
                          px: 2,
                          py: 1.5,
                          borderBottom: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: 0,
                          background: 'none',
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
                        <Typography component="span" sx={{ color: '#F36434', fontWeight: 'bold', mr: 0.5 }}>{first}</Typography>
                        {afterIIGSNode}
                      </Button>
                    );
                  })}
                </Box>
              </Box>
            </ClickAwayListener>
          </Popper>
        </Container>
      </Box>
    );
  }

  // Desktop version (unchanged)
  return (
    <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', py: 1 }}>
          {navItems.map((item, idx) => {
            const [first, ...rest] = item.label.split(' ');
            let afterIIGS = rest.join(' ');
            let afterIIGSNode;
            if (["iPROCURE", "iSUPPLY", "iFREIGHT"].includes(afterIIGS)) {
              afterIIGSNode = <>
                <span style={{ color: '#F36434', fontWeight: 'bold' }}>i</span>
                <span className="after-iigs" style={{ color: '#506BA4', fontWeight: 'bold', transition: 'color 0.2s' }}>{afterIIGS.slice(1)}</span>
              </>;
            } else {
              afterIIGSNode = <Typography component="span" className="after-iigs" sx={{ mr: 1 }}>{afterIIGS}</Typography>;
            }
            return (
              <React.Fragment key={item.label}>
                <Button
                  onClick={(e) => handleMenuOpen(e, idx)}
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
                <Popper open={openIndex === idx} anchorEl={anchorEl} placement="bottom-start" style={{ zIndex: 1300, minWidth: 500, marginTop: 8 }}>
                  <ClickAwayListener onClickAway={handleMenuClose}>
                    <Paper elevation={3} sx={{ ml: 1, mt: 1, p: 2.5, minWidth: 500, maxWidth: 550, borderRadius: 0 }}>
                      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'flex-start', maxHeight: 300, overflowY: 'auto' }}>
                        {/* Services Column */}
                        <Box sx={{ minWidth: 180 }}>
                          <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 600, color: 'black', fontSize: '1.05rem' }}>Services</Typography>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            <Typography sx={{ color: '#525252', fontSize: '0.90rem', py: 0.2 }}>Application services</Typography>
                            <Typography sx={{ color: '#525252', fontSize: '0.90rem', py: 0.2 }}>Artificial intelligence</Typography>
                            <Typography sx={{ color: '#525252', fontSize: '0.90rem', py: 0.2 }}>Automation</Typography>
                            <Typography sx={{ color: '#525252', fontSize: '0.90rem', py: 0.2 }}>Business strategy</Typography>
                            <Typography sx={{ color: '#525252', fontSize: '0.90rem', py: 0.2 }}>Cloud</Typography>
                            <Typography sx={{ color: '#525252', fontSize: '0.90rem', py: 0.2 }}>Customer experience</Typography>
                            <Typography sx={{ color: '#525252', fontSize: '0.90rem', py: 0.2 }}>Cybersecurity</Typography>
                            <Typography sx={{ color: '#525252', fontSize: '0.90rem', py: 0.2 }}>Finance</Typography>
                            <Typography sx={{ color: '#525252', fontSize: '0.90rem', py: 0.2 }}>HR and talent</Typography>
                            <Typography sx={{ color: '#525252', fontSize: '0.90rem', py: 0.2 }}>Marketing</Typography>
                            <Typography sx={{ color: '#525252', fontSize: '0.90rem', py: 0.2 }}>Supply chain</Typography>
                            <Typography sx={{ color: '#525252', fontSize: '0.90rem', py: 0.2 }}>Sustainability</Typography>
                          </Box>
                        </Box>
                        {/* Signature Experiences Column */}
                        <Box sx={{ minWidth: 220, borderLeft: '1px solid #eee', pl: 3 }}>
                          <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 600, color: 'black', fontSize: '1.05rem' }}>Signature Experiences</Typography>
                          <Box sx={{ mb: 1.2 }}>
                            <Typography sx={{ fontWeight: 'bold', color: '#525252', fontSize: '0.85rem' }}>Consulting Advantage</Typography>
                            <Typography variant="body2" sx={{ color: '#525252', fontSize: '0.85rem' }}>First-of-its-kind AI-powered platform to supercharge client delivery faster, at scale.</Typography>
                          </Box>
                          <Box sx={{ mb: 1.2 }}>
                            <Typography sx={{ fontWeight: 'bold', color: '#525252', fontSize: '0.85rem' }}>Garage</Typography>
                            <Typography variant="body2" sx={{ color: '#525252', fontSize: '0.85rem' }}>Collaborative engagement model for accelerating AI and digital transformation.</Typography>
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 'bold', color: '#525252', fontSize: '0.85rem' }}>X-Force</Typography>
                            <Typography variant="body2" sx={{ color: '#525252', fontSize: '0.85rem' }}>Build a comprehensive, integrated security program to protect your organization from global threats.</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </ClickAwayListener>
                </Popper>
              </React.Fragment>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default SecondaryNavBar; 