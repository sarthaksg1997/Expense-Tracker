import React, { useContext } from "react";
import { Grid } from "@material-ui/core";

import Details from "./components/details/Details";
import Main from "./components/main/Main";

import useStyles from "./styles";
import { ExpenseTrackerContext } from "./context/context";

function App() {
  const appName = useContext(ExpenseTrackerContext);
  const classes = useStyles();
  console.log("appName", appName);
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
