import loadable from "@loadable/component"; // react 楼层按需加载

export default [
  {
    path: "/login",
    component: loadable(() => import("@/pages/loginManagement/index")),
  },
  {
    path: "/index",
    component: loadable(() => import("@/pages/layoutManagement/index")),
    children: [
      {
        path: "",
        component: loadable(() => import("@/pages/indexManagement/index")),
      },
    ],
  },
  {
    path: "/demo",
    component: loadable(() => import("@/pages/layoutManagement/index")),
    children: [
      {
        path: "/lifecycle",
        component: loadable(() => import("@/pages/demoManagement/lifecycle")),
      },
      {
        path: "/props",
        component: loadable(() => import("@/pages/demoManagement/props")),
      },
      {
        path: "/context",
        component: loadable(() => import("@/pages/demoManagement/context")),
      },
      {
        path: "/events",
        component: loadable(() => import("@/pages/demoManagement/events")),
      },
      {
        path: "/state",
        component: loadable(() => import("@/pages/demoManagement/setstate")),
      },
    ],
  },
];
