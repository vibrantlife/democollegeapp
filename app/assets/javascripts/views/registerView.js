RegisterView = Backbone.View.extend({
  el: '#register-view',

  initialize: function() {
    this.form = this.$el.find('form');
    this.usernameField = this.$el.find('input[name=name]');
    this.emailField = this.$el.find('input[name=email]');
    this.passwordField = this.$el.find('input[name=password]');
    this.passwrodConfirmationField = this.$el.find('input[name=password_confirmation]');
    this.submitButton = this.$el.find('input[type=submit]');
  },
});