import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Currencies = () => {
  const [currency, setCurrency] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="currency-label">currency</InputLabel>
        <Select
          labelId="currency-label"
          id="currency"
          value={currency}
          label="Currency"
          onChange={handleChange}
        >
          <MenuItem value={'usd'}>usd</MenuItem>
          <MenuItem value={'bitcoin'}>bitcoin</MenuItem>
          <MenuItem value={'tether'}>tether</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Currencies;
