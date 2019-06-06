<template>
    <el-row :gutter="20">
        <el-col :span="10" v-for="(book, index) in books" :key="book.id" >
            <Book :bookTitle="book.title"
            :bookDescription="book.description"
            :bookAuthor="book.author"
            :bookGenres="book.genre"
            :id="book.id"/>
        </el-col>
    </el-row>
</template>
<script>
import Book from "~/components/Book";
import axios from 'axios'
import {mapState} from 'vuex';

export default {
  components: {
    Book
  },
  //async asyncData() {
  //  const { data } = await axios.get(`http://127.0.0.1:3333/books`);
  //  console.log(data);
  //  return { books: data.data };
  //},
  async fetch({store}) {
      await store.dispatch('books/get')
  },
  computed: {
    books() {
      return this.$store.state.books.list.data
    }
   }
};
</script>

<style>
.el-card {
  margin-bottom: 20px;
}
</style>

