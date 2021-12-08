const Layout = () => import("../views/Layout")
const Home = () => import("../views/Home")
const Article = () => import("../views/Article")

const routes = [
  // 一级路由
  {
    name: "layout",
    path: "/",
    component: Layout,
    children: [
      {
        name: "home",
        path: "/",
        component: Home,
      },
      {
        name: "article",
        path: "/article",
        component: Article,
      },
    ],
  },
]
export default routes
