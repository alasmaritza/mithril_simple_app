var m = require("mithril");
var User = require("../models/User");

module.exports = {
  oninit: function(vnode) {
    User.load(vnode.attrs.id)
  },
  view: function() {
    return m("form",
      {
        onsubmit: function(e) {
          e.preventDefault();
          User.save();
        }
      }, [
        m("label.label", "Title"),
        m("input.input[type=text][placeholder=Galaxy S2]", {
          oninput: function(e) { User.current.title = e.target.value },
          value: User.current.title
          }),
        m("label.label", "Brand"),
        m("input.input[type=text][placeholder=Samsung]", {
          oninput: function(e) { User.current.brand = e.target.value },
          value: User.current.brand
          }),
        m("button.button[type=submit]", "Save"),
      ])
  }
}