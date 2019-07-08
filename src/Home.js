import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "./actions";

import Cards from "./components/Cards";
import Card from "./components/Card";
class Home extends React.Component {
  componentDidMount() {
    console.log("Process - componentDidMount");
    this.props.requestApiData();
  }

  render() {
    const { data } = this.props;
    console.log(this.props.data);
    console.log(data);
    return data.length ? <Cards data={data} /> : <h1>loading...</h1>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
