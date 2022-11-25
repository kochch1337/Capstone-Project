import styled, { ThemeProvider } from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const StyledNav = styled.nav`
  background: ${(props) => props.theme.colors.primaryColor};
  border-top: 1px solid ${(props) => props.theme.colors.borderColor};
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
  border: 1pt solid ${(props) => props.theme.colors.borderColor};
  color: ${(props) => props.theme.colors.primaryFontColor};
  font-size: 1em;
  padding: 1.5em 0.5em;
  float: left;
  text-align: center;
  width: 100%;
  height: 100%;
  positon: center;
  background: ${({ active }) =>
    active
      ? (props) => props.theme.colors.activeColor
      : (props) => props.theme.colors.primaryColor};

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverColor};
    transition: 0.7s;
  }
`;

export {
  StyledFooter,
  StyledNav,
  StyledNavigationList,
  StyledNavigationListItem,
  StyledNavLink,
};
