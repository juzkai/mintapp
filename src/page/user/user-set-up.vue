<template>
  <div>
    <mt-header class="title" fixed title="设置">
      <router-link to="" slot="left">
          <mt-button icon="back" @click="back()"></mt-button>
        </router-link>
    </mt-header>
    <mt-range v-model="rangeValue" :step="10"></mt-range>
    <div class="content">ABCDEF</div>
  </div>
</template>
<script>
import pxline from '@/components/line.vue'
export default {
  components: {
    pxline
  },
  data () {
    return {
      rangeValue: 0
    }
  }
}
</script>
<style scoped>
.content {
  width: 155px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  background: #365972;
  position: relative;
  overflow: hidden;
}
.content::before {
  position: absolute;
  content: ' ';
  width: 36px;
  height: 118px;
  background: #365972;
  left: 120px;
  top: 0;
  border-left: 2px solid #ffffff;
  transform: rotate(30deg);
}
</style>
