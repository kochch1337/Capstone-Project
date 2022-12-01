import styled from "styled-components";

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { TextElement, FormsBase, ButtonContainer };
