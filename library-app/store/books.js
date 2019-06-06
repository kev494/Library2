export const state = () => ({
    list: [],
    book: {}
  })

export const mutations = {
  set(state, books) {
    state.list = books
  },
  getBook(state, book) {
    state.book = book
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
  },
  async show({commit}, params) {
    await this.$axios.get(`/books/${params.id}`)
      .then((res) => {
        if (res.status === 200) {
          commit('getBook', res.data)
        }
      })
  }
}