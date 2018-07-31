<template>
    <el-aside width=auto>
    <el-menu
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#32CD32">
      <el-menu-item index=0>
          <i class="el-icon-menu"></i>
          <span><router-link class="navbar-link" to="/">Index</router-link></span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>Books</span>
        </template>
          <el-menu-item index="1-1"><router-link class="navbar-link" to="/books">All books</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link class="navbar-link" to="/genres">Genres</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link class="navbar-link" to="/authors">Authors</router-link></el-menu-item>
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


