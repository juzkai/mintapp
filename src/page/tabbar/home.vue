<template>
  <div>
    <mt-header class="title" fixed title="首页">
      <router-link to="" slot="left">
          <mt-button icon="back" @click="exitWebView()"></mt-button>
        </router-link>
    </mt-header>
    <mt-swipe class="swiper text-center" style="height:120x;" :auto="4000">
      <mt-swipe-item v-for="(item, index) in swiperList" :key="index">
        <img :src="item.src">
        <span class="guang-gao">这里是广告{{index + 1}}</span>
      </mt-swipe-item>
    </mt-swipe>
    <div class="row no-margin text-center" style="padding-top:10px;height:70px;">
      <div class="col-xs-3 col-md-3 col-sm-3 remd_img">
        <div class="item-circle"  @click="cellClick()">1</div>
        <span class="font-14">私人FM</span>
      </div>
      <div class="col-xs-3 col-md-3 col-sm-3 remd_img font-14">
        <div class="item-circle">2</div>
        <span class="font-14">每日推荐</span>
        </div>
      <div class="col-xs-3 col-md-3 col-sm-3 remd_img font-14">
        <div class="item-circle">3</div>
        <span class="font-14">歌单</span>
        </div>
      <div class="col-xs-3 col-md-3 col-sm-3 remd_img font-14">
        <div class="item-circle">4</div>
        <span class="font-14">排行榜</span>
        </div>
    </div>
    <pxline></pxline>
    <div class="cell-item">推荐歌单</div>
    <div class="row no-margin">
      <div class="col-xs-4 col-md-4 col-sm-4 remd_img">
        <a href="https://music.163.com/#/playlist?id=2507689955">
          <img class="u-img" src="http://p1.music.126.net/6U8xt5C2CnMyaOSefDtkIw==/109951163657845174.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp">
          <span class="u-earp remd_lnum">164.2万</span>
        </a>
        <p class="remd_text">在青春的交叉路口 谁成为了你的牵绊</p>
      </div>
      <div class="col-xs-4 col-md-4 col-sm-4 remd_img">
        <a href="https://music.163.com/#/playlist?id=2353112171">
          <img class="u-img" src="http://p1.music.126.net/aWvdi63OYCzGLqzm6f1qBw==/109951163052862080.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp">
          <span class="u-earp remd_lnum">92.1万</span>
        </a>
        <p class="remd_text">网易云有哪些倍受好评的国人纯音乐？</p>
      </div>
      <div class="col-xs-4 col-md-4 col-sm-4 remd_img">
        <a href="https://music.163.com/#/playlist?id=727472445">
          <img class="u-img" src="http://p1.music.126.net/e5TOy_Auua5uf5SVRbE3Yg==/109951163530697745.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp">
          <span class="u-earp remd_lnum">204万</span>
        </a>
        <p class="remd_text">DAESH.IS_EAS7 德古拉教主</p>
      </div>
    </div>
    <div class="cell-item">热门歌单</div>
    <div class="row no-margin">
      <div class="col-xs-4 col-md-4 col-sm-4 remd_img">
        <a href="https://music.163.com/#/playlist?id=713420891">
          <img class="u-img" src="http://p2.music.126.net/ifGezLMt9ZEAv4jKlSdmmg==/19132601835264137.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp">
          <span class="u-earp remd_lnum">222.1万</span>
        </a>
        <p class="remd_text">康纳麦格雷戈☞各有所爱，各有千秋</p>
      </div>
      <div class="col-xs-4 col-md-4 col-sm-4 remd_img">
        <a href="https://music.163.com/#/playlist?id=2118951725">
          <img class="u-img" src="http://p2.music.126.net/pMRi2zv6Cp0SoEFzA2yL-Q==/19128203788989932.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp">
          <span class="u-earp remd_lnum">1041.4万</span>
        </a>
        <p class="remd_text">2018网络红歌</p>
      </div>
      <div class="col-xs-4 col-md-4 col-sm-4 remd_img">
        <a href="https://music.163.com/#/playlist?id=2430220144">
          <img class="u-img" src="http://p2.music.126.net/v82zA9k6LJQjNEBnLAzezw==/109951163607246625.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp">
          <span class="u-earp remd_lnum">601.2万</span>
        </a>
        <p class="remd_text">欧美·耳朵怀孕 | 盘点那些流行歌手</p>
      </div>
    </div>
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
      swiperList: [
        {
          src: require('../../../static/img/ul1319-6279.jpg')
        },
        {
          src: require('../../../static/img/tg-cm27006269.jpg')
        },
        {
          src: require('../../../static/img/rad600-02670750.jpg')
        }
      ]
    }
  },
  methods: {
    cellClick () {
      this.$router.push('/list')
    },
    exitWebView () {
      this.webView.exitWebView()
    }
  }
}
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 120px;
  margin-top: 5px;
}
.swiper img {
  width: 96%;
}
.item-circle {
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: #f37e44;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.u-earp {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PGcgb3BhY2l0eT0iLjE1Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNDAwMDAiIGQ9Im0yMiAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvZz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZmYiIGQ9Im0yMCAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvc3ZnPg==);
}
.u-img {
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  vertical-align: middle;
}
.remd_lnum {
  position: absolute;
  right: 5px;
  top: 2px;
  z-index: 3;
  padding-left: 13px;
  color: #fff;
  font-size: 12px;
  background-position: 0;
  background-repeat: no-repeat;
  background-size: 11px 10px;
  text-shadow: 1px 0 0 rgba(0,0,0,.15);
}
.remd_text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 6px 2px 0 6px;
  margin: 0;
  line-height: 1.2;
  font-size: 13px;
}
.guang-gao {
  position: absolute;
  display: block;
  line-height: 18px;
  right: 8px;
  top: 100%;
  margin-top: -18px;
  font-size: 12px;
  background: #4c4c4c;
  padding: 0px 5px 0px 5px;
}
</style>
