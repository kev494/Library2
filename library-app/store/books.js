export const state = () => ({
    list: []
  })

export const mutations = {
  set(state, books) {
    state.list = books
  }
}

export const actions = {
  async get({commit}) {
    await this.$axios.get('books')
      .then((res) => {
        if (res.status === 200) {
          commit('set', res.data)
        }
      })
  }
}