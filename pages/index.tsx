import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { Box, Container, Stack, MenuItem } from '@mui/material';

const Home: NextPage = () => {
  let { t } = useTranslation();

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack spacing={2}>
        <Box>{t('common:greeting')}</Box>
        <MenuItem>
          <Link href="/languages">
            <a>تسک 2</a>
          </Link>
        </MenuItem>
      </Stack>
    </Container>
  );
};

export default Home;
