import { createTheme } from '@mui/material/styles';

const theme = (direction: string) =>
  createTheme({
    direction: direction && direction == 'rtl' ? 'rtl' : 'ltr',
    breakpoints: {
      values: {
        xs: 0,
        sm: 568,
        md: 834,
        lg: 1020,
        xl: 1440,
      },
    },
    palette: {
      mode: 'light',
      primary: {
        light: '#0077ff22',
        main: '#07f',
        dark: '#512DA8',
        contrastText: '#fff',
      },
      secondary: {
        light: '#FCE4EC',
        main: '#00ffff',
        dark: '#C2185B',
        contrastText: '#fff',
      },
      error: {
        main: '#D9534F',
      },
      success: {
        main: '#5CB85C',
      },
      warning: {
        main: '#F0AD4E',
      },
      info: {
        main: '#56C0E0',
      },
    },
    typography: {
      body1: {
        fontSize: 16,
        fontWeight: 600,
      },
      body2: {
        fontSize: 12,
      },
      fontFamily: ['Roboto', 'Open Sans', 'sans-serif'].join(','),
      fontWeightMedium: 600,
      fontWeightLight: 100,
      fontWeightRegular: 300,
      button: {
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 5,
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            whiteSpace: 'nowrap',
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            background: '#0077ff22',
          },
        },
      },
    },
  });

export default theme;
