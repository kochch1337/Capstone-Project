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
            <Link href="/modules" passHref legacyBehavior>
              <StyledNavLink active={pathname === "/modules"}>
                Modules
              </StyledNavLink>
            </Link>
          </StyledNavigationListItem>
          <StyledNavigationListItem>
            <Link href="/persons" passHref legacyBehavior>
              <StyledNavLink active={pathname === "/persons"}>
                Persons
              </StyledNavLink>
            </Link>
          </StyledNavigationListItem>
          <StyledNavigationListItem>
            <Link href="/newEntries" passHref legacyBehavior>
              <StyledNavLink active={pathname === "/newEntries"}>
                +
              </StyledNavLink>
            </Link>
          </StyledNavigationListItem>
        </StyledNavigationList>
      </StyledNav>
    </StyledFooter>
  );
}
