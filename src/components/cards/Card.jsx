import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardDetails from "./CardDetails" 

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});



export default function SimpleCard(props) {
  const classes = useStyles();


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
          {data.coreData.number}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Application: {data.coreData.application}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Assignee: {data.coreData.assignee}
        </Typography>
        <Typography variant="body2" component="p">
          {data.coreData.Description} {data.coreData.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <CardDetails data={data}/>
      </CardActions>
    </Card>
  );
}
