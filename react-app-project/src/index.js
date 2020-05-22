import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./router";
import { ConfigProvider } from "antd"; // antd 目前的默认文案是英文  ConfigProvider 用于全局配置国际化文案
import zhCN from "antd/es/locale/zh_CN"; // 中文配置
import store from "./store";
import { Provider } from "react-redux";
import "@/assets/css/index.css";
import "@/api/index.js";
import $axios from "@/api/api.js";
React.$axios = $axios;

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <AppRoutes />
    </ConfigProvider>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
