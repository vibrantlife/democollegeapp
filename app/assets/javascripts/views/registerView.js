RegisterView = Backbone.View.extend({
  el: '#register-view',
  events: {'submit form': 'createUser'},
  // binds events to function

  attributes: function() {
    return {
      username: this.usernameField.val(),
      email: this.emailField.val()
      password: this.passwordField.val(),
      password_confirmation: this.passwrodConfirmationField.val()
    };
  },

  createUser: function() {
    if (this.submitButton.hasClass('disabled') && this.form.data('user-created') !== true) {
      return false;
    } else {
      this.submitButton.addClass('disabled');
    // initially disabling submit button
    }

    var self = this,
      user = new User(this.attributes());
      // creates new user with items from attributes fxn
      user.save(null, {
        error: function(originalModel, resp, options) {
          self.$el.find('input').removeClass('error');
          var errors = JSON.parse(resp.responseText).errors;
          _.each(errors, function(value, key) {
            self.$el.find('input[name=' + key + ']').addClass('error');
          });
          self.submitButton.removeClass('disabled');
        },
        success: function() {
          self.form.data('user-created', true);
          document.location.href = '/colleges';
        }
      });
      return (this.form.data('user-created') === true);
  },

  initialize: function() {
    this.form = this.$el.find('form');
    this.usernameField = this.$el.find('input[name=name]');
    this.emailField = this.$el.find('input[name=email]');
    this.passwordField = this.$el.find('input[name=password]');
    this.passwrodConfirmationField = this.$el.find('input[name=password_confirmation]');
    this.submitButton = this.$el.find('input[type=submit]');
  },
});