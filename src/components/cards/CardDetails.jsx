import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

/* Components Family Tree:

            => LoadingLinear
APP => Home => Cards => Card => CardDetail
            => Pagination
            => LoadingCircle
*/

const useStyles = makeStyles(theme => ({
  list: {
    width: "40vw"
  },
  ticketNumberSize: {
    fontSize: "30px"
  },
  ticketNumberMargin: {
    margin: "20px"
  },
  buttonMarginTop: {
    marginTop: "20px"
  }
}));

export default function CardDetailsDrawer(props) {
  const { serviceData } = props.data; // serviceData object
  const { coreData } = props.data; // coreData object

  const classes = useStyles();
  const [state, setState] = React.useState({ right: false });

  // coreData Keys to display in the drawer
  const coreDataKeys = ["assignee", "shortDescription", "application"];

  // serviceData Keys to display in the drawer
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

  // Format of card details in drawer
  const cardDrawer = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {/* Tickets Number */}
      <Grid container spacing={2} className={classes.ticketNumberMargin}>
        <Grid item xs={12}>
          <Typography className={classes.ticketNumberSize}>
            {coreData.number}
          </Typography>
        </Grid>

        {/* Core Data key and value */}
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

        {/* Service Data key and value */}
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
      <Button
        size="small"
        onClick={toggleDrawer("right", true)}
        className={classes.buttonMarginTop}
      >
        Learn More
      </Button>

      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {cardDrawer("right")}
      </Drawer>
    </div>
  );
}
