import styled from "styled-components";

const StyledSnackbar = styled.p`
  text-align: center;
  font-weight: 800;
  font-size: 0.9rem;
  font-weight: 300;
  background-color: ${(props) => props.backColor};
  border-radius: 5px;
  color: white;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default StyledSnackbar;
