import React from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl variant="standard" fullWidth>
          <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            autoWidth
            // value={income}
            //   onChange={handleChange}
            label="Type"
          >
            <MenuItem value={"Income"}>Income</MenuItem>
            <MenuItem value={"Expense"}>Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl variant="standard" fullWidth>
          <InputLabel id="demo-simple-select-standard-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            // value={income}
            //   onChange={handleChange}
            label="Category"
          >
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="salary">Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          placeholder="Amount"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="Date" fullWidth />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
      >
        CREATE
      </Button>
    </Grid>
  );
};

export default Form;
