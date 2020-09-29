import styled from "styled-components";
import { Flex } from "../Layouts/styled";

export const Container = styled(Flex)`
  width: 100%;
  opacity: ${(props) => (props.done ? "0.2" : "1")};
  height: auto;
  font-size: 1em;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  background: transparent;
  border-radius: 50%;
  margin: 15px;
  width: 35px;
  height: 35px;
  color: white;
  border: 2px solid white;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.5;
  }
`;

export const Checkbox = styled.input`
  top: 0;
  left: 0;
  height: 35px;
  margin: 15px;
  width: 35px;
  background-color: #eee;
`;

export const Text = styled.label`
  text-align: center;
  width: fit-content;
  margin: auto 0 auto 0;
`;
