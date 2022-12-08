import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  height: 2.5rem;
  width: 6.5rem;
  background-color: ${(props) => props.theme.colors.primaryColor};
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  color: #fff;

  ${({ variant }) =>
    variant === "reset" &&
    css`
      background-color: ${(props) => props.theme.colors.activeColor};
    `}

  ${({ variant }) =>
    variant === "edit" &&
    css`
      height: 3rem;
      width: 3rem;
      border-radius: 100%;
      position: absolute;
      top: 1em;
      right: 5em;
    `}


  ${({ variant }) =>
    variant === "delete" &&
    css`
      height: 3rem;
      width: 3rem;
      border-radius: 100%;
      position: absolute;
      top: 1em;
      right: 1em;
    `}

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverColor};
    transition: 0.7s;
  }
`;

const StyledButtonContainerCentered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export { ButtonStyled, StyledButtonContainerCentered };
