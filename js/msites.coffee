siteapp = angular.module 'siteapp', []
siteapp.controller 'SiteController', ($scope) -> 
    $scope.sites = [
        {
            title: '问诊'
            content: [
                {'href': 'http://www.myzx.cn/', 'name': '名医在线', 'category': '问答', 'info': ''}
                {'href': 'http://xingren.com/', 'name': '杏仁医生', 'category': '', 'info': ''}
                {'http://www.111.com.cn/', 'name': '掌上药店', 'category': '', 'info': ''}
                {'http://yz.111.com.cn/', 'name': '易诊', 'category': '', 'info': ''}
                {'http://dxy.com/', 'name': '丁香医生', 'category': '', 'info': ''}
                {'http://www.familydoctor.com.cn/', 'name': '家庭医生在线', 'category': '', 'info': ''}
                {'http://ask.39.net/', 'name': '39问医生', 'category': '', 'info': ''}
                {'http://www.quyiyuan.com/', 'name': '去医院', 'category': '', 'info': ''}
                {'http://www.qpgjk.com/', 'name': '青苹果', 'category': '', 'info': ''}
                {'http://www.kangda.cn/', 'name': '康达预诊', 'category': '', 'info': ''}
                {'http://www.lehoba.com/', 'name': '中医乐活吧', 'category': '', 'info': ''}
                {'http://www.yeekang.com/', 'name': '宜康网', 'category': '', 'info': ''}
                {'http://jiuyibao.hk515.com.cn/', 'name': '就医宝', 'category': '', 'info': ''}
                {'http://taoyi.qqyy.com/', 'name': '掌上淘医', 'category': '', 'info': ''}
                {'http://www.huanyou.me/', 'name': '家庭健康卫士', 'category': '', 'info': ''}
                {'http://www.yihu.com/', 'name': '健康之路', 'category': '', 'info': ''}
                {'http://www.haoyi365.cn/', 'name': '掌上好医', 'category': '', 'info': ''}
                {'http://www.yijiankangv.com/', 'name': '壹健康', 'category': '', 'info': ''}
                {'http://www.daanhealth.com/', 'name': '达安健康', 'category': '', 'info': ''}
                {'http://www.91160.com/', 'name': '就医160', 'category': '', 'info': ''}
                {'http://www.91160.com/', 'name': '就医160', 'category': '', 'info': ''}
            ]
        },{
            title: '门户'
            content: [
                {'href': 'http://www.39.net/', 'name': '39健康网', 'category': '', 'info': ''}
                {'href': 'http://www.iijk.net/', 'name': '爱健康', 'category': '', 'info': ''}
                {'href': 'http://www.qqyy.com/', 'name': '全球医院', 'category': '', 'info': ''}
                {'href': 'http://www.fx120.net/', 'name': '放心医苑', 'category': '', 'info': ''}
                {'href': 'http://www.yx129.com/', 'name': '医享网', 'category': '', 'info': ''}
            ]
        },{
            title: '垂直就医'
            content: [
                {'href': 'http://www.xingrong.cn/', 'name': '形容网', 'category': '', 'info': ''}
                {'href': 'http://www.ziseyiliao.com/', 'name': '紫色医疗', 'category': '', 'info': ''}
                {'href': '#', 'name': '完美诊所', 'category': '', 'info': ''}
                {'href': 'http://linjiayisheng.com/', 'name': '邻家医生', 'category': '', 'info': ''}
                {'href': 'http://www.zhenyoumei.com/', 'name': '真优美', 'category': '', 'info': ''}
                {'href': 'http://www.zxzx.me', 'name': '整吧', 'category': '', 'info': ''}
                {'href': 'http://www.51aiya.com/', 'name': '爱牙', 'category': '', 'info': ''}
                {'href': 'http://51haoyayi.com/', 'name': '好牙医', 'category': '', 'info': ''}
            ]
        },{
            title: '健康管理'
            content: [
                {'href': 'http://www.xingrong.cn/', 'name': '形容网', 'category': '', 'info': ''}
            ]
        },{
            title: '媒体'
            content: [
                {'href': 'http://www.xjk.me/', 'name': '新健康', 'category': '', 'info': ''}
                {'href': 'http://www.cn-healthcare.com/', 'name': '健康界', 'category': '', 'info': ''}
                {'href': 'http://www.menet.com.cn/', 'name': '米内网', 'category': '', 'info': ''}
                {'href': 'http://www.yxj.org.cn/', 'name': '医学界', 'category': '', 'info': ''}
                {'href': 'http://www.bioon.com/', 'name': '生物谷', 'category': '', 'info': ''}
                {'href': 'http://www.ccmtv.cn/', 'name': '临床频道', 'category': '', 'info': ''}
            ]
        }
    ]

    #console.log JSON.stringify $scope.sites
    # alternative
    #myref = new Firebase "https://devmsg.firebaseio.com/"
    #myref.child('sites').on('value', ((data)->
    #    #console.log JSON.stringify data.val()
    #    $scope.sites = data.val()
    #    $scope.$apply()
    #))
    
