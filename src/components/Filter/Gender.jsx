import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import css from './Filter.module.scss'

export default function Gender({setGender}) {


  const handleChange = (event) => {
    setGender(event.target.value);

  };

  return (
    <FormControl sx={{ m: 1, minWidth: 140 }} size="small" >
      <InputLabel
      className={css.formControl}
       id="demo-select-small">Gender</InputLabel>
      <Select
      className={css.formControl}
        
        labelId="demo-select-small"
        id="demo-select-small"
        // value={""}
        label="Gender"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem  value={"male"}>Male</MenuItem>
        <MenuItem  value={"female"}>Female</MenuItem>
        <MenuItem  value={"genderless"}>genderless</MenuItem>
        <MenuItem  value={"unkown"}>Unkown</MenuItem>
      </Select>
    </FormControl>
  );
}