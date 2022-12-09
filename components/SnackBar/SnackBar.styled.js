import styled from "styled-components";

const StyledSnackbar = styled.p`
  text-align: center;
  font-weight: 800;
  font-size: 0.9rem;
  font-weight: 300;
  background-color: ${(props) => props.backColor};
  border-radius: 5px;
  color: white;
`;

const StyledSnackContainer = styled.div`
  position: fixed;
  display: flexbox;
  flex-wrap: wrap;
  align-items: center;
  min-height: 250px;
  min-width: 250px;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.backColor};
`;

export { StyledSnackbar, StyledSnackContainer };
