import React, { useState } from "react";
import { TextField, Button, Grid, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

const categories = [
  "Fire",
  "Poison",
  "Psychic",
  "Radiant",
  "Thunder",
  "Acid",
  "Cold",
  "Force",
  "Slashing",
  "Attack",
  "Ranged",
  "Spell",
];

const ChoreInputForm = ({ addChore }) => {
  const [chore, setChore] = useState("");
  const [value, setValue] = useState(1);
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (chore.trim()) {
      addChore({ chore, value, category });
      setChore("");
      setValue(1);
      setCategory(categories[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <TextField
            label="Chore"
            value={chore}
            onChange={(e) => setChore(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Value"
            type="number"
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth>
            Add Chore
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ChoreInputForm;
