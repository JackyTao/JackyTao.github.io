// need `React` when exist jsx , even not used literally !!!
var React = require('react');

var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var IndexRedirect = require('react-router').IndexRedirect;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;

var CategoryList = require('./components/categorylist.jsx').CategoryList;
var HealthCategoryList = require('./components/categorylist.jsx').HealthCategoryList;


/*
ReactDOM.render(
    <CategoryList data={data} />,
    document.getElementById('recommend-sites')
);
*/

var SiteNav = React.createClass({
    render: function() {
        return (
            <ul role="nav" className="nav nav-tabs">
                <li><Link to="/index" activeClassName="active">站点</Link></li>
                <li><Link to="/health" activeClassName="active">健康站点</Link></li>
            </ul>
        );        
    },
});

ReactDOM.render(
    <Router history={hashHistory}> 
        <Route path="/">
            /*<IndexRoute component={CategoryList}/>*/
            <IndexRedirect to="/index"/>
            <Route path="/index" component={CategoryList}/>
            <Route path="/health" component={HealthCategoryList}/>
        </Route>
    </Router>,
    document.getElementById('recommend-sites')
);
ReactDOM.render(
    <Router history={hashHistory}> 
        <Route path="/*" component={SiteNav}/>
    </Router>,
    document.getElementById('site-nav')
);
