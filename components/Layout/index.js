import styled from "styled-components";
import NavFooter from "../NavFooter";
import Theme from "../../Theme";

export default function Layout({ children }) {
  return (
    <>
      <Theme>
        <PageWrapper>{children}</PageWrapper>
        <NavFooter />
      </Theme>
    </>
  );
}

const PageWrapper = styled.main`
  padding: 5px 5px 5em 5px;

  @media (min-width: 769px) {
    width: 768px;
  }
`;
