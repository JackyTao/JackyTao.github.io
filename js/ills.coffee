siteapp = angular.module 'siteapp', []
siteapp.controller 'SiteController', ($scope) -> 
    $scope.sites = [
        {
            title: 'everydaySites'

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
    #[ {'href': 'http://news.ycombinator.com', 'name': 'Hacker News', 'category': '技术 & 行业', 'info': '黑客和创业: 请认准，教父的网站'} ]