// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowTime:new Date().toLocaleString(),
    age:3,
    score:50,
    isAction:true,
    titles: ['内衣', '裤子', '帽子', '外套']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleAddAge(){
    this.setData({
      age : this.data.age + 5
    })
  },
  handleAddScore(){
    this.setData({
      score:this.data.score + 10
    })
  },
  handleChangeColor(){
    this.setData({
      isAction : !this.data.isAction
    })
  },
  getMessage(event){
    
    const dataset = event.currentTarget.dataset
    const index = dataset.index
    const title = dataset.title
    console.log(index, title)
  }
})