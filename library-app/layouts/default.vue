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
</style>

