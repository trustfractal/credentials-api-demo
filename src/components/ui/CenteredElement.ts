import styled from "styled-components";

export const CenteredElement = styled.div`
  margin: auto;
  button {
    margin: auto;
  }
`;

export const CenteredFlexElement = styled(CenteredElement)`
  display: flex;
  justify-content: space-evenly;
`;
