<style>
</style>
<template>
  <div id="centre">
    <h1>首页</h1>
    <br>
    <h1>欢迎来到北洋园房屋租赁系统</h1>
    <br>
    <el-calendar v-model="value">
</el-calendar>

  </div>
</template>

<script>
export default{
    name: 'centre',
    data() {
      return {
        value: new Date()
      }
    }
}
</script>