// 素质肖像页面

const app = getApp() // 获取应用实例

Page({

    /**
     * 页面的初始数据
     */
    data: {
        menus: [{ // 菜单列表
                icon: '/images/jiangli.png',
                url: '/pages/score/score',
                title: '领取积分'
            },
            {
                icon: '/images/bianmaguize.png',
                url: '',
                title: '积分规则'
            },
            {
                icon: '/images/yonghu.png',
                url: '',
                title: '更换肖像'
            },
            {
                icon: '/images/gifts.png',
                url: '',
                title: '领取积分'
            },
            {
                icon: '/images/fenxiang-1.png',
                url: '/pages/share/share',
                title: '分享肖像'
            }
        ],
        tabActive: 0, // 默认值:0,当前激活的标签索引
        gongGeList: [ // 宫格列表
            {
                url: '../gainPoint/gainPoint',
                iconClass: 'text-orange',
                icon: 'cuIcon-recharge',
                title: '领取积分',
                needValidation: true
            },
            {
                url: '../pointRules/pointRules',
                iconClass: 'text-purple',
                icon: 'cuIcon-edit',
                title: '积分规则',
                needValidation: false
            },
            {
                url: '../partyfund/partyfund',
                iconClass: 'text-cyan',
                icon: 'cuIcon-peoplefill',
                title: '更换肖像',
                needValidation: true
            },
            {
                url: '../pictureChange/pictureChange',
                iconClass: 'text-green',
                icon: 'cuIcon-unlock',
                title: '积分奖励',
                needValidation: true
            },
            {
                url: '../testshare/testshare',
                iconClass: 'text-red',
                icon: 'cuIcon-share',
                title: '分享肖像',
                needValidation: true
            }
        ],
        totalScore: '6', // 总积分
        scoreList: [ // 加分项列表
            {
                name: '思想先进',
                score: '+2'
            },
            {
                name: '专业过硬',
                score: '+2'
            },
            {
                name: '乐于奉献',
                score: '+2'
            }
        ]
    },
    toList(event) { // 跳转到对应的功能,宫格列表以及执行相关操作
        let url = event.currentTarget.dataset.url
        navigation.navigateTo(url) // 页面跳转
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})