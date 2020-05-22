import loadable from "@loadable/component"; // react 楼层按需加载

export default [
  {
    path: "/login",
    component: loadable(() => import("@/pages/loginManagement/index")),
  },
  {
    path: "/register",
    component: loadable(() => import("@/pages/loginManagement/register")),
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
    path: "/authentication",
    component: loadable(() => import("@/pages/layoutManagement/index")),
    children: [
      {
        path: "",
        component: loadable(() =>
          import("@/pages/authenticationManagement/index")
        ),
      },
    ],
  },

  

  {
    path: "/demo",
    component: loadable(() => import("@/pages/layoutManagement/index")),
    children: [
      {
        path: "/state",
        component: loadable(() => import("@/pages/demoManagement/setstate")),
      },
    ],
  },
];
