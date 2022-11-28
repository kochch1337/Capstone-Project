import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 3px;
  height: 2.5rem;
  width: 6.5rem;
  background-color: ${(props) => props.theme.colors.primaryColor};
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  color: #fff;

  ${({ variant }) =>
    variant === "cancel" &&
    css`
      background-color: ${(props) => props.theme.colors.activeColor};
    `}

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverColor};
    transition: 0.7s;
  }
`;

export { ButtonStyled };
