<template>
  <el-container>
    <Navigation/>
    <el-main>
      <nuxt/>
    </el-main>
  </el-container>
</template>
<script>
import Navigation from '~/components/Navigation';
export default {
  components: {
    Navigation
  }
}
</script>
<style>
.el-main {
  padding: 0px;
  padding-left: 20px;
}
</style>

