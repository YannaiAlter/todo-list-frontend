import styled from "styled-components";
import { Flex } from "../Layouts/styled";

export const Input = styled.input<any>`
  width: 100%;
  border-radius: 10px;
  font-size: 1.5em;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

export const Container = styled(Flex)`
  position: relative;
  width: 100%;
`;
