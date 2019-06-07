<template>
  <div>
    <el-button round type="primary" icon="el-icon-circle-plus">Add Genre</el-button>
    <el-collapse accordion>
      <el-collapse-item v-for="genre in genres" :key="genre.id">
        <template slot="title">
          <h1>{{genre.name}}</h1>
        </template>
        bla
        <el-row :gutter="20">
          <el-col :span="10" v-for="(book, index) in books" :key="book.id">
            <Book
              :bookTitle="book.title"
              :bookDescription="book.description"
              :bookAuthor="book.author"
              :bookGenres="book.genre"
              :id="book.id"
            />
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import Book from "~/components/Book";

export default {
  components: {
    Book
  },

  async fetch({ store }) {
    await store.dispatch("genres/get");
    await store.dispatch("books/get");
  },
  computed: {
    genres() {
      return this.$store.state.genres.list.data;
    },
    books() {
      return this.$store.state.books.list.data;
    }
  }
};
</script>
<style>
.el-button {
  float: right;
}
</style>

