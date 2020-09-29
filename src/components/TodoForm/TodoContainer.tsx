import * as React from "react";
import AddTodo from "../AddTodo/AddTodo";
import { Title } from "../Layouts/styled";
import Todo from "../Todo/Todo";
import { Container } from "./TodoContainerStyled";
import { Todo as TodoModel } from "../../models/Todo";
import { useState } from "react";
import { useEffect } from "react";
import {
  addTodo,
  getAllTodos,
  orderById,
  removeTodo,
  updateTodo,
} from "./TodoApi";

interface ITodoContainerProps {
  todos?: TodoModel[];
}

const TodoContainer: React.FunctionComponent<ITodoContainerProps> = (props) => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const refreshTodos = () => {
    getAllTodos().then((todos) => {
      setTodos(orderById(todos));
    });
  };

  const handleDone = async (updatedTodo: TodoModel) => {
    await updateTodo(updatedTodo);
    const newTodos = todos.filter((todo) => todo.id !== updatedTodo.id);
    newTodos.push(updatedTodo);

    setTodos(orderById(newTodos));
  };

  const handleRemove = async (id: number) => {
    await removeTodo(id);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleNew = async (newTodo: TodoModel) => {
    //result will contain id
    const result = await addTodo(newTodo);
    setTodos([...todos, result]);
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  return (
    <Container flow="column">
      <Title>Todo List</Title>
      {todos.map((todo: TodoModel) => (
        <Todo todo={todo} onDone={handleDone} onRemove={handleRemove} />
      ))}
      <AddTodo onNew={handleNew} />
    </Container>
  );
};

export default TodoContainer;
