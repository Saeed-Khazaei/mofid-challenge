import { createTheme } from "@mui/material/styles";

const theme = (direction: string) => createTheme({
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
      main: "#07f",
      dark: '#512DA8',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FCE4EC',
      main: '#00ffff',
      dark: '#C2185B',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Open Sans',
      'sans-serif',
    ].join(','),
    fontWeightMedium: 600,
    fontWeightLight: 100,
    fontWeightRegular: 300,
    button: {
      textTransform: "none"
    }
  },
  shape: {
    borderRadius: 5,
  },
});

export default theme;
