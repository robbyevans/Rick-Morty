import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Status({setStatus}) {

  const handleChange = (event) => {
    setStatus(event.target.value);

  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Status</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        // value={""}
        label="Status"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Alive"}>Alive</MenuItem>
        <MenuItem value={"Dead"}>Dead</MenuItem>
        <MenuItem value={"Unkown"}>Unkown</MenuItem>
      </Select>
    </FormControl>
  );
}