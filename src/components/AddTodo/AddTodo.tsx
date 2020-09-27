import * as React from "react";
import { useState } from "react";
import Spinner from "../Spinner/SpinnerStyled";
import { Container, Input } from "./AddTodoStyled";

interface IAddTodoProps {}

const AddTodo: React.FunctionComponent<IAddTodoProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Container flow="row">
      {isLoading && <Spinner />}
      <Input placeholder="Enter todo and click 'enter'" />
    </Container>
  );
};

export default AddTodo;
