import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Menus from './Menus';
import Sidebar from './Sidebar';
import ChangeLanguages from './ChangeLanguages';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Sidebar />
            <Box
              component="div"
              sx={{
                flexGrow: 1,
              }}
            >
              <Box
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'block' },
                }}
              >
                <Menus />
              </Box>
            </Box>
            <ChangeLanguages />
          </Toolbar>
        </AppBar>
      </Box>
      <Box p={2}>{props.children}</Box>
    </>
  );
};

export default Layout;
