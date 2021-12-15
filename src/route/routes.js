const Layout = () => import("../views/Layout")
const Home = () => import("../views/Home")
const Article = () => import("../views/Article")
const Login = () => import("../views/Login")

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
  {
    name: "login",
    path: "/login",
    component: Login,
  },
]
export default routes
