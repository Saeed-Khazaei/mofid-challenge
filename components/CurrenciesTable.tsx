import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { Stack, Typography } from '@mui/material';

const rows = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 19976.95,
    market_cap: 382893546207,
    market_cap_rank: 1,
    fully_diluted_valuation: 420039279882,
    total_volume: 29100197007,
    high_24h: 20089,
    low_24h: 19657.12,
    price_change_24h: 190.05,
    price_change_percentage_24h: 0.96051,
    market_cap_change_24h: 4258718872,
    market_cap_change_percentage_24h: 1.12476,
    circulating_supply: 19142887.0,
    total_supply: 21000000.0,
    max_supply: 21000000.0,
    ath: 69045,
    ath_change_percentage: -71.0398,
    ath_date: '2021-11-10T14:24:11.849Z',
    atl: 67.81,
    atl_change_percentage: 29387.97426,
    atl_date: '2013-07-06T00:00:00.000Z',
    roi: null,
    last_updated: '2022-09-06T09:06:53.471Z',
    price_change_percentage_24h_in_currency: 0.960506028812313,
    price_change_percentage_7d_in_currency: -1.6343086176632708,
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image:
      'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    current_price: 1661.3,
    market_cap: 200178433425,
    market_cap_rank: 2,
    fully_diluted_valuation: null,
    total_volume: 16069863438,
    high_24h: 1667.63,
    low_24h: 1560.26,
    price_change_24h: 94.64,
    price_change_percentage_24h: 6.04122,
    market_cap_change_24h: 11719137943,
    market_cap_change_percentage_24h: 6.21839,
    circulating_supply: 120404790.081255,
    total_supply: 120404790.081255,
    max_supply: null,
    ath: 4878.26,
    ath_change_percentage: -65.93486,
    ath_date: '2021-11-10T14:24:19.604Z',
    atl: 0.432979,
    atl_change_percentage: 383703.0979,
    atl_date: '2015-10-20T00:00:00.000Z',
    roi: {
      times: 110.16953942901586,
      currency: 'btc',
      percentage: 11016.953942901586,
    },
    last_updated: '2022-09-06T09:06:34.291Z',
    price_change_percentage_24h_in_currency: 6.041224162758793,
    price_change_percentage_7d_in_currency: 6.823594840280743,
  },
];

const headers = [
  { title: '#', align: 'left' },
  { title: 'COINS', align: 'left' },
  { title: 'PRICES', align: 'right' },
  { title: '24H', align: 'right' },
  { title: '7D', align: 'right' },
  { title: 'MARKET CAP', align: 'right' },
  { title: 'TOTAL VOLUME', align: 'right' },
  { title: 'CIRCULATE SUPPLY', align: 'right' },
];

const CurrenciesTable = () => {
  return (
    <TableContainer component={Paper} sx={{ width: '100%' }}>
      <Table sx={{ minWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((h, index: number) => (
              <TableCell
                key={h.title}
                align={h.align}
                sx={{ width: index == 0 ? 'auto' : 300 }}
              >
                {h.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index: number) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Image
                    src={row.image}
                    layout="fixed"
                    width={16}
                    height={16}
                  />
                  <Stack spacing={0}>
                    <Typography variant="body1" component="p">
                      {row.name}
                    </Typography>
                    <Typography variant="body2" component="span">
                      {row.name}
                    </Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1" component="span">
                  {row.current_price}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1" component="span">
                  {row.price_change_percentage_24h_in_currency}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  variant="body1"
                  component="span"
                  sx={{
                    color:
                      row.price_change_percentage_7d_in_currency > 0
                        ? 'success.main'
                        : 'error.main',
                  }}
                >
                  {row.price_change_percentage_7d_in_currency}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1" component="span">
                  {row.market_cap}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1" component="span">
                  {row.total_volume}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-end"
                  spacing={1}
                >
                  <Typography variant="body1" component="span">
                    {row.circulating_supply}
                  </Typography>
                  <Typography variant="body2" component="span">
                    {row.symbol.toUpperCase()}
                  </Typography>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrenciesTable;
