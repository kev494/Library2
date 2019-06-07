<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>{{ bookTitle }}</span>
            <nuxt-link :to="'/books/' + id">
                <el-button style="float: right; padding: 3px 0" type="text">Go to book</el-button>
            </nuxt-link>
        </div>
        <div class="text item">
            <p>{{ bookDescription }}</p>
            <p>{{ bookAuthor }}</p>
            <p>{{ bookGenres }}</p>
        </div>
        </el-card>
</template>
<script>
export default {
  props: ["bookTitle", "bookDescription" , "bookAuthor", "bookGenres", "id"]
};
</script>
<style>
.el-card {
  margin-bottom: 20px;
}
</style>
