import * as React from "react";
import styled from "styled-components";

type InputContainerProps = React.ComponentPropsWithoutRef<"input">;
const InputContainer = styled.input`
  background-color: var(--c-dark-pink);
  color: var(--c-white);

  border-color: var(--c-dark-pink);
  border-width: 0px;

  border-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;

  height: 50px;
  min-width: 300px;

  font-size: 16px;
  line-height: 16px;

  color: var(--c-white);

  @media (min-width: 768px) {
    min-width: 500px;
    font-size: 24px;
    line-height: 24px;
  }

  :focus {
    outline: none;
  }

  ::placeholder {
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 24px;
    }

    text-align: center;

    color: var(--c-white);
  }

  :focus {
    color: var(--c-dark-pink);
    background-color: var(--c-white);

    border-width: 1px;
  }
`;

export default function Input(props: InputContainerProps) {
  return <InputContainer {...props} />;
}
