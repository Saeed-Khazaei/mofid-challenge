import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';

import Menus from './Menus';
import { useTheme } from '@mui/material/styles';

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleDrawer = () => {
    setOpenSidebar(!openSidebar);
  };

  const theme = useTheme();

  return (
    <>
      <Drawer
        anchor={theme.direction == 'ltr' ? 'right' : 'left'}
        open={openSidebar}
        onClose={(_) => toggleDrawer()}
        sx={{ width: '240px' }}
      >
        <Box
          component="div"
          sx={{
            width: '240px',
          }}
        >
          <Menus />
        </Box>
      </Drawer>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
        onClick={toggleDrawer}
      >
        ☰
      </IconButton>
    </>
  );
};

export default Sidebar;
