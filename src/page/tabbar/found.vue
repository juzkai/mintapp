<template>
  <div>
    <mt-header class="title" fixed title="圈子"></mt-header>
    <div style="padding:8px;">
      <div class="cell" v-for="(i, index) in 10" :key="index">cell{{index + 1}}</div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
