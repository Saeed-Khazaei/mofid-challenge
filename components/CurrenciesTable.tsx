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
import { Currency } from '../models/apiResponses';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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

const arrow = (number: number) => {
  if (number < 0) return <KeyboardArrowDownIcon color="error" />;
  if (number > 0) return <KeyboardArrowUpIcon color="success" />;
  return null;
};

const colorValidation = (number: number) => {
  if (number < 0) return 'error.main';
  if (number > 0) return 'success.main';
  return '';
};

const CurrenciesTable = (props: { data: Currency[] }) => {
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
          {props.data.length > 0
            ? props.data.map((row, index: number) => (
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
                      ${row.current_price.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      justifyContent="flex-end"
                    >
                      {arrow(row.price_change_percentage_24h_in_currency)}
                      <Typography
                        variant="body1"
                        component="span"
                        textAlign="right"
                        sx={{
                          color: colorValidation(
                            row.price_change_percentage_24h_in_currency
                          ),
                        }}
                      >
                        {row.price_change_percentage_24h_in_currency.toFixed(2)}
                        %
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      justifyContent="flex-end"
                    >
                      {arrow(row.price_change_percentage_7d_in_currency)}
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{
                          color: colorValidation(
                            row.price_change_percentage_7d_in_currency
                          ),
                        }}
                      >
                        {row.price_change_percentage_7d_in_currency.toFixed(2)}%
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body1" component="span">
                      ${row.market_cap.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body1" component="span">
                      ${row.total_volume.toLocaleString()}
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
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrenciesTable;
