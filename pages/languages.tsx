import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useTheme } from '@mui/material';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Layout from '../components/Layout';

const languages: NextPage = () => {
  const router = useRouter();
  let { t } = useTranslation();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales?.filter((locale) => locale !== activeLocale);
  const theme = useTheme();
  return (
    <Layout>
      <main
        style={{
          width: '100%',
          background: theme.direction == 'ltr' ? '#0f0' : '#0ff',
        }}
      >
        <h1>{t('common:greeting')}</h1>
        <h3>Locale: {activeLocale}</h3>
        <h1> {t('languages:title')}</h1>
      </main>
      <Box sx={{ width: '100%' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              Menu
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel size="small" htmlFor="outlined-adornment-weight">
                {t('product:title')}
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-weight"
                value=""
                onChange={() => {}}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
                label={t('product:title')}
                size="small"
              />
              <FormHelperText id="outlined-weight-helper-text">
                123
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={9}>
            <Button variant="contained" color="primary">
              Hi
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default languages;
