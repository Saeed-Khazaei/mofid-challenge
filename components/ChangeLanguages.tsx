import React from 'react';

import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const languages = [
  { value: 'fa', title: 'فارسی' },
  { value: 'en', title: 'English' },
];

const ChangeLanguages = () => {
  const router = useRouter();
  let { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="text" sx={{ color: '#fff' }} onClick={handleClick}>
        {t('languages:lan')}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {languages.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <MenuItem key={locale.value} onClick={handleClose}>
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={locale.value}
              >
                <a>{locale.title}</a>
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default ChangeLanguages;
