import request from "./ajax"

// 获取诗句

export const getPoem = () => request.get("/poem")

// 发起登录请求
export const reqLogin = (user) => request.post("/users/login", { user })

// 获取文章
export const reqArticleList = () => request.get("/articles")
