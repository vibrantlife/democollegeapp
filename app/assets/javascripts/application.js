// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require backbone_rails_sync
//= require backbone_datalink
//= require backbone/collegeapp
//= require_tree .


// Rails CSRF Protection
$(document).ajaxSend(function(e, xhr, options){
  var token = $("meta[name='csrf-token']").attr("content");
  xhr.setRequestHeader("X-CSRF-Token", token);
});

// Underscore template
_.templateSettings = {
  interpolate: /\{\{\=(.+?)\}\}/g,
  evaluate: /\{\{(.+?)\}\}/g
};

// Routing

Router = {
  '/register': function () { new RegisterView() },
  route: function(path) {
    _.each(Router, function(callback, route) {
      if (!_.isRegExp(route)) {
        route = Backbone.Router.prototype._routeToRegExp(route);
      }
      if (route.test(path)) {
        var args = Backbone.Router.prototype._extractParameters(route, path);
        callback.apply(this, args);
      }
    });
  }
};

// load app
$(document).ready(function(){
  Router.route(window.location.pathname);
});

