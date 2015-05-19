#= require_self
#= require_tree

window.App =
  Routers: {}
  initialize: ->
    new App.Routers.MainRouter()
    Backbone.history.start()