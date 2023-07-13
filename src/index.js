var m = require("mithril");
var UserList = require("./views/UserList");
var UserForm = require("./views/UserForm");
var Layout = require("./views/Layout");
var root = document.body;

m.route(root, "/list", {
  "/list": {
    render: function() {
      return m(Layout, m(UserList));
    }
  },
  "/edit/:id": {
    render: function(vnode) {
      return m(Layout, m(UserForm, vnode.attrs))
    }
  },
})