import * as React from "react";
import { Checkbox, Container, DeleteButton, Text } from "./TodoStyled";
import { Todo as TodoModel } from "../../models/Todo";

interface ITodoProps {
  todo: TodoModel;
  onDone: (newTodo: TodoModel) => void;
  onRemove: (id: number) => void;
}

const Todo: React.FunctionComponent<ITodoProps> = (props) => {
  return (
    <Container flow="row" done={props.todo.isDone}>
      <Checkbox
        type="checkbox"
        checked={props.todo.isDone}
        onClick={() => {
          const newTodo: TodoModel = { ...props.todo };
          newTodo.isDone = !newTodo.isDone;

          props.onDone(newTodo);
        }}
      />
      <Text>{props.todo.content}</Text>
      <DeleteButton onClick={() => props.onRemove(props.todo.id!)}>
        X
      </DeleteButton>
    </Container>
  );
};

export default Todo;
