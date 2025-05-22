import React from 'react';
import { Drawer, Box, List, ListItem, ListItemText } from '@mui/material';

const drawerItems = [
  { label: 'Overview', hasDropdown: false },
  { label: 'Capabilities', hasDropdown: true },
  { label: 'Industries', hasDropdown: true },
  { label: 'Strategic Partners', hasDropdown: true },
  { label: 'Insights', hasDropdown: true },
  { label: 'Careers', hasDropdown: false },
];

function MobileDrawer({ open, onClose }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          mt: 7, 
          borderRadius: 0,
          height: '100%',
          backgroundColor: 'white',
          width: '100vw', 
          maxWidth: '100vw',
        },
      }}
    >
      <Box sx={{ width: '100vw', height: '100%' }}>
        <List>
          {drawerItems.map((item) => (
            <ListItem button key={item.label} sx={{ px: 2, py: 2, display: 'flex', alignItems: 'center' }}>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ sx: { color: '#525252', fontWeight: 500 } }}
              />
              {item.hasDropdown && (
                <Box component="img" src="/Images/down.png" alt="down arrow" sx={{ width: 9.7, height: 5, ml: 1, alignSelf: 'center' }} />
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default MobileDrawer; 