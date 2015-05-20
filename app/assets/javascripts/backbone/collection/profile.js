var profileTable = Backbone.View.extend({
  // table for profile
  el: $('#userProfile'),
  initialize: function() {
    this.collection.bind("add", this.render, this);
  },

  render: function() {
    _.each(this.collection.models, function(data){
      this.$el.append(new userProfile({
        model: data
      }).render().el);
    }, this);
    return this;
  }
});


var User = Backbone.Model.extend({
});

var userCollection = Backbone.Collection.extend({
  model: User,
  url: '/user',
  parse: function(res) {
    console.log('response inside parse' + res);
    return res;
  }
})

var user = new userCollection();

user.fetch({
  success: function() {
    console.log(user.toJSON());
    new profileTable({collection: userCollection}.render());
  },
  error: function() {
    console.log('no candy for you');
  }
});

// view for user profile
$(document).ready(function() {
var userProfile = Backbone.View.extend({
  tagName: 'tr',
  template: _.template($('#user-template').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

});