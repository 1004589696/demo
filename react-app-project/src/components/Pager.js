import React, { Component } from "react";
import { Pagination } from "antd";

export default class Pager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  render() {
    return (
      <Pagination
        showQuickJumper
        showSizeChanger
        total={this.state.total}
        showTotal={(total) => `共计 ${total} 条`}
        defaultPageSize={20}
        defaultCurrent={1}
        onChange={this.onChange}
        onShowSizeChange={this.onShowSizeChange}
      />
    );
  }
  onShowSizeChange = (current, size) => {
    console.log(current, size);
  };
  onChange = (page, pageSize) => {
    console.log(page, pageSize);
  };
}
