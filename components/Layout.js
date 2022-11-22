import styled from "styled-components";
import NavFooter from "./NavFooter";

export default function Layout({ children }) {
  return (
    <>
      <PageWrapper>{children}</PageWrapper>
      <NavFooter />
    </>
  );
}

const PageWrapper = styled.main`
  padding: 1.5rem;
  padding-bottom: 5%;
`;
