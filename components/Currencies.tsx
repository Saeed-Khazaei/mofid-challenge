import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Currencies = (props: {
  data: string[];
  selectedCurrency: string;
  onChange(c: string): void;
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    props.onChange(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="currency-label">currency</InputLabel>
        <Select
          labelId="currency-label"
          id="currency"
          value={props.selectedCurrency}
          label="Currency"
          onChange={handleChange}
        >
          {props.data.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Currencies;
