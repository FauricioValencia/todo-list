const todo = require("../api/TODO/");

module.exports = app => {
  app.use("/todo", todo);
};
