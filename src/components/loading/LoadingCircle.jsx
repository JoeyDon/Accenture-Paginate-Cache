import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

/* Components Family Tree:

            => LoadingLinear
APP => Home => Cards => Card => CardDetail
            => Pagination
            => LoadingCircle
*/

// This will appear when the current page is not cached yet(User click too fast).
export default function CircularLoading() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <CircularProgress size={200} />
        <h1>Loading</h1>
      </Grid>
    </div>
  );
}
