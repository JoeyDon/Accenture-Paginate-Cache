import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles(theme => ({
  list: {
    width: "40vw"
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  font: {
    fontSize: "30px"
  },
  gridMargin: {
    margin: "20px"
  }
}));

export default function TemporaryDrawer(props) {
  const { serviceData } = props.data;
  const { coreData } = props.data;

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const coreDataKeys = ["assignee", "shortDescription", "application"];
  const serviceDataKeys = [
    "made_sla",
    "upon_reject",
    "opened_by",
    "priority",
    "activity_due",
    "approval"
  ];

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Grid container spacing={2} className={classes.gridMargin}>
        <Grid item xs={12}>
          <Typography className={classes.font}>{coreData.number}</Typography>
        </Grid>
        {coreDataKeys.map(key => (
          <React.Fragment key={key}>
            <Grid item sm={12} md={4} lg={3}>
              <b>{key}</b>
            </Grid>
            <Grid item sm={12} md={8} lg={9}>
              {coreData[key] || "N/A"}
              <Divider />
            </Grid>
          </React.Fragment>
        ))}

        {serviceDataKeys.map(key => (
          <React.Fragment key={key}>
            <Grid item sm={12} md={4} lg={3}>
              <b>{key}</b>
            </Grid>
            <Grid item sm={12} md={8} lg={9}>
              {serviceData[key] || "N/A"}
              <Divider />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );

  return (
    <div>
      <Button size="small" onClick={toggleDrawer("right", true)}>
        Learn More
      </Button>

      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}
