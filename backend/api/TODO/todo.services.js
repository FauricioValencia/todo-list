const todo = require("./todo.model");

exports.createTaskPromise = (title, description) =>
  new Promise((resolve, reject) => {
    let body = {
      title,
      description
    };
    const Todo = new todo(body);
    Todo.save((err, taskCreate) => {
      if (err) {
        const error = {
          ok: false,
          err,
          status: 400,
          message: "Bad request"
        };
        return reject(error);
      }
      return resolve({
        ok: true,
        taskCreate
      });
    });
  });

  exports.deleteTaskPromise =(idTask)=> new Promise((resolve, reject)=>{
      todo.deleteOne({_id:idTask}, (err, deleteTask)=>{
        if (err) {
            const error = {
              ok: false,
              err,
              status: 400,
              message: "Bad request"
            };
            return reject(error);
          }
          return resolve({
            ok: true,
            deleteTask
          });
      })
  })
