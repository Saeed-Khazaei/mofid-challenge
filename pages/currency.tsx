import React, { useEffect, useState } from 'react';
import { Box, Container, Stack, CircularProgress } from '@mui/material';
import Currencies from '../components/Currencies';
import CurrenciesTable from '../components/CurrenciesTable';
import Pagination from '@mui/material/Pagination';
import currencyApi from '../services/currencyApi';
import { Currency } from '../models/apiResponses';

const currency = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoding] = useState(false);
  const [currenciesList, setCurrenciesList] = useState<string[]>([]);
  const [currenciesData, setCurrenciesData] = useState<Currency[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const fetchCurrenciesList = async () => {
    try {
      const response = await currencyApi.getCurrencies();
      setCurrenciesList(response.data);
      setSelectedCurrency(response.data[0]);
    } catch (error: any) {
      console.log('error', error.message);
    }
  };
  const fetchCurrenciesData = async (currency: string, page: number) => {
    setLoding(true);
    try {
      const response = await currencyApi.getCurrency(currency, page);
      setLoding(false);
      setCurrenciesData(response.data);
    } catch (error: any) {
      setLoding(false);
      console.log('error', error.message);
    }
  };

  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
    fetchCurrenciesData(selectedCurrency, page);
  };

  const onChangeSelectedCurrency = (c: string) => {
    setSelectedCurrency(c);
  };

  useEffect(() => {
    fetchCurrenciesList();
  }, []);

  useEffect(() => {
    if (selectedCurrency.length > 0) {
      setPage(1);
      fetchCurrenciesData(selectedCurrency, 1);
    }
  }, [selectedCurrency]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        marginTop: 3,
        marginBottom: 3,
      }}
    >
      <Stack spacing={2}>
        {currenciesList.length ? (
          <Currencies
            data={currenciesList}
            onChange={onChangeSelectedCurrency}
            selectedCurrency={selectedCurrency}
          />
        ) : null}
        {loading ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <CircularProgress size={25} />
          </Box>
        ) : currenciesData.length ? (
          <CurrenciesTable data={currenciesData} />
        ) : null}
        <Pagination count={50} page={page} onChange={onChangePage} />
      </Stack>
    </Container>
  );
};

export default currency;
