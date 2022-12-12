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
            <StyledNavLink href="/" passHref active={pathname === "/" ? 1 : 0}>
              Solution
            </StyledNavLink>
          </StyledNavigationListItem>
          <StyledNavigationListItem>
            <StyledNavLink
              href="/modules"
              passHref
              active={pathname === "/modules" ? 1 : 0}
            >
              Modules
            </StyledNavLink>
          </StyledNavigationListItem>
          <StyledNavigationListItem>
            <StyledNavLink
              href="/persons"
              passHref
              active={pathname === "/persons" ? 1 : 0}
            >
              Persons
            </StyledNavLink>
          </StyledNavigationListItem>
          <StyledNavigationListItem>
            <StyledNavLink
              href="/newEntries"
              passHref
              active={pathname === "/newEntries" ? 1 : 0}
            >
              +
            </StyledNavLink>
          </StyledNavigationListItem>
          <StyledNavigationListItem>
            <StyledNavLink
              href="/search"
              passHref
              active={pathname === "/search" ? 1 : 0}
            >
              search
            </StyledNavLink>
          </StyledNavigationListItem>
        </StyledNavigationList>
      </StyledNav>
    </StyledFooter>
  );
}
