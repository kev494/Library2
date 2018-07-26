<template>
  <el-container>
    <el-aside width=200px margin=2px>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>Books</span>
        </template>
          <el-menu-item index="1-1"><router-link to="/books">All books</router-link></el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
          <el-menu-item index="1-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-mobile-phone"></i>
        <span>Games</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main>
      <nuxt/>
    </el-main>
  </el-container>
</template>
<script>
// import app from './app';
// export default {
//   component: {
//     app
//   }
// }
</script>
<style src="element-ui/lib/theme-chalk/index.css">
</style>

