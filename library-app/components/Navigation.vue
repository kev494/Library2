<template>
  <el-aside width="201px">
    <el-menu class="el-menu-vertical" default-active="1" @open="handleOpen" @close="handleClose">
      <router-link class="navbar-link" to="/">
        <el-menu-item index="0">
          <i class="el-icon-menu"></i>
         Index
        </el-menu-item>
      </router-link>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>Books</span>
        </template>
        <router-link class="navbar-link" to="/books">
          <el-menu-item index="1-1">All books</el-menu-item>
        </router-link>
        <router-link class="navbar-link" to="/genres">
          <el-menu-item index="1-2">Genres</el-menu-item>
        </router-link>
        <router-link class="navbar-link" to="/authors">
          <el-menu-item index="1-3">Authors</el-menu-item>
        </router-link>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-mobile-phone"></i>
        <span>Games</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.navbar-link {
  text-decoration: none;
  color: inherit;
  font: inherit;
}
</style>


