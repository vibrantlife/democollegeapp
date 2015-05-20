App.Collection.CollegeApp = Backbone.Collection.extend({
  routes: {
  "colleges/:id": "edit",
  "colleges": "index",
  "colleges": "newApp"
  },

  edit: function(id) {
    // instantiates with given id. fetches data from server. upon success instantiate view
    var app = new CollegeApp ({id: id});
    app.fetch({
      success: function(model, resp) {
        new App.Views.Edit({
          model: app
        });
      },
      error: function () {
        new Error({message: 'Unable to Locate Application'});
        window.location.hash = '#';
      }
    });
  },
  index: function() {
    // ajax call to #index to retrieve list. then iterate through list and instantiate model with json
    $.getJSON('/colleges', function(data) {
      if(data) {
        var colleges = _(data).map(function(i) {
          return new CollegeApp(i); });
        new App.Views.Index({colleges: colleges });
      } else {
        new Error({message: "Error Updating Appliation."});
      }
    });
  },
  newApp: function() {
    new App.Views.Edit({model: new CollegeApp});
  }
});