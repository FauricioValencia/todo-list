import { createActions } from "redux-actions";
import { CREATE_TASK, UPDATE_TASK, DELETE_TASK } from "../Types/";
// ! como traer la el estado inicial de las tareas

// !helpers
// import { postApi } from "../../../helpers/Todo/fetchApi.helpers";

export const { createTask, updateTask, deleteTask } = createActions(
  {
    CREATE_TASK: async body => {
      console.log("boduy: ", JSON.stringify(body));
      const res = await fetch(`http://localhost:3001/todo`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const resJson = await res.json();
      return resJson;
    }
  },
  UPDATE_TASK,
  DELETE_TASK
);
