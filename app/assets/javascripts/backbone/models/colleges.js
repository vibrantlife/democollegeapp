// var College = Backbone.Model.extend({
//   url: function() {
//     var base = "colleges";
//     if (this.isNew()) return base;
//     return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
//     // if it's an unsaved model post to /colleges. if its not new post to /colleges/id to update
//   }
// });