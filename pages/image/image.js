// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },
  getPhoto(){
    wx.chooseImage({
      success: (res) => {
        const path = res.tempFilePaths[0]
        this.setData({
          imagePath:path
        })
      },
    })
  },
  tellme(){
    console.log('图片加载完成')
  }
})