siteapp = angular.module 'siteapp', []
siteapp.controller 'SiteController', ($scope) -> 
    $scope.sites = [
        {
            title: '医疗'
            content: [
                {'href': 'http://www.myzx.cn/', 'name': '名医在线', 'category': '问答', 'info': ''}
                {'href': 'http://xingren.com/', 'name': '杏仁医生', 'category': '', 'info': ''}
            ]
        },
    ]

    #console.log JSON.stringify $scope.sites
    # alternative
    #myref = new Firebase "https://devmsg.firebaseio.com/"
    #myref.child('sites').on('value', ((data)->
    #    #console.log JSON.stringify data.val()
    #    $scope.sites = data.val()
    #    $scope.$apply()
    #))
    
