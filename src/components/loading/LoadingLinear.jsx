import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

/* Components Family Tree:

            => LoadingLinear
APP => Home => Cards => Card => CardDetail
            => Pagination
            => LoadingCircle
*/

// This will appear when cache more in the saga.
export default function LinearLoading() {
  return (
    <div>
      <LinearProgress />
    </div>
  );
}
