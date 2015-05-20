App.Views.Edit = Backbone.View.extend({
  events: {
    "submit form": "save"
  },
  initialize: function() {
    this.render();
  },
  save: function() {
    // save method bound to submit event
    var self = this;
    var msg = this.model.isNew() ? "Successfully created!" : "Saved!";

    this.model.save({schoolName: this.$('[name=name]').val(), application: this.$('[name=application]').val
  }, {
    success: function (model, resp) {
      new App.Views.Notice({message: msg});

      self.model = model;
      self.render();
      self.delegateEvents();

      Backbone.history.saveLocation('colleges/' + model.id);
    },
    error: function() {
      new App.Views.Error();
    }
  });
    return false;
  },

  render: function() {
    var out = '<form>';
    out += "<label for='schoolName'>School Name</label>";
    out += "<input name='schoolName' type='text' />";

    out += "<label for='application'>application</label>";
    out += "<textarea name='application'>" + (this.model.escape('application') || '') + "</textarea>";

    var submitText = this.model.isNew() ? 'Create' : 'Save';
    out += "<button>" + submitText + "</button>";
    out += "</form>";
    $(this.el).html(out);
    $("#app").html(this.el);

    this.$('[name=schoolName]').val(this.model.get('application'));
  }
})