<template>
  <el-container direction="vertical">
    <Header/>
    <el-container>
      <Navigation/>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Navigation from '~/components/Navigation';
import Header from '~/components/Header';
export default {
  components: {
    Navigation,
    Header
  }
}
</script>
<style>
.el-main {
  padding: 0px;
  padding-left: 20px;
}
</style>

