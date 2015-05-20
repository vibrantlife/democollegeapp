var User = Backbone.Model.extend({
  url: '/user',

  authenticate: function (password, callback) {
    // submits ajax request to ensure login credentials are correct
    var self = this;

    $.ajax({
      type: 'POST',
      url: '/session.json',
      datatype: 'json',
      data: {
        username: this.get('username'),
        password: this.get('password')
      },
    success: function(data) {
      if (data.error) {
        callback.call(this, data.error, self);
      } else {
        self.set(data);
        callback.call(this, null, self);
      }
     }
    });
  },
});

User.authorize = function (attrs, callback) {
// helper method
  var user = new User ({email: attrs.email});
  user.authenticate(attrs.password, callback);
};


// rameters: {"username"=>"bhills_4152@veryrealemail.com", "email"=>"bhills_4152@veryrealemail.com", "password"=>"[FILTERED]", "password_confirmation"=>"[FILTERED]",
// "user"=>{"username"=>"bhills_4152@veryrealemail.com", "email"=>"bhills_4152@veryrealemail.com"}}
