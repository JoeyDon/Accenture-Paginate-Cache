import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData, onNextPage, onPreviousPage } from "./actions";

import LoadingCircle from "./components/loading/LoadingCircle";
import LoadingLinear from "./components/loading/LoadingLinear";
import Cards from "./components/cards/Cards";
import Pagination from "./components/pagination/Pagination";
import { pageSize } from "./settings/settings";

class Home extends React.Component {
  componentDidMount() {
    //console.log("Process - componentDidMount");
    this.props.requestApiData();
  }

  render() {
    const {
      data,
      currentPage,
      onNextPage,
      onPreviousPage,
      cachePages, lastpageIndex
    } = this.props;
    console.log(currentPage);
    return data.length > (currentPage - 1) * pageSize ? (
      <React.Fragment>
        {currentPage === cachePages && <LoadingLinear />}
        <Cards data={paginatify(data, currentPage, pageSize)} />
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
    lastpageIndex : state.lastpageReducer
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData, onNextPage, onPreviousPage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
