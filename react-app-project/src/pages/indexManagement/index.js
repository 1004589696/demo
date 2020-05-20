import React, { Component } from "react";
import { connect } from "react-redux";
import AddSubInputNumber from "@/components/AddSubInputNumber";
import Pager from "@/components/Pager";
import "./index.scss";

import store from "@/store";
import reducer from "./reducer.js";
import { injectAsyncReducer } from "@/utils/dynamicLoadReducers.js";

injectAsyncReducer(store, "indexReducer", reducer);

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="page-title">组件</div>
        <div className="page-content">
          <div className="flex-box">
            <div className="flex-label">步进器</div>
            <div className="flex1">
              <AddSubInputNumber />
            </div>
          </div>
          <div className="flex-box">
            <div className="flex-label">分页</div>
            <div className="flex1">
              <Pager />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Index);
