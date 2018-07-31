<template>
    <el-row>
        <el-col :span="8" v-for="book in books" :key="book.id" :offset="index > 0 ? 2 : 0">
            <Book :bookTitle="book.title"
            :bookAuthor="book.author"
            :bookGenres="book.genre"
            :id="book.id"/>
        </el-col>
    </el-row>
</template>
<script>
import Book from '~/components/Book'
export default {
    components : {
        Book
    },
  asyncData() {
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
  }
}
</script>

<style>
</style>

