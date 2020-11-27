// components/custom/active-card.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: '未传递标题'
        },
        src: {
            type: String,
            value: ''
        },
        url: {
            type: String,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 跳转
        goTo() {
            console.log('url', this.data.url)
            wx.navigateTo({
                url: this.data.url
            })
        }
    }
})