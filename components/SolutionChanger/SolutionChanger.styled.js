import styled, { ThemeProvider } from "styled-components";

const TextElement = styled.p`
  text-align: right;
`;

const FormsBase = styled.form`
  max-width: 45rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export { TextElement, FormsBase };
