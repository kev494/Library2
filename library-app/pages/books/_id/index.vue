<template>
    <div>
        <h2>{{book.title}}</h2>
        <p>{{book.description}}</p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    //async asyncData({params}) {
    //    const {data} = await axios.get(`http://127.0.0.1:3333/books/${params.id}`)
    //    return { book: data.data}
    //}
    async fetch({store, params}) {
      await store.dispatch('books/show', {id: params.id})
  },
  computed: {
    book() {
      return this.$store.state.books.book.data
    }
   }
}
</script>

