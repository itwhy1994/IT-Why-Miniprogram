//index.js

Page({
  data: {
    user: {},
  },

  bindtap_niceshopping (){
    wx.navigateToMiniProgram({
      appId: "wx28ba0ae0d2f6a3b5",
    })
  },

  bindtap_cdia (){
    wx.navigateToMiniProgram({
      appId: "wxaf6ab8425da5ac87",
    })
  },

  onLoad: function() {
    let that = this
    const db = wx.cloud.database()
    db.collection("user").where({
      // _openid
    }).limit(1).get().then(res => {
      if (res.errMsg == "collection.get:ok") {
        if (res.data.length) {
          that.setData({
            user: res.data[0],
          })
        }
        else {
          db.collection("user").add({
            data: {
              opencount: 0,
            }
          })
        }
      }
      else{
        console.log("user get fail!")
      }
    })

  },


})
