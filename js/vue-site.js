(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var data = [{
    title: '资讯',
    content: [{ 'href': 'http://www.vcbeat.net/', 'name': '动脉网', 'category': '', 'info': '' }, { 'href': 'http://www.hit180.com/', 'name': 'hit180', 'category': '', 'info': '' }, { 'href': 'http://www.39.net/', 'name': '39健康网', 'category': '', 'info': '' }, { 'href': 'http://www.iijk.net/', 'name': '爱健康', 'category': '', 'info': '' }, { 'href': 'http://www.qqyy.com/', 'name': '全球医院', 'category': '', 'info': '' }, { 'href': 'http://www.fx120.net/', 'name': '放心医苑', 'category': '', 'info': '' }, { 'href': 'http://www.yx129.com/', 'name': '医享网', 'category': '', 'info': '' }]
}, {
    title: '问诊',
    content: [{ 'href': 'http://www.myzx.cn/', 'name': '名医在线', 'category': '问答', 'info': '' }, { 'href': 'http://xingren.com/', 'name': '杏仁医生', 'category': '', 'info': '' }, { 'href': 'http://www.111.com.cn/', 'name': '掌上药店', 'category': '', 'info': '' }, { 'href': 'http://yz.111.com.cn/', 'name': '易诊', 'category': '', 'info': '' }, { 'href': 'http://dxy.com/', 'name': '丁香医生', 'category': '', 'info': '' }, { 'href': 'http://www.familydoctor.com.cn/', 'name': '家庭医生在线', 'category': '', 'info': '' }, { 'href': 'http://ask.39.net/', 'name': '39问医生', 'category': '', 'info': '' }, { 'href': 'http://www.quyiyuan.com/', 'name': '去医院', 'category': '', 'info': '' }, { 'href': 'http://www.qpgjk.com/', 'name': '青苹果', 'category': '', 'info': '' }, { 'href': 'http://www.kangda.cn/', 'name': '康达预诊', 'category': '', 'info': '' }, { 'href': 'http://www.lehoba.com/', 'name': '中医乐活吧', 'category': '', 'info': '' }, { 'href': 'http://www.yeekang.com/', 'name': '宜康网', 'category': '', 'info': '' }, { 'href': 'http://jiuyibao.hk515.com.cn/', 'name': '就医宝', 'category': '', 'info': '' }, { 'href': 'http://taoyi.qqyy.com/', 'name': '掌上淘医', 'category': '', 'info': '' }, { 'href': 'http://www.huanyou.me/', 'name': '家庭健康卫士', 'category': '', 'info': '' }, { 'href': 'http://www.yihu.com/', 'name': '健康之路', 'category': '', 'info': '' }, { 'href': 'http://www.haoyi365.cn/', 'name': '掌上好医', 'category': '', 'info': '' }, { 'href': 'http://www.yijiankangv.com/', 'name': '壹健康', 'category': '', 'info': '' }, { 'href': 'http://www.daanhealth.com/', 'name': '达安健康', 'category': '', 'info': '' }, { 'href': 'http://www.91160.com/', 'name': '就医160', 'category': '', 'info': '' }, { 'href': 'http://www.91160.com/', 'name': '就医160', 'category': '', 'info': '' }]
}, {
    title: '垂直就医',
    content: [{ 'href': 'http://www.xingrong.cn/', 'name': '形容网', 'category': '', 'info': '' }, { 'href': 'http://www.ziseyiliao.com/', 'name': '紫色医疗', 'category': '', 'info': '' }, { 'href': '#', 'name': '完美诊所', 'category': '', 'info': '' }, { 'href': 'http://linjiayisheng.com/', 'name': '邻家医生', 'category': '', 'info': '' }, { 'href': 'http://www.zhenyoumei.com/', 'name': '真优美', 'category': '', 'info': '' }, { 'href': 'http://www.zxzx.me', 'name': '整吧', 'category': '', 'info': '' }, { 'href': 'http://www.51aiya.com/', 'name': '爱牙', 'category': '', 'info': '' }, { 'href': 'http://51haoyayi.com/', 'name': '好牙医', 'category': '', 'info': '' }]
}, {
    title: '健康管理',
    content: [{ 'href': 'http://www.xingrong.cn/', 'name': '形容网', 'category': '', 'info': '' }]
}, {
    title: '服务',
    content: [{ 'href': 'http://www.5uyisheng.com/', 'name': '5U家庭医生', 'category': '', 'info': '' }, { 'href': 'http://www.ememed.net/', 'name': '薏米医生', 'category': '', 'info': '' }, { 'href': 'http://www.distinctclinic.com/', 'name': '卓正医疗', 'category': '', 'info': '' }, { 'href': 'http://www.jpmedical.com.cn/', 'name': '佳平医疗', 'category': '', 'info': '' }, { 'href': 'http://www.jpmedical.com.cn/', 'name': '佳平医疗', 'category': '', 'info': '' }]
}, {
    title: '媒体',
    content: [{ 'href': 'http://www.xjk.me/', 'name': '新健康', 'category': '', 'info': '' }, { 'href': 'http://www.cn-healthcare.com/', 'name': '健康界', 'category': '', 'info': '' }, { 'href': 'http://www.menet.com.cn/', 'name': '米内网', 'category': '', 'info': '' }, { 'href': 'http://www.yxj.org.cn/', 'name': '医学界', 'category': '', 'info': '' }, { 'href': 'http://www.bioon.com/', 'name': '生物谷', 'category': '', 'info': '' }, { 'href': 'http://www.ccmtv.cn/', 'name': '临床频道', 'category': '', 'info': '' }]
}, {
    title: '药店',
    content: [{ 'href': 'http://www.j1.com/', 'name': '健一网', 'category': '', 'info': '' }, { 'href': 'http://www.ehaoyao.com/', 'name': '好药师', 'category': '', 'info': '' }, { 'href': 'http://www.ehaoyao.com/', 'name': '好药师', 'category': '', 'info': '' }, { 'href': 'http://www.800pharm.com/', 'name': '八百方', 'category': '', 'info': '' }, { 'href': 'http://www.950958.com/', 'name': '医药平台', 'category': '', 'info': '' }, { 'href': 'http://www.111.com.cn/', 'name': '壹药网', 'category': '', 'info': '' }, { 'href': 'http://www.aixin666.com/', 'name': '爱心医药网', 'category': '', 'info': '' }, { 'href': 'http://www.yaofang.cn/', 'name': '药房网', 'category': '', 'info': '' }, { 'href': 'http://www.yaosuda.com/', 'name': '药速达', 'category': '', 'info': '' }, { 'href': 'http://www.mypharma.com/', 'name': '我的医药网', 'category': '', 'info': '' }, { 'href': '#', 'name': '掌上药店', 'category': '', 'info': '' }, { 'href': 'http://www.edoctor.cn/', 'name': 'eDoctor', 'category': '', 'info': '' }]
}, {
    title: '健康管理',
    content: [{ 'href': 'http://www.51jkfw.com/', 'name': '51健康助手', 'category': '', 'info': '' }, { 'href': 'http://www.360jiyin.com/', 'name': '360基因', 'category': '', 'info': '' }, { 'href': 'http://www.jmdna.com/', 'name': '解码DNA', 'category': '', 'info': '' }, { 'href': 'http://www.simpgene.com/', 'name': '心宝基因', 'category': '', 'info': '' }, { 'href': 'http://www.genomics.cn/index', 'name': '华大基因', 'category': '', 'info': '' }, { 'href': 'http://www.sh-ughealth.com/', 'name': '上海联合基因', 'category': '', 'info': '' }]
}];

module.exports = data;

},{}],2:[function(require,module,exports){
'use strict';

var techData = [{
    title: 'everydaySites',
    content: [{ 'href': 'http://news.ycombinator.com', 'name': 'Hacker News', 'category': '技术 & 行业', 'info': '黑客和创业: 请认准，教父的网站' }, { 'href': 'http://hackernewsbooks.com/', 'name': 'Hacker News Book', 'category': '技术 & 行业', 'info': '黑客和创业: 请认准，教父的网站' }, { 'href': 'http://g.zhutao.xyz', 'name': 'google', 'category': '', 'info': '' }, { 'href': 'http://highscalability.com/', 'name': 'highscalability', 'category': '', 'info': '' }, { 'href': 'http://www.huxiu.com', 'name': '虎嗅', 'category': '', 'info': '' }, { 'href': 'http://www.36kr.com', 'name': '36KR', 'category': '', 'info': '' }, { 'href': 'http://www.infoq.com/cn/', 'name': 'InfoQ', 'category': '技术 前沿', 'info': '如果你想成为架构师' }, { 'href': 'http://www.tmtpost.com', 'name': '钛媒体', 'category': '', 'info': '' }, { 'href': 'http://baijia.baidu.com', 'name': '百度百家', 'category': '', 'info': '' }, { 'href': 'http://www.iresearch.cn', 'name': '艾瑞', 'category': '', 'info': '' }, { 'href': 'http://www.geekpark.net', 'name': '极客公园', 'category': '', 'info': '' }, { 'href': 'http://www.shurufa.me/', 'name': '书入法', 'category': '', 'info': '' }, { 'href': 'http://pmdaniu.com/', 'name': '产品大牛', 'category': '', 'info': '' }, { 'href': 'http://www.runoob.com/', 'name': '前端学习', 'category': '', 'info': '' }, { 'href': 'http://fm.museekly.com/', 'name': 'soundcloud', 'category': '', 'info': '' }, { 'href': 'https://www.crunchbase.com/', 'name': 'crunchbase', 'category': '', 'info': '' }, { 'href': 'http://techcrunch.com/', 'name': 'techcrunch', 'category': '', 'info': '' }, { 'href': 'http://www.iheima.com/', 'name': '黑马网', 'category': '', 'info': '' }]
}, {
    title: 'bots',
    content: [{ 'href': 'http://www.botsfloor.com/botstash/', 'name': 'botstash', 'category': '', 'info': '' }]
}, {
    title: 'techSites',
    content: [{ 'href': 'http://news.ycombinator.com', 'name': 'Hacker News', 'category': '技术 & 行业', 'info': '黑客和创业: 请认准，教父的网站' }, { 'href': 'http://macro.ycombinator.com/', 'name': 'macro', 'category': '技术 & 行业', 'info': '黑客和创业: 请认准，教父的网站' }, { 'href': 'http://www.aosabook.org/en/index.html', 'name': 'aosa', 'category': '技术 & 行业', 'info': '黑客和创业: 请认准，教父的网站' }, { 'href': 'http://blog.samaltman.com/', 'name': 'samaltman', 'category': '技术 & 行业', 'info': '' }, { 'href': 'http://www.paulgraham.com/', 'name': 'paulgraham', 'category': '技术 & 行业', 'info': '' }, { 'href': 'http://news.dbanotes.net/', 'name': '小道消息', 'category': '技术', 'info': '' }, { 'href': 'http://gank.io/', 'name': '干货', 'category': '技术', 'info': '' }, { 'href': 'https://www.gitbook.com/explore', 'name': 'gitbook', 'category': '技术', 'info': '' }, { 'href': 'http://www.yunweipai.com/', 'name': '运维派', 'category': '技术', 'info': '' }, { 'href': 'http://www.quora.com/', 'name': 'quora', 'category': '技术', 'info': '' }, { 'href': 'http://toutiao.io/', 'name': '开发者头条', 'category': '技术', 'info': '' }, { 'href': 'http://weekly.manong.io/issues/', 'name': '码农周刊', 'category': '', 'info': '' }, { 'href': 'http://fex.baidu.com/', 'name': 'FEX', 'category': '', 'info': '' }, { 'href': 'http://www.ruanyifeng.com/blog/', 'name': '阮一峰', 'category': '', 'info': '' }, { 'href': 'http://www.ituring.com.cn/minibook', 'name': '图灵社区', 'category': '', 'info': '' }, { 'href': 'http://hackerspaces.org/wiki/Hackerspaces', 'name': 'HackerSpaces', 'category': '技术', 'info': '' }, { 'href': 'http://stackoverflow.com', 'name': 'StackOverflow', 'category': '技术', 'info': '码农届的知乎，神一般的存在' }, { 'href': 'http://www.sitepoint.com/', 'name': 'sitepoint', 'category': '技术', 'info': '' }, { 'href': 'http://www.dzone.com/', 'name': 'dzone', 'category': '技术', 'info': '' }, { 'href': 'http://bytes.com/', 'name': 'bytes', 'category': '技术', 'info': '' }, { 'href': 'http://stackexchange.com', 'name': 'StackExchange', 'category': '技术', 'info': '比StackOverflow更牛逼' }, { 'href': 'http://www.infoq.com/cn/', 'name': 'InfoQ', 'category': '技术 前沿', 'info': '如果你想成为架构师' }, { 'href': 'http://www.51cto.com/', 'name': '51CTO', 'category': '', 'info': '' }, { 'href': 'http://www.matrix67.com/blog/', 'name': 'matrix67', 'category': '', 'info': '' }, { 'href': 'http://www.changhai.org/', 'name': '卢昌海', 'category': '', 'info': '' }, { 'href': 'http://highscalability.com/', 'name': 'highscalability', 'category': '', 'info': '' }, { 'href': 'http://jm-blog.aliapp.com/', 'name': '阿里中间件团队', 'category': '', 'info': '' }, { 'href': 'http://ued.taobao.org/blog/', 'name': '淘宝UED', 'category': '', 'info': '' }, { 'href': 'http://www.alloyteam.com/', 'name': '腾讯Web前端团队', 'category': '', 'info': '' }, { 'href': 'http://www.tuicool.com/mags/', 'name': '编程狂人', 'category': '', 'info': '' }, { 'href': 'http://www.tuicool.com/mags/design', 'name': '设计匠艺', 'category': '', 'info': '' }, { 'href': 'http://www.valleytalk.org/', 'name': '弯曲评论', 'category': '', 'info': '' }, { 'href': 'http://teahour.fm/', 'name': 'teahour.fm', 'category': '', 'info': '' }, { 'href': 'http://ourjs.com/', 'name': 'ourjs', 'category': '', 'info': '' }, { 'href': 'http://www.reddit.com/r/javascript', 'name': 'reddit/javascript', 'category': '', 'info': '' }, { 'href': 'http://www.reddit.com/r/python', 'name': 'reddit/python', 'category': '', 'info': '' }, { 'href': 'http://www.reddit.com/r/golang', 'name': 'reddit/go', 'category': '', 'info': '' }, { 'href': 'http://www.reddit.com/r/webdev', 'name': 'reddit/webdev', 'category': '', 'info': '' }, { 'href': 'http://genius.com/', 'name': 'genius', 'category': '', 'info': '' }, { 'href': 'https://platform.html5.org/', 'name': 'html5', 'category': '', 'info': '' }, { 'href': 'http://pycoders.com/archive/', 'name': 'pycoders', 'category': '', 'info': '' }, { 'href': 'https://www.livecoding.tv', 'name': 'livecoding', 'category': '', 'info': '' }]
}, {
    title: 'tools',
    content: [{ 'href': 'https://www.libhunt.com/', 'name': 'libhunt', 'category': '', 'info': '' }, { 'href': 'http://workingkit.com/', 'name': 'workingkit:创业工具', 'category': '', 'info': '' }, { 'href': 'https://www.materialpalette.com/', 'name': '配色', 'category': '', 'info': '' }, { 'href': 'https://tinypng.com/', 'name': 'tinypng', 'category': '', 'info': '' }, { 'href': 'http://www.draw.io/', 'name': 'drawio', 'category': '', 'info': '' }, { 'href': 'https://www.startssl.com/', 'name': 'ssl证书', 'category': '', 'info': '' }, { 'href': 'http://www.qqxiuzi.cn/daohang.htm', 'name': '各种小工具', 'category': '', 'info': '' }, { 'href': 'http://logio.org/', 'name': 'logio', 'category': '', 'info': '' }, { 'href': 'https://hyperdev.com', 'name': 'hyperdev:实时生成网站', 'category': '', 'info': '' }, { 'href': 'https://fast.com/', 'name': 'fast:测网速', 'category': '', 'info': '' }, { 'href': 'https://developers.google.com/speed/pagespeed/insights/', 'name': 'googleinsight', 'category': '', 'info': '' }, { 'href': 'http://appmarketingstack.com/', 'name': 'app marketing', 'category': '', 'info': '' }, { 'href': 'http://finda.photo/', 'name': 'findaphoto', 'category': '', 'info': '' }, { 'href': 'http://stackshare.io/', 'name': 'stackshare', 'category': '', 'info': '各种工具' }, { 'href': 'https://founderkit.com/', 'name': 'founderkit', 'category': '', 'info': '各种工具' }, { 'href': 'http://www.startupfuckingadvice.com/', 'name': 'startupfuckingadvice', 'category': '', 'info': '' }, { 'href': 'http://www.iconfont.cn/', 'name': 'iconfont', 'category': '', 'info': '' }, { 'href': 'http://caniuse.com/', 'name': 'caniuse: browsersupportcheck', 'category': '', 'info': '' }, { 'href': 'https://www.cloudflare.com/', 'name': 'cloudflare', 'category': '', 'info': '' }, { 'href': 'https://shimo.im', 'name': '石墨', 'category': '', 'info': '文档协同' }, { 'href': 'http://www.zcool.com.cn/', 'name': '站酷', 'category': '', 'info': '' }, { 'href': 'http://b3c4.com/', 'name': '导航', 'category': '', 'info': '' }, { 'href': 'http://www.mmtrix.com/', 'name': '性能魔方', 'category': '', 'info': '' }, { 'href': 'http://apistore.baidu.com/', 'name': 'Api Store', 'category': '', 'info': '' }, { 'href': 'http://apifood.co/', 'name': 'Api food', 'category': '', 'info': '' }, { 'href': 'https://www.publicapis.com/', 'name': 'pulicapis', 'category': '', 'info': '' }, { 'href': 'http://www.devstore.cn/', 'name': 'Dev Store', 'category': '', 'info': '' }, { 'href': 'http://devdocs.io/', 'name': 'Dev Docs', 'category': '', 'info': '' }, { 'href': 'https://www.taskworld.com/', 'name': 'TaskWorld', 'category': '', 'info': '' }, { 'href': 'https://app.asana.com/', 'name': 'Asana', 'category': '', 'info': '' }, { 'href': 'https://tower.im', 'name': 'tower', 'category': '', 'info': '' }, { 'href': 'https://hackpad.com/', 'name': 'Hackpad', 'category': '', 'info': '' }, { 'href': 'http://www.cheat-sheets.org/', 'name': 'Cheat-Sheets', 'category': '', 'info': '' }, { 'href': 'http://www.w3.org/Protocols/', 'name': 'W3C', 'category': '', 'info': '' }, { 'href': 'https://readthedocs.org', 'name': 'readthedocs', 'category': '', 'info': '' }, { 'href': 'https://www.debuggex.com/', 'name': '调试正则表达式', 'category': '', 'info': '' }, { 'href': 'http://chrome-extension-downloader.com/', 'name': 'downloadcrx', 'category': '', 'info': '' }, { 'href': 'https://www.theatlas.com/', 'name': 'searchcharts', 'category': '', 'info': '' }]
}, {
    title: 'security',
    content: [{ 'href': 'http://www.anquanbao.com/', 'name': '安全宝', 'category': '', 'info': '' }, { 'href': 'https://www.qssec.com', 'name': '青松', 'category': '', 'info': '' }]
}, {
    title: 'cloud',
    content: [{ 'href': 'http://www.ucloud.cn/', 'name': 'ucloud', 'category': '', 'info': '' }, { 'href': 'https://leancloud.cn/', 'name': 'leancloud', 'category': '', 'info': '' }, { 'href': 'https://www.qingcloud.com', 'name': '青云', 'category': '', 'info': '' }, { 'href': 'https://www.jpush.cn', 'name': '极光', 'category': '', 'info': '' }, { 'href': 'http://www.jiankongbao.com/', 'name': '监控宝', 'category': '', 'info': '' }, { 'href': 'http://www.yuntongxun.com/', 'name': '云通讯', 'category': '', 'info': '' }, { 'href': 'http://www.apicloud.com/', 'name': 'apicloud', 'category': '', 'info': '' }, { 'href': 'http://tongji.baidu.com/', 'name': '百度统计', 'category': '', 'info': '' }, { 'href': 'https://www.ablecloud.cn/', 'name': 'ablecloud', 'category': '', 'info': '' }, { 'href': 'http://gizwits.com/', 'name': '机智云', 'category': '', 'info': '' }]
}, {
    title: 'awesomes',
    content: [{ 'href': 'http://vimawesome.com', 'name': 'vimawesome', 'category': '', 'info': '' }, { 'href': 'https://github.com/avelino/awesome-go', 'name': 'goawesome', 'category': '', 'info': '' }]
}, {
    title: 'work',
    content: [{ 'href': 'http://qdu.cloudapp.net/', 'name': '发布平台', 'category': '', 'info': '' }, { 'href': 'http://mm.misingulariti.io/singulariti', 'name': 'mm', 'category': '', 'info': '' }]
}, {
    title: '小墓碑',
    content: [{ 'href': 'http://www.geekfan.net/', 'name': 'GeekFan', 'category': '', 'info': '' }, { 'href': 'http://blog.xiqiao.info/', 'name': '西乔(轻松一下)', 'category': '', 'info': '' }, { 'href': 'http://coolshell.cn/', 'name': 'CoolShell', 'category': '', 'info': '' }]
}];

var otherData = [{
    title: 'forum',
    content: [{ 'href': 'http://www.tvbian.com/', 'name': '点子', 'category': '', 'info': '' }]
}, {
    title: 'mediaSites',
    content: [{ 'href': 'http://www.woshipm.com', 'name': '人人都是产品经理', 'category': '', 'info': '' }, { 'href': 'http://www.huxiu.com', 'name': '虎嗅', 'category': '', 'info': '' }, { 'href': 'http://www.cyzone.cn/', 'name': '创业帮', 'category': '', 'info': '' }, { 'href': 'http://www.svpg.com/', 'name': 'svpg', 'category': '', 'info': '' }, { 'href': 'http://next.36kr.com', 'name': 'NEXT', 'category': '', 'info': '' }, { 'href': 'http://www.iheima.com/', 'name': '创业家', 'category': '', 'info': '' }, { 'href': 'http://www.businessinsider.com/', 'name': 'BI', 'category': '', 'info': '' }, { 'href': 'http://www.pingwest.com', 'name': 'PingWest', 'category': '', 'info': '' }, { 'href': 'http://www.tmtpost.com', 'name': '钛媒体', 'category': '', 'info': '' }, { 'href': 'http://www.bianews.com', 'name': '鞭牛士', 'category': '', 'info': '' }, { 'href': 'http://www.yixieshi.com', 'name': '互联网一些事', 'category': '', 'info': '' }, { 'href': 'http://www.alibuybuy.com/', 'name': '互联玩的那些事', 'category': '', 'info': '' }, { 'href': 'http://www.geekpark.net', 'name': '极客公园', 'category': '', 'info': '' }, { 'href': 'http://www.iimedia.cn/', 'name': '艾媒网', 'category': '', 'info': '' }, { 'href': 'http://baijia.baidu.com', 'name': '百度百家', 'category': '', 'info': '' }, { 'href': 'http://www.iresearch.cn', 'name': '艾瑞', 'category': '', 'info': '' }, { 'href': 'http://www.kuailiyu.com', 'name': '快鲤鱼', 'category': '', 'info': '' }, { 'href': 'http://zaodula.com', 'name': '早读啦', 'category': '', 'info': '' }]
}, {
    title: 'study',
    content: [{ 'href': 'https://80000hours.org/', 'name': '80000hours', 'category': '', 'info': '' }, { 'href': 'http://codedammit.co/', 'name': 'codedammit', 'category': '', 'info': '' }, { 'href': 'http://open.163.com/', 'name': '网易公开课', 'category': '', 'info': '' }, { 'href': 'https://www.edx.org/', 'name': 'edx', 'category': '', 'info': '' }, { 'href': 'http://readfree.me/', 'name': 'Read Free', 'category': '', 'info': '' }, { 'href': 'http://www.jikexueyuan.com/', 'name': '极客学院', 'category': '', 'info': '' }, { 'href': 'http://study.163.com', 'name': '网易云课堂', 'category': '', 'info': '' }, { 'href': 'https://www.coursera.org/', 'name': 'coursera', 'category': '', 'info': '' }, { 'href': 'https://www.udacity.com/', 'name': 'udacity', 'category': '', 'info': '' }, { 'href': 'https://www.khanacademy.org/', 'name': 'khan', 'category': '', 'info': '' }, { 'href': 'https://www.udemy.com/', 'name': 'udemy', 'category': '', 'info': '' }, { 'href': 'http://www.duobei.com', 'name': '多贝', 'category': '', 'info': '' }, { 'href': 'http://speakerdeck.com', 'name': 'speakerdeck', 'category': '', 'info': '' }, { 'href': 'http://www.swiftv.cn/', 'name': 'swiftv', 'category': '', 'info': '' }]
}, {
    title: 'wearable',
    content: [{ 'href': 'http://mashable.com/category/wearable-tech/', 'name': 'mashable', 'category': '', 'info': '' }, { 'href': 'http://www.themakers.cn/', 'name': '创客星球', 'category': '', 'info': '' }, { 'href': 'http://www.bjmakerspace.com/', 'name': '创客空间', 'category': '', 'info': '' }, { 'href': 'http://www.eepw.com.cn/', 'name': '电子产品世界', 'category': '', 'info': '' }, { 'href': 'http://www.elecfans.com/', 'name': '电子发烧友', 'category': '', 'info': '' }, { 'href': 'http://www.ingdan.com/', 'name': '硬蛋', 'category': '', 'info': '' }, { 'href': 'http://www.shenzhenware.com/', 'name': '深圳湾', 'category': '', 'info': '' }, { 'href': 'http://www.lkkdesign.com/', 'name': '洛可可', 'category': '', 'info': '' }, { 'href': 'http://www.hqchip.com/', 'name': '华强芯城', 'category': '', 'info': '' }, { 'href': 'http://www.stargeek.cn/', 'name': '星云', 'category': '', 'info': '' }, { 'href': 'http://www.makerfaireshenzhen.com/', 'name': '制汇节', 'category': '', 'info': '' }, { 'href': 'http://www.ingchuang.com/', 'name': '硬创邦', 'category': '', 'info': '' }]
}, {
    title: 'misc',
    content: [{ 'href': 'http://yedingding.com/', 'name': 'Dingding Ye', 'category': '', 'info': '' }, { 'href': 'http://phtv.ifeng.com/program/qqsrx', 'name': '三人行', 'category': '', 'info': '' }, { 'href': 'https://fds.so/d/38CCA4C77072DDC9/3T9riEAiKQ', 'name': 'testuniversallink', 'category': '', 'info': '' }, { 'href': 'https://fds.so/d/e107dd56b99058c0/3TcS53JX1K', 'name': 'testuniversallink-cao', 'category': '', 'info': '' }, { 'href': 'http://api.super.haomee.cn/?m=Html&a=appDownload', 'name': 'test: chaonengbu', 'category': '', 'info': '' }]
}, {
    title: '找钱',
    content: [{ 'href': 'https://www.freelancer.cn', 'name': 'freelancer', 'category': '', 'info': '' }, { 'href': 'https://www.elance.com/', 'name': 'elance', 'category': '', 'info': '' }, { 'href': 'https://www.upwork.com/', 'name': 'upwork', 'category': '', 'info': '' }, { 'href': 'http://www.csto.com/', 'name': 'CSTO', 'category': '', 'info': '' }, { 'href': 'https://www.indiegogo.com/', 'name': 'indiegogo', 'category': '', 'info': '' }, { 'href': 'https://www.kickstarter.com/', 'name': 'kickstarter', 'category': '', 'info': '' }, { 'href': 'http://www.vchello.cn/', 'name': '微投网', 'category': '', 'info': '' }, { 'href': 'http://itjuzi.com/', 'name': 'IT桔子', 'category': '', 'info': '' }, { 'href': 'http://top100.exponentialorgs.com/', 'name': '独角兽', 'category': '', 'info': '' }]
}, {
    title: '医疗',
    content: [{ 'href': 'http://www.healthpoint.cn/', 'name': '健康点', 'category': '', 'info': '' }, { 'href': 'http://www.cn-healthcare.com/', 'name': '健康界', 'category': '', 'info': '' }, { 'href': 'http://share.cn-healthcare.com/', 'name': '医享库', 'category': '', 'info': '' }, { 'href': 'http://www.yx129.com/', 'name': '医享网', 'category': '', 'info': '' }, { 'href': 'http://www.yigoonet.com/', 'name': '医谷', 'category': '', 'info': '' }, { 'href': 'http://www.geekheal.com/', 'name': '奇点', 'category': '', 'info': '' }, { 'href': 'http://www.medicool.cn/Drlist.aspx', 'name': 'Dr2', 'category': '', 'info': '' }, { 'href': 'http://www.hibor.com.cn/', 'name': '行业报告', 'category': '', 'info': '' }, { 'href': 'http://www.vcbeat.net/', 'name': '动脉网', 'category': '', 'info': '' }]
}, {
    title: '小墓碑',
    content: [{ 'href': 'http://www.geekfan.net/', 'name': 'GeekFan', 'category': '', 'info': '' }, { 'href': 'http://blog.xiqiao.info/', 'name': '西乔(轻松一下)', 'category': '', 'info': '' }, { 'href': 'http://coolshell.cn/', 'name': 'CoolShell', 'category': '', 'info': '' }]
}];

module.exports = {
    techData: techData,
    otherData: otherData
};

},{}],3:[function(require,module,exports){
'use strict';

var techData = require('./components/site-model.js').techData;
var otherData = require('./components/site-model.js').otherData;
var healthSiteData = require('./components/health-site-model.js');

var routes = [{ path: '/index',
    component: { template: '#vue-tpl-sites', data: function data() {
            return { categories: techData };
        } }
}, { path: '/news',
    component: { template: '#vue-tpl-sites', data: function data() {
            return { categories: otherData };
        } }
}, { path: '/health',
    component: { template: '#vue-tpl-sites', data: function data() {
            return {
                categories: healthSiteData,
                'a': 'ccc'
            };
        } }
}];
var router = new VueRouter({
    routes: routes
});
var app = new Vue({
    router: router
}).$mount('#vue-app');

},{"./components/health-site-model.js":1,"./components/site-model.js":2}]},{},[3]);
