var techData = require('./components/site-model.js').techData;
var otherData = require('./components/site-model.js').otherData;
var healthSiteData = require('./components/health-site-model.js');
var VueRouter = require('vue-router');
var Vue = require('vue');
var Health = require('./components/sites.vue');
Health.data = function() {
    return {categories: otherData};
};

Vue.use(VueRouter);

const routes = [
    {path: '/index',
        component: {template: '#vue-tpl-sites', data: function() {
            return {categories: techData}; 
        }}
    }, 
    {path: '/news',
        component: {template: '#vue-tpl-sites', data: function() {
            return {categories: otherData}; 
        }}
    }, 
    {path: '/health', component: Health, }, 
]; 
const router = new VueRouter({
    routes 
});
const app = new Vue({
      router
}).$mount('#vue-app');


