// // accepts list of apps and lists them with links to edit

// var App = {
//   Views: {},
//   Controllers: {},
//   init: function() {
//     new App.Collection.College();
//     Backbone.history.start();
//     }
//   };

// App.Collection.College = Backbone.Collection.extend({
//   routes: {
//   "colleges/:id": "edit",
//   "colleges": "index",
//   "colleges": "newApp"
//   },

//   edit: function(id) {
//     // instantiates with given id. fetches data from server. upon success instantiate view
//     var app = new College ({id: id});
//     app.fetch({
//       success: function(model, resp) {
//         new App.Views.Edit({
//           model: app
//         });
//       },
//       error: function () {
//         new Error({message: 'Unable to Locate College'});
//         window.location.hash = '#';
//       }
//     });
//   },
//   index: function() {
//     // ajax call to #index to retrieve list. then iterate through list and instantiate model with json
//     $.getJSON('/colleges', function(data) {
//       if(data) {
//         var colleges = _(data).map(function(i) {
//           return new College(i); });
//         new App.Views.Index({colleges: colleges });
//       } else {
//         new Error({message: "Error Loading Colleges."});
//       }
//     });
//   },
//   newApp: function() {
//     new App.Views.Edit({model: new College});
//   }
// });


// App.Views.Index = Backbone.View.extend({
//   initialize: function(options) {
//     this.options = options;
//     this.colleges = this.options.colleges;

//     this.render();
//   },
//   render: function() {
//     if(this.colleges.length > 0) {
//       var out = "<h3><a href='#new'>Create New</h3><ul>";
//       _(this.colleges).each(function(app){
//         out += "<li><a href='#colleges/" + app.id + "'>" + app.escape('application') + "</a></li>";
//       });
//       out += "</ul>";
//     } else {
//       out = "<h3>No Applications! <a href'#new'>Create one</a></h3>";
//     }
//     $(this.el).html(out);
//     $('#app').html(this.el);
//     // all string concatenation goes into appdiv
//   }
// });





