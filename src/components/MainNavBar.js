import React, { useState } from 'react';
import { Box, Button, Container, Typography, IconButton, Popper, Paper, ClickAwayListener, Grid } from '@mui/material';
import { Menu as MenuIcon, ArrowForwardIos } from '@mui/icons-material';

const mainNavItems = ['Partner', 'Company', 'Managed Services', 'Industries', 'Careers'];

// Example menu items for the mega menu (can be customized per nav item)
const megaMenuItems = [
  [
    { label: 'Overview' },
    { label: 'watsonx' },
    { label: 'Agents' }
  ],
  [
    { label: 'Granite models' },
    { label: 'Consulting' },
    { label: 'Research' }
  ],
  [
    { label: 'Ethics and governance' },
    { label: '' },
    { label: '' }
  ]
];

function MainNavBar({ isMobile }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const handleMenuOpen = (event, idx) => {
    setAnchorEl(event.currentTarget);
    setOpenIndex(idx);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenIndex(null);
  };

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
              {mainNavItems.map((item, idx) => (
                <React.Fragment key={item}>
                  <Button
                    color="inherit"
                    sx={{ mx: 1, display: 'flex', alignItems: 'center', fontSize: '1.1rem', fontWeight: 500 }}
                    onClick={(e) => handleMenuOpen(e, idx)}
                  >
                    {item}
                    <img src="/Images/down.png" alt="down arrow" style={{ width: 9.7, height: 5, marginLeft: 6, verticalAlign: 'middle' }} />
                  </Button>
                  <Popper
                    open={openIndex === idx}
                    anchorEl={anchorEl}
                    placement="bottom-start"
                    style={{ zIndex: 1300, width: '100vw', left: 0 }}
                    modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}
                  >
                    <ClickAwayListener onClickAway={handleMenuClose}>
                      <Paper elevation={3} sx={{width: '100vw', maxWidth: '100vw', borderRadius: 0, mt: 2.5, px: 8, py: 4, boxSizing: 'border-box', backgroundColor: '#2D53A4' }}>
                        <Grid
                          container
                          columnSpacing="256px"
                          rowSpacing={8}
                          sx={{ px: 0 }}
                        >
                          {megaMenuItems.flat().map((menu, idx) =>
                            menu.label ? (
                              <Grid
                                item
                                xs="auto"
                                key={idx}
                                sx={
                                  menu.label === 'Consulting'
                                    ? { ml: '-51px' }
                                    : menu.label === 'Research'
                                      ? { ml: '-22px' }
                                      : {}
                                }
                              >
                                <Box
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '1.35rem',
                                    fontWeight: 400,
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    transition: 'color 0.2s',
                                    '&:hover': { color: '#0f62fe' },
                                  }}
                                >
                                  <Typography sx={{ fontSize: '1.18rem', fontWeight: 400, flex: 1 }}>
                                    {menu.label}
                                  </Typography>
                                  <ArrowForwardIos sx={{ fontSize: '1.1rem', ml: 1 }} />
                                </Box>
                              </Grid>
                            ) : (
                              <Grid item xs="auto" key={idx}></Grid>
                            )
                          )}
                        </Grid>

                      </Paper>
                    </ClickAwayListener>
                  </Popper>
                </React.Fragment>
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