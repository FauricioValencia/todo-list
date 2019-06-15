const mongoose = require("mongoose");
const { Schema } = mongoose;

const todo = new Schema({
  title: {
    type: Schema.Types.String,
    default: ""
  },
  description: {
    type: Schema.Types.String,
    default: ""
  }
});

todo.methods.toJSON = function() {
  const userThis = this;
  const userObject = userThis.toObject();
  return userObject;
};

module.exports = mongoose.model("Todo", todo);
