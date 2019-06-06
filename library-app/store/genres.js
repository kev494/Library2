export const state = () => ({
    list: [],
    genre: {}
  })

export const mutations = {
  set(state, genres) {
    state.list = genres
  },
  getGenre(state, genre) {
    state.genre = genre
  }
}

export const actions = {
  async get({commit}) {
    await this.$axios.get('genres')
      .then((res) => {
        if (res.status === 200) {
          commit('set', res.data)
        }
      })
  },
  async show({commit}, params) {
    await this.$axios.get(`/genres/${params.id}`)
      .then((res) => {
        if (res.status === 200) {
          commit('getGenre', res.data)
        }
      })
  }
}