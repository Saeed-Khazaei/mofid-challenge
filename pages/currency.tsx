import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import Currencies from '../components/Currencies';
import CurrenciesTable from '../components/CurrenciesTable';
import Pagination from '@mui/material/Pagination';
// https://api.coingecko.com/api/v3/simple/supported_vs_currencies
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&page=1&per_page=20&price_change_percentage=24h,7d

const currency = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        marginTop: 3,
      }}
    >
      <Stack spacing={2}>
        <Currencies />
        <CurrenciesTable />
        <Pagination count={10} page={5} />
      </Stack>
    </Container>
  );
};

export default currency;
