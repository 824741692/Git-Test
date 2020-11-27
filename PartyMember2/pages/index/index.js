// index.js
// 获取应用实例
var app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        imagePath: app.globalData.imagePath, // 图片路径
        active: 0,
        map: { // 地图属性
            coordinate: { // 坐标
                latitude: 40.002607, // 中心纬度
                longitude: 116.587847 // 中心经度
            },
            scale: 16, // 缩放级别,取值范围为3-20
            markers: [ // 标记点,用于在地图上显示标记的位置
                {
                    id: 0, // 标记点id,marker点击事件回调会返回此id
                    latitude: 40.002607, // 纬度(浮点数,范围 -90 ~ 90)
                    longitude: 116.487847, // 经度(浮点数,范围 -180 ~ 180)
                    title: "软件学院党总支", // 标注点名,点击时显示,callout存在时将被忽略
                    iconPath: "/images/flag.png", // 显示的图标,项目目录下的图片路径,支持相对路径写法,以'/'开头则表示相对小程序根目录;也支持临时路径和网络图片(2.3.0)
                    rotate: 0, // 旋转角度,顺时针旋转的角度,范围 0 ~ 360,默认为0
                    alpha: 1, // 标注的透明度,默认1,无透明,范围 0 ~ 1
                    width: 25, // 标注图标宽度(默认为图片实际宽度)
                    height: 25, // 标注图标高度(默认为图片实际高度)
                    callout: { // 自定义标记点上方的气泡窗口
                        content: "软件学院党总支", // 文本
                        color: "#636162", // 文本颜色
                        fontSize: 14, // 文字大小
                        borderRadius: 10, // 边框圆角
                        borderWidth: 1, // 边框宽度
                        borderColor: "#fff", // 边框颜色
                        bgColor: "#fff", // 背景色
                        padding: 5, // 文本边缘留白
                        display: "ALWAYS", // 'BYCLICK':点击显示; 'ALWAYS':常显
                        textAlign: "center" // 文本对齐方式,有效值: left, right, center
                    }
                }
            ],
            polyline: [ // 路线,指定一系列坐标点,从数组第一项连线至最后一项
                {
                    points: [ // 经纬度数组
                        {
                            latitude: 40.006822,
                            longitude: 116.481451
                        },
                        {
                            latitude: 40.002607,
                            longitude: 116.487847
                        },
                        {
                            latitude: 40.006103,
                            longitude: 116.496507
                        },
                        {
                            latitude: 40.002607,
                            longitude: 116.587847
                        }
                    ],
                    color: "#000000AA", // 线的颜色(8位16进制表示,后两位表示alpha值)
                    width: 2, // 线的宽度
                    dottedLine: true, // 是否虚线,默认:false
                    arrowLine: false, // 带箭头的线,默认false,开发者工具暂不支持该属性
                    arrowIconPath: "", // 更换箭头图标,在 arrowLine 为 true 时生效
                    borderColor: "#9e9e9e", // 线的边框颜色
                    borderWidth: 2 // 线的厚度
                }
            ],
            circles: [ // 在地图上显示圆
                {
                    latitude: 40.002607, // 纬度(浮点数,范围 -90 ~ 90)
                    longitude: 116.587847, // 经度(浮点数,范围 -180 ~ 180)
                    color: "#ee7788aa", // 描边的颜色(8位16进制表示,后两位表示alpha值)
                    fillColor: "#7cb5ec88", // 填充的颜色(8位16进制表示,后两位表示alpha值)
                    radius: 50, // 半径
                    strokeWidth: 1 // 描边的宽度
                }
            ],
            controls: [ // 在地图上显示控件,控件不随着地图移动.即将废弃,请使用cover-view
                {
                    id: 1, // 控件id,在控件点击事件回调会返回此id
                    position: { // 控件在地图的位置
                        left: 0, // 距离地图的左边界多远,默认为0
                        top: 300 - 50, // 距离地图的上边界多远,默认为0
                        width: 50, // 控件宽度,默认为图片宽度
                        height: 50 // 控件高度,默认为图片高度
                    },
                    iconPath: '/images/map.png', // 显示的图标,项目目录下的图片路径,支持相对路径写法,以'/'开头则表示相对小程序根目录;也支持临时路径
                    clickable: true // 是否可点击,默认不可点击
                }
            ],
            showLocation: true, // 默认值:false,显示带有方向的当前定位点
            enable3D: true, // 默认值:false,展示3D楼块(工具暂不支持)
            showCompass: true, // 默认值:false,显示指南针
            subkey: '5C2BZ-JDXCP-TGTDQ-LN6PS-TFLBE-3LF3W' // 个性化地图使用的key
        },
        info: { // 联系信息
            department: "软件学院党总支",
            name: "黄国辉",
            phone: "13823161198",
            address: "广东省深圳市龙岗区龙翔街道2188号科技楼1707"
        },
    },

    controltap: function() {
        let plugin = requirePlugin('routePlan');
        let key = '5C2BZ-JDXCP-TGTDQ-LN6PS-TFLBE-3LF3W'; //使用在腾讯位置服务申请的key
        let referer = 'PartyMember'; //调用插件的app的名称
        let endPoint = JSON.stringify({ //终点
            'name': '北京西站',
            'latitude': 39.894806,
            'longitude': 116.321592
        });
        wx.navigateTo({
            url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
        });
    },

    markertap: function() {
        let plugin = requirePlugin('routePlan');
        let key = '5C2BZ-JDXCP-TGTDQ-LN6PS-TFLBE-3LF3W'; //使用在腾讯位置服务申请的key
        let referer = 'PartyMember'; //调用插件的app的名称
        let endPoint = JSON.stringify({ //终点
            'name': '北京西站',
            'latitude': 39.894806,
            'longitude': 116.321592
        });
        wx.navigateTo({
            url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
        });
    },

    cardSwiper: function() {
        wx.request({
            url: 'https://47.106.253.230:8012/lzy-agent-api/api/v1/ad/list',
            data: {},
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
                console.log('开发者服务器返回的数据', res.data)
                let list = res.data.data.list
                this.setData({
                    adList: list
                })
            }
        })
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