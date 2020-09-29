import * as React from "react";
import { useState } from "react";
import { Todo } from "../../models/Todo";
import Spinner from "../Spinner/SpinnerStyled";
import { Container, Input } from "./AddTodoStyled";

interface IAddTodoProps {
  onNew: (newTodo: Todo) => void;
}

const AddTodo: React.FunctionComponent<IAddTodoProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");

  const handleNewTodo = async (e) => {
    if (e.key === "Enter") {
      //Start loading
      setIsLoading(true);
      //Remove input
      const todo: Todo = { content: content, isDone: false };
      //Callback parent
      await props.onNew(todo);
      setContent("");
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => setContent(e.target.value);

  return (
    <Container flow="row">
      {isLoading && <Spinner />}
      <Input
        placeholder="Enter todo and click 'enter'"
        value={content}
        onKeyDown={handleNewTodo}
        onChange={handleInputChange}
      />
    </Container>
  );
};

export default AddTodo;
