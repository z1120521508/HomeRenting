// pages/home/home.js
var that
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    houses: [],
    all_houses: [],
    down: 0,
    up: 99999,
    keyword: '',
    showRent: 0,
    itemcnt: 0,
    imgUrls:[
      'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=8b20fba45e6034a829b7b087fb23656c/14ce36d3d539b60028f67d12eb50352ac65cb75e.jpg',
      'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=3386e39a49fbfbeddc0c3e7948c0db0e/32fa828ba61ea8d3943606a1950a304e251f587a.jpg',
      'http://img04.sogoucdn.com/app/a/100520093/ca86e620b9e623ff-d72d635343d5bade-dcf2acda7a45cb44f172db138bdf8d2d.jpg',
     ]
  },

/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
    that=this
  },

   /*
   * 获取初始列表数据
   */
  getData: function () {
    this.setData({
      houses: [],
    })
    wx.showLoading({
      title: '加载中',
    })
    var url = "http://172.20.10.6:8888/api/house/resources/list/1 "
    
    wx.request({
      url: url,
      method: "GET",
      success(res) {
        console.log(res.data)
        
        var houses =  res.data
       
        for (var i = 0; i < houses.length; i++) {
          
          houses[i].houserent = houses[i].houserent.toFixed(2)
        }
		
        that.setData({
          houses: houses,
          itemcnt: houses.length
        })
        
        wx.stopPullDownRefresh();
        wx.hideLoading({})
      }
    })
  },

  toupper:function(){
    console.log("触发了toupper");
   },

/*点击搜索*/
  searchClick:function (e)  {
    var url = "http://172.20.10.6:8888/api/house/resources/list/1 "
    wx.request({
      url: url,
      method: "GET",
      success(res) {
        console.log(res.data)
        var houses
        var arr =  res.data
       
        for (var i = 0; i < arr.length; i++) {
          if(houses[i].housetype==keyword)
            arr.push(houses[i])
          houses[i].houserent = houses[i].houserent.toFixed(2)
        }
		
        that.setData({
          houses: arr,
          itemcnt: houses.length
        })
        
        wx.stopPullDownRefresh();
        wx.hideLoading({})
      }
    })
   
    that.getData()
  },

/*点击发布*/
  OnPostHouseClick: function (e) {
    wx.navigateTo({
      url: '../post_house/post_house',
    })
  },





  OnSearchInput: function (e) {
    var s = e.detail.value
    s.replace('%', '')
    s.replace('_', '') // 删除sql的通配符
    that.setData({
      keyword: s
    })
  },  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    that.getData();
    wx.hideNavigationBarLoading();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var temp = that.data.houses;
    // 获取后面二十条
    wx.showLoading({
      title: '加载中',
    })
    var url =  "http://172.20.10.6:8888/api/house/resources/list/1 "
    wx.request({
      url: url,
      
      success(res) {
        console.log(res.data)
        if (res.data.length == 0) { // 没有新数据
          wx.showToast({
            title: '没有更多数据了',
          })
        } else {
          var house = res.data
   
          var houses = temp.concat(house) // 将获取的新数据拼接到原列表上
          that.setData({ // 更新渲染页面
            houses: houses,
            itemcnt: that.data.itemcnt + 20
          })
          wx.hideLoading({})
        }
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})