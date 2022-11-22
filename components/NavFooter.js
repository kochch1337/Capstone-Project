import styled from "styled-components";
import { useRouter } from "next/router.js";
import Link from "next/link";

export default function NavFooter() {
  const { pathname } = useRouter();

  return (
    <StyledFooter>
      <StyledNav>
        <StyledNavigationList>
          <StyledNavigationListItem>
            <Link href="/" passHref legacyBehavior>
              <StyledNavLink active={pathname === "/"}>Solution</StyledNavLink>
            </Link>
          </StyledNavigationListItem>
          <StyledNavigationListItem>
            <Link href="/Modules" passHref legacyBehavior>
              <StyledNavLink active={pathname === "/Modules"}>
                Modules
              </StyledNavLink>
            </Link>
          </StyledNavigationListItem>
          <StyledNavigationListItem>
            <Link href="/Bps" passHref legacyBehavior>
              <StyledNavLink active={pathname === "/Bps"}>BPs</StyledNavLink>
            </Link>
          </StyledNavigationListItem>
          <StyledNavigationListItem>
            <Link href="/Developers" passHref legacyBehavior>
              <StyledNavLink active={pathname === "/Developers"}>
                Dev
              </StyledNavLink>
            </Link>
          </StyledNavigationListItem>
        </StyledNavigationList>
      </StyledNav>
    </StyledFooter>
  );
}

const footerColor = "green";
const borderColor = "black";
const hoverColor = "hotpink";
const activeColor = "red";
const transparentColor = "transparent";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const StyledNav = styled.nav`
  background: var(--footerColor);
  border-top: 1px solid ${borderColor};
  width: 100%;

  @media (min-width: 769px) {
    width: 768px;
  }
`;

const StyledNavigationList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const StyledNavigationListItem = styled.li`
  float: left;
  width: 25%;
`;

const StyledNavLink = styled.a`
  border: 1pt solid ${borderColor};
  font-size: 1em;
  padding: 1.5em 0.5em;
  float: left;
  text-align: center;
  width: 100%;
  height: 100%;
  positon: center;

  background: ${({ active }) => (active ? activeColor : transparentColor)};

  &:hover {
    background-color: ${hoverColor};
    transition: 0.7s;
  }
`;
