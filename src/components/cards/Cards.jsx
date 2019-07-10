import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "5vw 10vw"
  }
}));

export default function CenteredGrid(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data.map(item => (
          <Grid item xs={12} sm={6} lg={3}>
            <Card data={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
