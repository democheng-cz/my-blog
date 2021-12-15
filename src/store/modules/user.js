const state = {
  user_info: {
    name: "",
    id: "",
    token: "",
    avatar: "",
    bio: "",
  },
}

const mutations = {
  saveUseInfo(state, info) {
    state.user_info = info
    console.log("存储成功")
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
}
