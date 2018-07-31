<template>
    <el-row>
        <el-col :span="6" v-for="(book, index) in books" :key="book.id" :offset="index > 0 ? 1 : 0">
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
export default {
  components: {
    Book
  },
  async asyncData() {
    const { data } = await axios.get(`http://127.0.0.1:3333/books`);
    console.log(data);
    return { books: data.data };
  }

  /* asyncData() {
    return new Promise((resolve, object) => {
      setTimeout(() => {
        resolve({
          books: [ {
            id: "1",
            title: "test",
            author: "test test",
            genre: "fantasy"
          }]
        });
      }, 1500);
    });
  } */
};
</script>

<style>
</style>

