const services = require("./todo.services");

exports.createTask = (req, res) => {
  const { title, description } = req.body;
  return services
    .createTaskPromise(title, description)
    .then(response => res.json(response))
    .catch(e => res.status(400).json(err));
};
exports.deleteTask = (req, res) => {
  const { idTask } = req.body;
  return services
    .deleteTaskPromise(idTask)
    .then(response => res.json(response))
    .catch(e => res.status(400).json(err));
};
