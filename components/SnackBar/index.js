import { useEffect, useState } from "react";
import StyledSnackbar from "./SnackBar.styled";

export default function SnackBar({ text, onClose }) {
  const [showSnack, setShowSnack] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShowSnack(false);
      onClose?.();
    }, 3000);

    return () => clearTimeout(timeoutID);
  }, []);

  return showSnack ? <StyledSnackbar>{text}</StyledSnackbar> : null;
}
