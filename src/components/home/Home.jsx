import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LoadingCircle from "../loading/LoadingCircle";
import LoadingLinear from "../loading/LoadingLinear";
import Cards from "../cards/Cards";
import Pagination from "../pagination/Pagination";
import { PAGE_SIZE } from "../../settings/settings";
import {
  requestApiData,
  onNextPage,
  onPreviousPage
} from "../../actions/actions";
import { paginatify } from "../../utils/paginate";

/* Components Family Tree:

            => LoadingLinear
APP => Home => Cards => Card => CardDetail
            => Pagination
            => LoadingCircle
*/

class Home extends React.Component {
  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // Initial API call
    this.props.requestApiData();
  }

  render() {
    const {
      data, // Whole cached cards
      currentPage, // Current page index
      cachePages, // Last cached page index
      lastpageIndex, // Last page index (e.g. 1 out of *100*)
      onNextPage, //  Function go next page
      onPreviousPage //  Function go previous page
    } = this.props;

    // Check whether the current page is cached.
    return data.length > (currentPage - 1) * PAGE_SIZE ? (
      // If the current page is cached already
      <React.Fragment>
        {/* If the current page is the last cached page. 
        1. Saga will be fetch more cache cards
        2. User will see an indication of a linear loading on the top. */}
        {currentPage === cachePages && <LoadingLinear />}

        {/* Filtering display data.
        paginatify() is in ""../../utils/paginate" */}
        <Cards data={paginatify(data, currentPage, PAGE_SIZE)} />

        <Pagination
          lastpageIndex={lastpageIndex}
          currentPage={currentPage}
          onNextPage={onNextPage}
          onPreviousPage={onPreviousPage}
        />
      </React.Fragment>
    ) : (
      //If the current page is not cached (User click too fast), display circle loading
      <LoadingCircle />
    );
  }
}

const mapStateToProps = state => ({
  data: state.dataReducer, // Whole cached cards
  currentPage: state.paginationReducer, // Current page index
  cachePages: state.cacheReducer, // Last cached page index
  lastpageIndex: state.lastpageReducer // Last page index (e.g. 1 out of *100*)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData, onNextPage, onPreviousPage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
