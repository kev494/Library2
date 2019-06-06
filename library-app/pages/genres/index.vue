<template>
  <div>
    <el-button round type="primary" icon="el-icon-circle-plus">Add Genre</el-button>
    <el-collapse accordion>
      <el-collapse-item v-for="genre in genres" :key="genre.id">
        <template slot="title">
          <h1>{{genre.name}}</h1>
        </template>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  async fetch({ store }) {
    await store.dispatch("genres/get");
  },
  computed: {
    genres() {
      return this.$store.state.genres.list.data;
    }
  }
};
</script>
<style>
.el-button {
    float: right;
}
</style>

