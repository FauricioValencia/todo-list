import React, { useState, useEffect } from "react";

// ? HOC
import Connect from "../../Hoc/Connect.hoc";
// ? COMPONENTS
import Form from "../../Components/Form/Form.Component";
import ListTodo from "../../Components/List/List.component";
// ! REDUX
import { createTask } from "../../Shared/Redux/Actions/todo.actions";
function Todo({ dispatch, state }) {
  const [stateSpinner, setStateSpinner] = useState(false);

  useEffect(() => {});
  console.log("state: ", state);

  // * Functions components
  const handleSubmit = (e, title, description) => {
    e.preventDefault();
    dispatch(createTask({ title, description }));
    setStateSpinner(false);
  };
  const handleDelete = () => {};
  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        stateSpinner={stateSpinner}
        setStateSpinner={() => setStateSpinner(true)}
      />
      {state.tasks.tasks.length>0 && <ListTodo data={state.tasks.tasks} />}
    </>
  );
}

export default Connect(Todo);
