import { combineReducers } from "redux";
import tasks from "./Reducers/todo.reducer";

const roootReducer = combineReducers({
  tasks
});

export default roootReducer;
