import { Todo } from "../../models/Todo";

const url = process.env.APP_BACKEND_URL;

export const getAllTodos = async () => {
  return await fetch(url + "api/todos").then((response) => response.json());
};

export const addTodo = async (todo: Todo) => {
  const response = await fetch(url + "api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ todo }),
  });
  return response.json();
};

export const updateTodo = async (todo: Todo) => {
  const response = await fetch(url + "api/todos/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ todo }),
  });
  return response.json();
};

export const removeTodo = async (id: number) => {
  const response = await fetch(url + "api/todos/remove", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ id }),
  });
  return response.json();
};

export const orderById = (todos: Todo[]): Todo[] =>
  todos.sort((first, second) => first.id! - second.id!);
