var m = require("mithril");
var User = {
  list: [],
  loadList: function() {
    return m.request({
      method: "GET",
      //url: "https://rem-rest-api.herokuapp.com/api/users",
      url: "https://dummyjson.com/products",
      //withCredentials: true,
    }).then(function(result) {
      console.log(result);
      User.list = result.products
    })
  },
  current: {},
  load: function(id) {
    return m.request({
      method: "GET",
      url: "https://dummyjson.com/products/" + id,
    }).then(function(result) {
      console.log(result);
      User.current = result
    })
  },
  save: function() {
    // id cannot be included in the request body
    var id = User.current.id;
    delete User.current.id;
    return m.request({
      method: "PUT",
      url: "https://dummyjson.com/products/" + id,
      body: User.current,
    })
  }
};

module.exports = User;