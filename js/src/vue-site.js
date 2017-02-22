var techData = require('./components/site-model.js').techData;
var otherData = require('./components/site-model.js').otherData;
var healthSiteData = require('./components/health-site-model.js');

const routes = [
    {path: '/index',
        component: {template: '#vue-tpl-sites', data: function() {
            return {'a': 'aaa'};
        }}
    }, 
    {path: '/news',
        component: {template: '#vue-tpl-sites', data: function() {
            return {'a': 'bbb'};
        }}
    }, 
    {path: '/health',
        component: {template: '#vue-tpl-sites', data: function() {
            return {'a': 'ccc'};
        }}
    }, 
]; 
const router = new VueRouter({
    routes 
});
const app = new Vue({
      router
}).$mount('#vue-app');


