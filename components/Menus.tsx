import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

const Menus = () => {
  let { t } = useTranslation();

  return (
    <Box
      component="div"
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
      }}
    >
      <MenuItem>
        <Link href="/">
          <a>{t('languages:home')}</a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/languages">
          <a> {t('languages:events')}</a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/languages">
          <a>{t('languages:about_us')}</a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/languages">
          <a>{t('languages:contact_us')}</a>
        </Link>
      </MenuItem>
    </Box>
  );
};

export default Menus;
