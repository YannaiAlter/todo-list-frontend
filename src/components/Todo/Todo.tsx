import * as React from "react";
import { useState } from "react";
import { Checkbox, Container, DeleteButton, Text } from "./TodoStyled";

interface ITodoProps {
  content?: string;
}

const Todo: React.FunctionComponent<ITodoProps> = (props) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <Container flow="row" done={isDone}>
      <Checkbox type="checkbox" onClick={() => setIsDone(!isDone)} />
      <Text>{props.children}</Text>
      <DeleteButton>X</DeleteButton>
    </Container>
  );
};

export default Todo;
