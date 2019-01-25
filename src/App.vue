<template>
  <div id="app">
    <!-- <mt-header class="title" fixed title=""></mt-header> -->
    <div class="bg"></div>
    <mt-tab-container :style="{'padding-bottom': isTabPage? '60px' : '5px'}">
      <transition :name="viewTransition">
       <router-view class="router-view"/>
      </transition>
    </mt-tab-container>
    <mt-tabbar v-if="isTabPage" class="tabbar" fixed v-model="selected" @value="tabClick">
      <mt-tab-item v-for="(tab, index) in tabItem" :key="index" :id="tab.title">
        <img v-if="selected === tab.title" slot="icon" :src="tab.selected">
        <img v-else slot="icon" :src="tab.noSelected">
        {{tab.title}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
const tabItem = [
  {
    title: '首页',
    selected: require('../static/img/home_selected.png'),
    noSelected: require('../static/img/home_no_selected.png'),
    path: '/home'
  },
  {
    title: '查找',
    selected: require('../static/img/search-selected.png'),
    noSelected: require('../static/img/search-no-selected.png'),
    path: '/search'
  },
  {
    title: '圈子',
    selected: require('../static/img/found_selected.png'),
    noSelected: require('../static/img/found_no_selected.png'),
    path: '/found'
  },
  {
    title: '我的',
    selected: require('../static/img/user_selected.png'),
    noSelected: require('../static/img/user_no_selected.png'),
    path: '/user'
  }
]
export default {
  name: 'App',
  data () {
    return {
      selected: tabItem[0].title,
      tabItem: tabItem,
      viewPageList: ['/home', '/search', '/found', '/user'], // 确定首页底部导航栏顺序
      viewTransition: 'slide-left'
    }
  },
  mounted () {
    const _this = this
    // 处理当前tab路由非home页面时刷新，定位到相应的页面
    setTimeout(() => {
      let path = _this.$route.path
      for (let i = 0; i < tabItem.length; i++) {
        if (tabItem[i].path === path) {
          _this.selected = tabItem[i].title
        }
      }
    }, 300)
  },
  methods: {
    tabClick () {
      console.log(123)
    }
  },
  watch: {
    selected () {
      for (let key in tabItem) {
        if (tabItem[key].title === this.selected) {
          this.$router.replace(tabItem[key].path)
        }
      }
    },
    '$route' (to, from) {
      // 滚动条滚回顶部
      document.getElementsByClassName('mint-tab-container')[0].scrollTop = 0
      if (!this.viewPageList || this.viewPageList.length === 0) {
        let viewPageList = sessionStorage.getItem('viewPageList')
        if (viewPageList) {
          this.viewPageList = JSON.parse(viewPageList)
        }
      }
      if (this.viewPageList.indexOf(to.path) === -1) {
        this.viewPageList.push(to.path)
      }
      if (this.viewPageList.indexOf(to.path) > this.viewPageList.indexOf(from.path)) {
        this.viewTransition = 'slide-left'
      } else {
        this.viewTransition = 'slide-right'
      }
      sessionStorage.setItem('viewPageList', JSON.stringify(this.viewPageList))
    }
  },
  computed: {
    // 判断是否是带tab的页面
    isTabPage () {
      let isTabPage = this.$route.meta.isTabPage
      if (isTabPage) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="less">
@import url('./style/style.less');
@import url('./style/row.css');
@import url('./style/common.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
.bg {
  background: url('../static/img/20181120165025.jpg');
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-size: cover;
  filter: blur(0px) brightness(0.7);
  -webkit-filter: blur(0px) brightness(0.7);
}
.router-view {
  color: #ffffff;
  width: 100%;
  background: transparent;
  padding-top: 40px;
}
.tabbar {
  background: #412122;
  color: #ffffff;
}
.tabbar::before {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: url('../static/img/20181120165025.jpg');
  background-size: cover;
  background-position: bottom;
  content: ' ';
  filter: blur(8px) brightness(0.8);
  -webkit-filter: blur(8px) brightness(0.8);
  z-index: -1;
}
</style>
