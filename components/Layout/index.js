import styled from "styled-components";
import NavFooter from "../NavFooter";
import Theme from "../../Theme";

export default function Layout({ children }) {
  return (
    <>
      <Theme>
        <StyledHeader>Business Process Overview</StyledHeader>
        <PageWrapper>{children}</PageWrapper>
        <NavFooter />
      </Theme>
    </>
  );
}

const PageWrapper = styled.main`
  padding: 5em 1em 5em 1em;

  @media (min-width: 769px) {
    width: 768px;
  }
`;

const StyledHeader = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${(props) => props.theme.colors.primaryColor};
  border-top: 1px solid ${(props) => props.theme.colors.borderColor};
  color: ${(props) => props.theme.colors.primaryFontColor};
  padding: 0;
  margin: 0;
  text-align: center;
  z-index: 1;
`;
