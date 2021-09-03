import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login';
import home from '@/components/home';
// 功能模块-首页
import centre from '@/components/views/centre'
// 功能模块-用户管理
import member from '@/components/views/member'
import address from '@/components/views/address'
import favorite from '@/components/views/favorite'
import footprint from '@/components/views/footprint'
import search from '@/components/views/search'
import opinion from '@/components/views/opinion'

// 功能模块-商场管理
import area from '@/components/views/area'
import provider from '@/components/views/provider'
import productCategory from '@/components/views/product-category'
import orderManager from '@/components/views/order-manager'
import saleManager from '@/components/views/sale-manager'
import commonQuestion from '@/components/views/common-question'
import keywords from '@/components/views/keywords'

// 功能模块-商品管理
import productList from '@/components/views/product-list'
import productPutOn from '@/components/views/product-put-on'
import productComment from '@/components/views/product-comment'

// 功能模块-推广管理
import adManager from '@/components/views/ad-manager'
import couponManager from '@/components/views/coupon-manager'
import topicManager from '@/components/views/topic-manager'
import groupBuyRule from '@/components/views/group-buy-rule'
import groupBuyAvtiviti from '@/components/views/group-buy-avtiviti'

// 功能模块-系统管理
import administrator from '@/components/views/administrator'
import operationLog from '@/components/views/operation-log'
import roleManager from '@/components/views/role-manager'
import storageManager from '@/components/views/storage-manager'
import noticeManager from '@/components/views/notice-manager'

// 功能模块-配置管理
import mallSetting from '@/components/views/mall-setting'
import priceSetting from '@/components/views/price-setting'
import orderSetting from '@/components/views/order-setting'
import programSetting from '@/components/views/program-setting'

// 功能模块-统计报表
import userStatistics from '@/components/views/user-statistics'
import orderStatistics from '@/components/views/order-statistics'
import productStatistics from '@/components/views/product-statistics'

// 补充功能模块
import privilegeManager from '@/components/views/privilege-manager'


Vue.use(Router)
 
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [{
        path: '/centre',
        name: 'centre',
        component: centre
      },
      {
        path: '/member',
        name: 'member',
        component: member
      },
      {
        path: '/address',
        name: 'address',
        component: address
      },
      {
        path: '/favorite',
        name: 'favorite',
        component: favorite
      },
      {
        path: '/footprint',
        name: 'footprint',
        component: footprint
      },
      {
        path: '/search',
        name: 'search',
        component: search
      },
      {
        path: '/opinion',
        name: 'opinion',
        component: opinion
      },
      {
        path: '/area',
        name: 'area',
        component: area
      },
      {
        path: '/provider',
        name: 'provider',
        component: provider
      },
      {
        path: '/productCategory',
        name: 'productCategory',
        component: productCategory
      },
      {
        path: '/orderManager',
        name: 'orderManager',
        component: orderManager
      },
      {
        path: '/saleManager',
        name: 'saleManager',
        component: saleManager
      },
      {
        path: '/commonQuestion',
        name: 'commonQuestion',
        component: commonQuestion
      },
      {
        path: '/keywords',
        name: 'keywords',
        component: keywords
      },
      {
        path: '/productList',
        name: 'productList',
        component: productList
      },
      {
        path: '/productPutOn',
        name: 'productPutOn',
        component: productPutOn
      },
      {
        path: '/productComment',
        name: 'productComment',
        component: productComment
      },
      {
        path: '/adManager',
        name: 'adManager',
        component: adManager
      },
      {
        path: '/couponManager',
        name: 'couponManager',
        component: couponManager
      },
      {
        path: '/topicManager',
        name: 'topicManager',
        component: topicManager
      },
      {
        path: '/groupBuyRule',
        name: 'groupBuyRule',
        component: groupBuyRule
      },
      {
        path: '/groupBuyAvtiviti',
        name: 'groupBuyAvtiviti',
        component: groupBuyAvtiviti
      },
      {
        path: '/administrator',
        name: 'administrator',
        component: administrator
      },
      {
        path: '/operationLog',
        name: 'operationLog',
        component: operationLog
      },
      {
        path: '/roleManager',
        name: 'roleManager',
        component: roleManager
      },
      {
        path: '/storageManager',
        name: 'storageManager',
        component: storageManager
      },
      {
        path: '/noticeManager',
        name: 'noticeManager',
        component: noticeManager
      },
      {
        path: '/mallSetting',
        name: 'mallSetting',
        component: mallSetting
      },
      {
        path: '/priceSetting',
        name: 'priceSetting',
        component: priceSetting
      },
      {
        path: '/orderSetting',
        name: 'orderSetting',
        component: orderSetting
      },
      {
        path: '/programSetting',
        name: 'programSetting',
        component: programSetting
      },
      {
        path: '/userStatistics',
        name: 'userStatistics',
        component: userStatistics
      },
      {
        path: '/orderStatistics',
        name: 'orderStatistics',
        component: orderStatistics
      },
      {
        path: '/productStatistics',
        name: 'productStatistics',
        component: productStatistics
      },
      {
        path: '/privilegeManager',
        name: 'privilegeManager',
        component: privilegeManager
      }
    ]
    }
  ]
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
/*
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('token');
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
*/
export default router;
