import styled from "styled-components";

export const Flex = styled.div<any>`
  display: flex;
  flex-flow: ${(props) => props.flow};
`;

export const Title = styled.label`
  font-size: 2em;
  color: white;
  margin: 50px;
`;
