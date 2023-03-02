import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Gender({setGender}) {

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Gender</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"male"}>Male</MenuItem>
        <MenuItem value={"female"}>Female</MenuItem>
        <MenuItem value={"genderless"}>genderless</MenuItem>
        <MenuItem value={"unkown"}>Unkown</MenuItem>
      </Select>
    </FormControl>
  );
}