siteapp = angular.module 'siteapp', []
siteapp.controller 'SiteController', ($scope) -> 
    $scope.sites = [
        {
            title: 'everydaySites'
            content: [
                {'href': 'http://news.ycombinator.com', 'name': 'Hacker News', 'category': '技术 & 行业', 'info': '黑客和创业: 请认准，教父的网站'}
                {'href': 'http://highscalability.com/', 'name': 'highscalability', 'category': '', 'info': ''}
                {'href': 'http://www.infoq.com/cn/', 'name': 'InfoQ', 'category': '技术 前沿', 'info': '如果你想成为架构师'}
                {'href': 'http://www.huxiu.com', 'name': '虎嗅', 'category': '', 'info': ''}
                {'href': 'http://www.tmtpost.com', 'name': '钛媒体', 'category': '', 'info': ''}
                {'href': 'http://baijia.baidu.com', 'name': '百度百家', 'category': '', 'info': ''}
                {'href': 'http://www.iresearch.cn', 'name': '艾瑞', 'category': '', 'info': ''}
                {'href': 'http://www.geekpark.net', 'name': '极客公园', 'category': '', 'info': ''}
                {'href': 'https://github.com/', 'name': 'GitHub', 'category': '', 'info': ''}
            ]
        }, {
            title: 'techSites'
            content: [
                {'href': 'http://news.ycombinator.com', 'name': 'Hacker News', 'category': '技术 & 行业', 'info': '黑客和创业: 请认准，教父的网站'}
                {'href': 'http://news.dbanotes.net/', 'name': '小道消息', 'category': '技术', 'info': ''}
                {'href': 'http://www.quora.com/', 'name': 'quora', 'category': '技术', 'info': ''}
                {'href': 'http://toutiao.io/', 'name': '开发者头条', 'category': '技术', 'info': ''}
                {'href': 'http://weekly.manong.io/issues/', 'name': '码农周刊', 'category': '', 'info': ''}
                {'href': 'http://www.ruanyifeng.com/blog/', 'name': '阮一峰', 'category': '', 'info': ''}
                {'href': 'http://www.ituring.com.cn/minibook', 'name': '图灵社区', 'category': '', 'info': ''}
                {'href': 'http://hackerspaces.org/wiki/Hackerspaces', 'name': 'HackerSpaces', 'category': '技术', 'info': ''}
                {'href': 'http://stackoverflow.com', 'name': 'StackOverflow', 'category': '技术', 'info': '码农届的知乎，神一般的存在'}
                {'href': 'http://www.sitepoint.com/', 'name': 'sitepoint', 'category': '技术', 'info': ''}
                {'href': 'http://www.dzone.com/', 'name': 'dzone', 'category': '技术', 'info': ''}
                {'href': 'http://bytes.com/', 'name': 'bytes', 'category': '技术', 'info': ''}
                {'href': 'http://stackexchange.com', 'name': 'StackExchange', 'category': '技术', 'info': '比StackOverflow更牛逼'}
                {'href': 'http://www.infoq.com/cn/', 'name': 'InfoQ', 'category': '技术 前沿', 'info': '如果你想成为架构师'}
                {'href': 'http://www.51cto.com/', 'name': '51CTO', 'category': '', 'info': ''}
                {'href': 'http://coolshell.cn/', 'name': 'CoolShell', 'category': '', 'info': ''}
                {'href': 'http://blog.xiqiao.info/', 'name': '西乔(轻松一下)', 'category': '', 'info': ''}
                {'href': 'http://www.matrix67.com/blog/', 'name': 'matrix67', 'category': '', 'info': ''}
                {'href': 'http://www.changhai.org/', 'name': '卢昌海', 'category': '', 'info': ''}
                {'href': 'http://highscalability.com/', 'name': 'highscalability', 'category': '', 'info': ''}
                {'href': 'http://jm-blog.aliapp.com/', 'name': '阿里中间件团队', 'category': '', 'info': ''}
                {'href': 'http://ued.taobao.org/blog/', 'name': '淘宝UED', 'category': '', 'info': ''}
                {'href': 'http://www.alloyteam.com/', 'name': '腾讯Web前端团队', 'category': '', 'info': ''}
                {'href': 'http://www.tuicool.com/mags/', 'name': '编程狂人', 'category': '', 'info': ''}
                {'href': 'http://www.tuicool.com/mags/design', 'name': '设计匠艺', 'category': '', 'info': ''}
                {'href': 'http://www.valleytalk.org/', 'name': '弯曲评论', 'category': '', 'info': ''}
                {'href': 'http://www.geekfan.net/', 'name': 'GeekFan', 'category': '', 'info': ''}
                {'href': 'http://teahour.fm/', 'name': 'teahour.fm', 'category': '', 'info': ''}
                {'href': 'http://ourjs.com/', 'name': 'ourjs', 'category': '', 'info': ''}
                {'href': 'http://www.reddit.com/r/javascript', 'name': 'reddit/javascript', 'category': '', 'info': ''}
                {'href': 'http://www.reddit.com/r/python', 'name': 'reddit/python', 'category': '', 'info': ''}
                {'href': 'http://www.reddit.com/r/golang', 'name': 'reddit/go', 'category': '', 'info': ''}
                {'href': 'http://www.reddit.com/r/webdev', 'name': 'reddit/webdev', 'category': '', 'info': ''}
                {'href': 'http://genius.com/', 'name': 'genius', 'category': '', 'info': ''}
                {'href': 'https://platform.html5.org/', 'name': 'html5', 'category': '', 'info': ''}
                {'href': 'http://pycoders.com/archive/', 'name': 'pycoders', 'category': '', 'info': ''}
            ] 
        }, {
            title: 'mediaSites'
            content: [
                {'href': 'http://www.woshipm.com', 'name': '人人都是产品经理', 'category': '', 'info': ''}
                {'href': 'http://www.huxiu.com', 'name': '虎嗅', 'category': '', 'info': ''}
                {'href': 'http://www.cyzone.cn/', 'name': '创业帮', 'category': '', 'info': ''}
                {'href': 'http://www.iheima.com/', 'name': '创业家', 'category': '', 'info': ''}
                {'href': 'http://www.36kr.com', 'name': '36KR', 'category': '', 'info': ''}
                {'href': 'http://www.businessinsider.com/', 'name': 'BI', 'category': '', 'info': ''}
                {'href': 'http://www.pingwest.com', 'name': 'PingWest', 'category': '', 'info': ''}
                {'href': 'http://www.tmtpost.com', 'name': '钛媒体', 'category': '', 'info': ''}
                {'href': 'http://www.bianews.com', 'name': '鞭牛士', 'category': '', 'info': ''}
                {'href': 'http://www.yixieshi.com', 'name': '互联网一些事', 'category': '', 'info': ''}
                {'href': 'http://www.alibuybuy.com/', 'name': '互联玩的那些事', 'category': '', 'info': ''}
                {'href': 'http://www.geekpark.net', 'name': '极客公园', 'category': '', 'info': ''}
                {'href': 'http://www.iimedia.cn/', 'name': '艾媒网', 'category': '', 'info': ''}
                {'href': 'http://baijia.baidu.com', 'name': '百度百家', 'category': '', 'info': ''}
                {'href': 'http://www.iresearch.cn', 'name': '艾瑞', 'category': '', 'info': ''}
                {'href': 'http://www.kuailiyu.com', 'name': '快鲤鱼', 'category': '', 'info': ''}
                {'href': 'http://zaodula.com', 'name': '早读啦', 'category': '', 'info': ''}
            ]
        }, {
            title: 'misc'
            content: [
                {'href': 'http://yedingding.com/', 'name': 'Dingding Ye', 'category': '', 'info': ''}
                {'href': 'http://phtv.ifeng.com/program/qqsrx', 'name': '三人行', 'category': '', 'info': ''}
            ]
        }, {
            title: 'study'
            content: [
                {'href': 'http://readfree.me/', 'name': 'Read Free', 'category': '', 'info': ''}
                {'href': 'http://www.jikexueyuan.com/', 'name': '极客学院', 'category': '', 'info': ''}
                {'href': 'http://study.163.com', 'name': '网易云课堂', 'category': '', 'info': ''}
                {'href': 'https://www.coursera.org/', 'name': 'coursera', 'category': '', 'info': ''}
                {'href': 'http://open.163.com/', 'name': '网易公开课', 'category': '', 'info': ''}
                {'href': 'https://www.udemy.com/', 'name': 'udemy', 'category': '', 'info': ''}
                {'href': 'http://www.duobei.com', 'name': '多贝', 'category': '', 'info': ''}
                {'href': 'http://speakerdeck.com', 'name': 'speakerdeck', 'category': '', 'info': ''}
            ]
        }, {
            title: 'tools'
            content: [
                {'href': 'http://apistore.baidu.com/', 'name': 'Api Store', 'category': '', 'info': ''},
                {'href': 'http://www.devstore.cn/', 'name': 'Dev Store', 'category': '', 'info': ''},
                {'href': 'http://devdocs.io/', 'name': 'Dev Docs', 'category': '', 'info': ''},
                {'href': 'https://www.taskworld.com/', 'name': 'TaskWorld', 'category': '', 'info': ''},
                {'href': 'https://app.asana.com/', 'name': 'Asana', 'category': '', 'info': ''},
                {'href': 'https://hackpad.com/', 'name': 'Hackpad', 'category': '', 'info': ''},
                {'href': 'http://www.cheat-sheets.org/', 'name': 'Cheat-Sheets', 'category': '', 'info': ''},
                {'href': 'http://www.w3.org/Protocols/', 'name': 'W3C', 'category': '', 'info': ''},
            ]
        }, {
            title: 'wearable'
            content: [
                {'href': 'http://mashable.com/category/wearable-tech/', 'name': 'mashable', 'category': '', 'info': ''},
                {'href': 'http://www.themakers.cn/', 'name': '创客星球', 'category': '', 'info': ''},
                {'href': 'http://www.bjmakerspace.com/', 'name': '创客空间', 'category': '', 'info': ''},
                {'href': 'http://www.eepw.com.cn/', 'name': '电子产品世界', 'category': '', 'info': ''},
            ]
        }, {
            title: 'cloud'
            content: [
                {'href': 'https://www.ablecloud.cn/', 'name': 'ablecloud', 'category': '', 'info': ''},
                {'href': 'http://www.ucloud.cn/', 'name': 'ucloud', 'category': '', 'info': ''},
                {'href': 'https://leancloud.cn/', 'name': 'leancloud', 'category': '', 'info': ''},
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
    
