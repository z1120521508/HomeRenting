<style scoped>
.el-row{
  height: 100%;
}

.el-menu{
  border-right:none;
}
.el-aside{
  border-right: 1px solid #f5f1f1;
}
</style>

<template>
  <el-aside width="200px">
    <el-row class="tac">
      <el-col>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1" @click="goPage('centre')">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="goPage('member')">用户列表</el-menu-item>
            </el-menu-item-group>
         <!--   <el-menu-item-group>
              <el-menu-item index="3-2" @click="goPage('address')">收货地址</el-menu-item>
            </el-menu-item-group> -->
         <!--   <el-menu-item-group>
              <el-menu-item index="3-3" @click="goPage('favorite')">会员收藏</el-menu-item>
            </el-menu-item-group> -->
        <!--    <el-menu-item-group>
              <el-menu-item index="3-4" @click="goPage('footprint')">会员足迹</el-menu-item>
            </el-menu-item-group> -->
         <!--    <el-menu-item-group>
              <el-menu-item index="3-5" @click="goPage('search')">搜索历史</el-menu-item>
            </el-menu-item-group> -->
            <el-menu-item-group>
              <el-menu-item index="3-6" @click="goPage('opinion')">意见反馈收集</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          
     <!--     <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>房屋租售管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-2" @click="goPage('provider')">品牌生产商</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="4-3" @click="goPage('product-category')">产品种类</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="4-4" @click="goPage('order-manager')">订单管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="4-5" @click="goPage('sale-manager')">售后管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="4-6" @click="goPage('common-question')">通用问题</el-menu-item>
            </el-menu-item-group>
             <el-menu-item-group>
              <el-menu-item index="4-7" @click="goPage('keywords')">关键字</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
-->

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>房屋信息列表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1" @click="goPage('product-list')">已审核列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="5-2" @click="goPage('product-put-on')">待审核列表</el-menu-item>
            </el-menu-item-group>
 <!--           <el-menu-item-group>
              <el-menu-item index="4-3" @click="goPage('product-comment')">商品评论</el-menu-item>
            </el-menu-item-group> -->
          </el-submenu> 

<!--          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>推广管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1" @click="goPage('ad-manager')">广告管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="6-2" @click="goPage('coupon-manager')">优惠卷管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="6-3" @click="goPage('topic-manager')">专题管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="6-4" @click="goPage('group-buy-rule')">团购规则</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="6-5" @click="goPage('group-buy-avtiviti')">团购活动</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
-->
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1" @click="goPage('administrator')">管理员列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="7-2" @click="goPage('notice-manager')">通知管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="7-3" @click="goPage('operation-log')">管理员个人信息</el-menu-item>
            </el-menu-item-group>
          <!--  <el-menu-item-group>
              <el-menu-item index="7-4" @click="goPage('role-manager')">角色管理</el-menu-item>
            </el-menu-item-group> 
            <el-menu-item-group>
              <el-menu-item index="7-5" @click="goPage('storage-manager')">存储管理</el-menu-item>
            </el-menu-item-group>
             <el-menu-item-group>
              <el-menu-item index="7-6" @click="goPage('privilege-manager')">权限管理</el-menu-item>
            </el-menu-item-group>  -->
          </el-submenu>

<!--
           <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>配置管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="8-1" @click="goPage('mall-setting')">商场配置</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="8-2" @click="goPage('price-setting')">运费配置</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="8-3" @click="goPage('order-setting')">订单配置</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="8-4" @click="goPage('program-setting')">小程序配置</el-menu-item>
            </el-menu-item-group>
          </el-submenu> 
-->
           <el-submenu index="9">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>统计报表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="9-1" @click="goPage('user-statistics')">用户统计</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="9-2" @click="goPage('order-statistics')">订单统计</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="9-3" @click="goPage('product-statistics')">房屋统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
var $this = {};
export default {
  data() {
    return {};
  },
  beforeCreate() {
    $this = this;
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    goPage(link) {
    // 跳转至首页
      if (link === "centre") {
        
        $this.$router.push("/centre").catch(error => error);
      }
      // 跳转至会员管理 
      else if ((link === "member")) {
        $this.$router.push("/member").catch(error => error);
      } 
      // 跳转至收获地址
      else if ((link === "address")) {
        $this.$router.push("/address").catch(error => error);
      } 
       // 跳转至会员收藏
      else if ((link === "favorite")) {
        $this.$router.push("/favorite").catch(error => error);
      } 
       // 跳转至会员足迹
      else if ((link === "footprint")) {
        $this.$router.push("/footprint").catch(error => error);
      } 
      // 跳转至检索历史
      else if ((link === "search")) {
        $this.$router.push("/search").catch(error => error);
      }
      //  跳转至意见反馈
      else if ((link === "opinion")) {
        $this.$router.push("/opinion").catch(error => error);
      } 
      // 跳转至行政区域
      else if ((link === "area")) {
        $this.$router.push("/area").catch(error => error);
      } 
      // 跳转至品牌生成商
      else if ((link === "provider")) {
        $this.$router.push("/provider").catch(error => error);
      } 
      // 跳转至产品种类
      else if ((link === "product-category")) {
        $this.$router.push("/productCategory").catch(error => error);
      } 
      // 跳转至订单管理
      else if ((link === "order-manager")) {
        $this.$router.push("/orderManager").catch(error => error);
      } 
      // 跳转至售后管理
      else if ((link === "sale-manager")) {
        $this.$router.push("/saleManager").catch(error => error);
      } 
      // 跳转至通用问题
      else if ((link === "common-question")) {
        $this.$router.push("/commonQuestion").catch(error => error);
      } 
      // 跳转至关键字
      else if ((link === "keywords")) {
        $this.$router.push("/keywords").catch(error => error);
      } 
      // 跳转至商品列表
      else if ((link === "product-list")) {
        $this.$router.push("/productList").catch(error => error);
      } 
      // 跳转至商品上架
      else if ((link === "product-put-on")) {
        $this.$router.push("/productPutOn").catch(error => error);
      } 
      // 跳转至商品评论
      else if ((link === "product-comment")) {
        $this.$router.push("/productComment").catch(error => error);
      } 
      // 跳转至广告管理
      else if ((link === "ad-manager")) {
        $this.$router.push("/adManager").catch(error => error);
      } 
      // 跳转至优惠卷管理
      else if ((link === "coupon-manager")) {
        $this.$router.push("/couponManager").catch(error => error);
      } 
      // 跳蛛至专题管理
      else if ((link === "topic-manager")) {
        $this.$router.push("/topicManager").catch(error => error);
      } 
      // 跳转至团购规则
      else if ((link === "group-buy-rule")) {
        $this.$router.push("/groupBuyRule").catch(error => error);
      } 
      // 跳转至团购活动
      else if ((link === "group-buy-avtiviti")) {
        $this.$router.push("/groupBuyAvtiviti").catch(error => error);
      } 

       // 跳转至管理员
      else if ((link === "administrator")) {
        $this.$router.push("/administrator").catch(error => error);
      } 
      // 跳转至通知管理
      else if ((link === "notice-manager")) {
        $this.$router.push("/noticeManager").catch(error => error);
      } 
       // 跳转至操作日志
      else if ((link === "operation-log")) {
        $this.$router.push("/operationLog").catch(error => error);
      } 
        // 跳转至角色管理
      else if ((link === "role-manager")) {
        $this.$router.push("/roleManager").catch(error => error);
      } 
       // 跳转至存储管理
      else if ((link === "storage-manager")) {
        $this.$router.push("/storageManager").catch(error => error);
      } 
      // 跳转至商场设置
      else if ((link === "mall-setting")) {
        $this.$router.push("/mallSetting").catch(error => error);
      } 
      // 跳转至运费配置
      else if ((link === "price-setting")) {
        $this.$router.push("/priceSetting").catch(error => error);
      } 
       // 跳转至订单配置
      else if ((link === "order-setting")) {
        $this.$router.push("/orderSetting").catch(error => error);
      } 
       // 跳转至小程序配置
      else if ((link === "program-setting")) {
        $this.$router.push("/programSetting").catch(error => error);
      } 
       // 跳转至用户统计
      else if ((link === "user-statistics")) {
        $this.$router.push("/userStatistics").catch(error => error);
      } 
     // 跳转至订单统计
      else if ((link === "order-statistics")) {
        $this.$router.push("orderStatistics").catch(error => error);
      } 
      // 跳转至商品统计
      else if ((link === "product-statistics")) {
        $this.$router.push("/productStatistics").catch(error => error);
      } 
      // 跳转至权限管理
      else if ((link === "privilege-manager")) {
        $this.$router.push("/privilegeManager").catch(error => error);
      } 
      else {}
    }
  }
};
</script>
