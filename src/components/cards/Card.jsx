import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardDetails from "./CardDetails";

/* Components Family Tree:

            => LoadingLinear
APP => Home => Cards => Card => CardDetail
            => Pagination
            => LoadingCircle
*/

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    height: 230
  },
  title: {
    fontSize: 14
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 5
  }
});

export default function SingleCard(props) {
  const classes = useStyles();

  const { coreData } = props.data;
  const { data } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          New
        </Typography>
        <Typography variant="h5" component="h2">
          {coreData.number}
        </Typography>
        <Typography className={classes.subtitle} color="textSecondary">
          Application: {coreData.application || "N/A"}
          <br />
          Assignee: {coreData.assignee || "N/A"}
        </Typography>
        <Typography variant="body2" component="p">
          {coreData.Description} {coreData.shortDescription}
        </Typography>
      </CardContent>

      <CardActions>
        <CardDetails data={data} />
      </CardActions>
    </Card>
  );
}
