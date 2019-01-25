<template>
  <div>
    <mt-header class="title" fixed title="我的"></mt-header>
    <div class="profile">
      <div class="profile-content">
        <div>
          <span>幽丶墨</span>
          <span class="item-tag">黑胶VIP</span>
        </div>
        <span class="level">Lv.8</span>
      </div>
      <img src="../../../static/img/profile.png">
      <!-- <span class="arrow-rigth"></span> -->
    </div>
    <pxline></pxline>
    <div class="row text-center no-margin user-item">
      <div class="col-xs-3 col-md-3 col-sm-3 remd_img">
        <p>动态</p>
        <span>4</span>
      </div>
      <div class="col-xs-3 col-md-3 col-sm-3 remd_img">
        <p>关注</p>
        <span>20</span>
      </div>
      <div class="col-xs-3 col-md-3 col-sm-3 remd_img">
        <p>粉丝</p>
        <span>8</span>
      </div>
      <div class="col-xs-3 col-md-3 col-sm-3 remd_img">
        <p>收藏</p>
        <span>10</span>
      </div>
    </div>
    <div class="item-line"></div>
    <div>
      <mt-cell title="我的消息" is-link>
        <span class="badg">2</span>
        <img slot="icon" src="../../../static/img/message.png" width="20" height="20">
    </mt-cell>
    </div>
    <div class="item-line"></div>
    <div>
      <mt-cell title="会员中心" is-link>
        <!-- <span>icon 是图片</span> -->
        <img slot="icon" src="../../../static/img/huiyuanzhongxin.png" width="20" height="20">
      </mt-cell>
      <pxline></pxline>
      <mt-cell title="商城" is-link>
        <!-- <span>icon 是图片</span> -->
        <img slot="icon" src="../../../static/img/shangcheng.png" width="20" height="20">
      </mt-cell>
      <pxline></pxline>
      <mt-cell title="设置" is-link to="/user/setup">
        <!-- <span>icon 是图片</span> -->
        <img slot="icon" src="../../../static/img/shezhi.png" width="20" height="20">
      </mt-cell>
    </div>
    <div class="item-line"></div>
  </div>
</template>
<script>
import pxline from '@/components/line.vue'
export default {
  components: {
    pxline
  }
}
</script>
<style scoped>
.profile {
  background: transparent;
  padding: 8px 36px 4px 8px;
  position: relative;
}
.profile-content {
  position: absolute;
  left: 80px;
}
.profile img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.level {
  display: block;
  width: 38px;
  height: 14px;
  line-height: 14px;
  border: 1px solid #b6b6b6;
  text-align: center;
  border-radius: 7px;
  margin-top: 10px;
  font-size: 12px;
}
.arrow-rigth {
  display: block;
  position: absolute;
  width: 25px;
  height: 25px;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
  background: url('../../../static/img/arrow_right.png');
}
.item-tag {
  display: inline-block;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
  padding: 0px 5px 0px 10px;
  background: #f37e44;
  position: relative;
  margin-left: 10px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.item-tag::before {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  top: 0;
  left: -16px;
  border: 8px solid transparent;
  border-right-color: #f37e44;
}
.item-tag::after {
  content: ' ';
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #ffffff;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
}
.user-item  {
  display: inline-block;
  width: 100%;
  padding: 5px 0px 5px 0px;
}
.user-item p {
  margin: 0px 0px 2px 0px;
  font-size: 12px;
  color: #d8d8dd;
}
.user-item .remd_img {
  border-right: 1px solid rgb(255, 255, 255, 0.2);
}
.user-item .remd_img:last-child {
  border-right: none;
}
</style>
