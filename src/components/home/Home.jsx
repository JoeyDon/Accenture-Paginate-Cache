import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData, onNextPage, onPreviousPage } from "../../actions";

import LoadingCircle from "../loading/LoadingCircle";
import LoadingLinear from "../loading/LoadingLinear";
import Cards from "../cards/Cards";
import Pagination from "../pagination/Pagination";
import { PAGE_SIZE } from "../../settings/settings";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    const {
      data,
      currentPage,
      onNextPage,
      onPreviousPage,
      cachePages,
      lastpageIndex
    } = this.props;

    console.log(currentPage);
    return data.length > (currentPage - 1) * PAGE_SIZE ? (
      <React.Fragment>
        {currentPage === cachePages && <LoadingLinear />}

        <Cards data={paginatify(data, currentPage, PAGE_SIZE)} />

        <Pagination
          lastpageIndex={lastpageIndex}
          currentPage={currentPage}
          onNextPage={onNextPage}
          onPreviousPage={onPreviousPage}
        />
      </React.Fragment>
    ) : (
      <LoadingCircle />
    );
  }
}

const paginatify = (items, currentPage, pageSize) => {
  let startIndex = (currentPage - 1) * pageSize;
  let lastIndex = currentPage * pageSize;
  return items.slice(startIndex, lastIndex);
};

const mapStateToProps = state => {
  //console.log(state)
  return {
    data: state.dataReducer,
    currentPage: state.paginationReducer,
    cachePages: state.cacheReducer,
    lastpageIndex: state.lastpageReducer
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData, onNextPage, onPreviousPage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
