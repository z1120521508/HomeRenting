// pages/home/home.js
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
  },

/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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
    var url = "http://xx.com/api/house/hid"
    
    wx.request({
      url: url,
      method: "GET",
      header: {  
        'content-type': 'application/json'  
      },
      success(res) {
        console.log(res.data)
        var arr = res.data
		
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].ads.length > 30) {
            arr[i].ads = arr[i].ads.substring(0, 28) + " …"
          }

          var s = arr[i]['type']

          var end = arr[i]['type'].length
          if (arr[i]['type'].length > 12) {
            end = 13
            for (var j = end; j >= 0; j--)
              if (s[j] == '，') {
                end = j;
                break;
              }
          }
          arr[i]['type'] = s.substring(0, end).split('，')
          arr[i].rent = arr[i].rent.toFixed(2)
        }
		
        that.setData({
          houses: arr,
          itemcnt: arr.length
        })
        wx.stopPullDownRefresh();
        wx.hideLoading({})
      }
    })
  },

/*点击搜索*/
  searchClick:function (e)  {
    that.setData({
      houses: []
    })
    that.getData()
  },

/*点击发布*/
  OnPostHouseClick: function (e) {
    wx.navigateTo({
      url: '../post_house/post_house',
    })
  },

 /*item 点击*/
  onItemClick: function (event) {
    var id = event.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: "../homeDetail/homeDetail?id=" + id
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
    var url = "你的服务器链接"
    wx.request({
      url: url,
      success(res) {
        if (res.data.length == 0) { // 没有新数据
          wx.showToast({
            title: '没有更多数据了',
          })
        } else {
          var arr = res.data
          for (var i = 0; i < arr.length; i++) { // 对数据处理
            if (arr[i].ads.length > 30) {
              arr[i].ads = arr[i].ads.substring(0, 28) + " …"
            }

            var s = arr[i]['type']

            var end = arr[i]['type'].length
            if (arr[i]['type'].length > 12) {
              end = 13
              for (var j = end; j >= 0; j--)
                if (s[j] == '，') {
                  end = j;
                  break;
                }
            }
            arr[i]['type'] = s.substring(0, end).split('，')
            arr[i].rent = arr[i].rent.toFixed(2)
          }
          var hs = temp.concat(arr) // 将获取的新数据拼接到原列表上
          that.setData({ // 更新渲染页面
            houses: hs,
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