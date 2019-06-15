import React, { useRef } from "react";
import { Input, Button } from "antd";

export default function Form({ handleSubmit, stateSpinner, setStateSpinner }) {
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  return (
    <form
      onSubmit={e =>
        handleSubmit(
          e,
          titleRef.current.state.value,
          descriptionRef.current.state.value
        )
      }
    >
      <Input type="text" ref={titleRef} required />
      <Input type="text" ref={descriptionRef} required />
      <Button
        type="primary"
        loading={stateSpinner}
        onClick={setStateSpinner}
        htmlType="submit"
         >
        Crear
      </Button>{" "}
    </form>
  );
}
