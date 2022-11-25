import { ButtonStyled } from "./Button.styled";

export default function ButtonNew({ type, variant, onClick, children }) {
  return (
    <ButtonStyled type={type} variant={variant} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}
