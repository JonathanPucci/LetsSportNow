// ./routes/index.js
const users = require("./user");
const puppies = require("./puppies");

module.exports = app => {
  app.use("/users", users);
  app.use("/puppies", puppies);
  // etc..
};
