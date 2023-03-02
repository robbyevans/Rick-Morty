import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import css from "./Filter.module.scss";

export default function Species({ setSpecies }) {
  const handleChange = (event) => {
    setSpecies(event.target.value);
  };

  return (
    <FormControl
      sx={{ m: 1, minWidth: 140 }}
      size="small"
      className={css.formControl}
    >
      <InputLabel className={css.formControl} id="demo-select-small">
        Species
      </InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        // value={gender}
        label="Species"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Human"}>Human</MenuItem>
        <MenuItem value={"Alien"}>Alien</MenuItem>
        <MenuItem value={"Humanoid"}>Humanoid</MenuItem>
        <MenuItem value={"Poopybutthole"}>Poopybutthole</MenuItem>
        <MenuItem value={"Mythological"}>Mythological</MenuItem>
        <MenuItem value={"unkown"}>Unkown</MenuItem>
        <MenuItem value={"Animal"}>Animal</MenuItem>
        <MenuItem value={"Disease"}>Disease</MenuItem>
        <MenuItem value={"Cronenberg"}>Cronenberg</MenuItem>
        <MenuItem value={"Planet"}>Planet</MenuItem>
      </Select>
    </FormControl>
  );
}

let species = [
  "Human",
  "Alien",
  "Humanoid",
  "Poopybutthole",
  "Mythological",
  "Unknown",
  "Animal",
  "Disease",
  "Robot",
  "Cronenberg",
  "Planet",
];
