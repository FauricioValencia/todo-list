import { handleActions } from "redux-actions";
// TODO crear todos los actions
const initialState = {
  tasks: [],
  currentTodo: "",
  isLoading: true
};

export default handleActions(
  {
    CREATE_TASK: (state, action) => {
      return {
        ...state,
        // currentTodo: "",
        tasks: state.tasks.concat(action.payload)
      };
    },
    UPDATE_TASK: (state, action) => {
      // let task = state.tasks.action.payload
      return {
        ...state
      };
    },
    DELETE_TASK: (state, action) => {
      let arrayTasks = state.tasks;
      let index = action.payload.index;
      arrayTasks.splice(index, 1);
      return {
        ...state,
        tasks: arrayTasks
      };
    }
  },
  initialState
);
