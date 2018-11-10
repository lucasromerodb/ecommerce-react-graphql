import React, { Component, Fragment } from "react";
import Meta from "./Meta";
import Header from "./Header";

class Page extends Component {
  render() {
    return (
      <Fragment>
        <Meta />
        <Header />
        {this.props.children}
      </Fragment>
    );
  }
}

export default Page;
