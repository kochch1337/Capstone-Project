import { useEffect, useState } from "react";
import { StyledSnackbar, StyledSnackContainer } from "./SnackBar.styled";

export default function SnackBar({
  text,
  onClose,
  backColor,
  setParentSnackState,
}) {
  const [showSnack, setShowSnack] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShowSnack(false);
      if (setParentSnackState != undefined) {
        setParentSnackState(false);
      }

      onClose?.();
    }, 3000);

    return () => clearTimeout(timeoutID);
  }, []);

  return showSnack ? (
    <StyledSnackContainer>
      <StyledSnackbar backColor={backColor}>{text}</StyledSnackbar>
    </StyledSnackContainer>
  ) : null;
}
