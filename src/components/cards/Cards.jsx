import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";

/* Components Family Tree:

            => LoadingLinear
APP => Home => Cards => Card => CardDetail
            => Pagination
            => LoadingCircle
*/
const useStyles = makeStyles({
  root: {
    padding: "5vw 10vw"
  }
});

export default function CenteredCardsGrid(props) {
  const classes = useStyles();
  const { data } = props; // data.length is 12. (In this case)

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data.map(item => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={item.coreData.id}>
            <Card data={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
