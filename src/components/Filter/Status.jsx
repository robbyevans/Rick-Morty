import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import css from './Filter.module.scss'

export default function Status({setStatus}) {

  const handleChange = (event) => {
    setStatus(event.target.value);

  };

  return (
    <FormControl sx={{ m: 1, minWidth: 140 }} size="small" className={css.formControl} >
      <InputLabel
      className={css.formControl}
       id="demo-select-small">Status</InputLabel>
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