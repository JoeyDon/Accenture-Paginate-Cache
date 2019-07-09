import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";

import Pagination from "../pagination/Pagination"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function CenteredGrid(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data.map(item => (
          <Grid item xs={3}>
            <Card data={item} />
          </Grid>
        ))}
      </Grid>

    </div>
  );
}
