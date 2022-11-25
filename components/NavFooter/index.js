import { useRouter } from "next/router.js";
import Link from "next/link.js";
import {
  StyledFooter,
  StyledNav,
  StyledNavigationList,
  StyledNavigationListItem,
  StyledNavLink,
} from "./NavFooter.styled";

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
            <Link href="/Persons" passHref legacyBehavior>
              <StyledNavLink active={pathname === "/Persons"}>
                Persons
              </StyledNavLink>
            </Link>
          </StyledNavigationListItem>
          <StyledNavigationListItem>
            <Link href="/New" passHref legacyBehavior>
              <StyledNavLink active={pathname === "/New"}>+</StyledNavLink>
            </Link>
          </StyledNavigationListItem>
        </StyledNavigationList>
      </StyledNav>
    </StyledFooter>
  );
}
