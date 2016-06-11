var React = require('react');
var siteData = require('./site-model.js');
var healthSiteData = require('./health-site-model.js');


var SiteList = React.createClass({
    render: function() {
        var nodes = this.props.data.map(function(site) {
            return (
            <div key={site.href} className="col-md-3 col-xs-6 card">
                    <h3><a target="_blank" href={site.href}>{site.name}</a></h3>
                </div>
            );
        }); 
        return (
            <div>{nodes}</div> 
        );
    }, 
});


var CreateCategoryList = function(data) {
    return React.createClass({
        getDefaultProps: function() {
            return {
                data: data,
            };                 
        },
        getInitialState: function() {
            return {data: []};
        },
        componentDidMount: function() {
        },
        render: function() {
            var nodes = this.props.data.map(function(category) {
                return (
                    <div key={category.title}>
                        <div>
                            <div className="col-lg-12">
                                <h2 className="page-header">
                                    {category.title}
                                </h2>
                            </div>
                        </div>
                        <SiteList data={category.content}/>
                    </div>               
                ); 
            }); 

            return (
                <div className="row">{nodes}</div>
            );
        },
     
    });
};

var CategoryList = CreateCategoryList(siteData);
var HealthCategoryList = CreateCategoryList(healthSiteData); 

module.exports = {
    CategoryList: CategoryList,
    HealthCategoryList: HealthCategoryList,
};
