var m = require("mithril")

module.exports = {
  view: function(vnode) {
    return m("main.layout", [
      m("nav.menu", [
        m(m.route.Link, {href: "/list"}, "Home")
      ]),
      m("section", vnode.children)
    ])
  }
}