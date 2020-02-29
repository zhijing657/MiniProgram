// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Array,
      value:[]
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event){
      const id = event.currentTarget.dataset.index
      this.setData({
        currentIndex: id
      })

      //通知页面内部的点击事件
      this.triggerEvent('itemclick',{id,title:this.properties.item[id]},{})
    }
  }
})
