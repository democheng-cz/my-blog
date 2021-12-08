import request from "./ajax"

// 获取诗句

export const getPoem = () => request.get("/poem")
