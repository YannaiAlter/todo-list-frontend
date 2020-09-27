import * as React from "react";
import AddTodo from "../AddTodo/AddTodo";
import { Title } from "../Layouts/styled";
import Todo from "../Todo/Todo";
import { Container } from "./TodoFormStyled";
import { Todo as TodoModel } from "../../models/Todo";

interface ITodoFormProps {
  todos?: TodoModel[];
}

const TodoForm: React.FunctionComponent<ITodoFormProps> = (props) => {
  return (
    <Container flow="column">
      <Title>Todo List</Title>
      {props.todos && props.todos.map((todo) => <Todo>{todo.content}</Todo>)}
      <AddTodo />
    </Container>
  );
};

export default TodoForm;
