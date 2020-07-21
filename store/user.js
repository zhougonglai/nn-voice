export const state = () => ({
  user: ''
})

export const actions = {
  async userAction({ commit }, id) {
    const user = await this.$axios.$get(`/api/users/${id}`)
    console.log(user)
    commit('USER', user)
    return user
  }
}

export const mutations = {
  USER(state, user) {
    state.user = user
  }
}
