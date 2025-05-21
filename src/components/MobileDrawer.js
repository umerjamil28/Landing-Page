import React from 'react';
import { Drawer, Box, List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

function MobileDrawer({ open, onClose }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box sx={{ width: 250, bgcolor: '#0a1929', color: 'white', height: '100%' }}>
        <List>
          {['Partner', 'Company', 'Managed Services', 'Industries', 'Careers'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
          {['STRATEGY', 'IPROCURE', 'ISUPPLY', 'IFREIGHT', 'MANAGED SERVICES'].map((text) => (
            <ListItem button key={text}>
              <ListItemText 
                primary={
                  <Typography>
                    <Typography component="span" sx={{ color: '#ff6b45' }}>IIGS</Typography> {text}
                  </Typography>
                } 
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default MobileDrawer; 