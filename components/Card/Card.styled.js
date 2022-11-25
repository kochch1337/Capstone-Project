import styled, { ThemeProvider } from "styled-components";

const StyledCard = styled.li`
  position: relative;
  color: var(--granite);
  width: 100%;

  border-radius: 5px;
  overflow: hidden;
  background-color: var(--water);
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const StyledCardContent = styled.div`
  padding: 10px 20px;
  display: flexbox;
  flex-wrap: wrap;
  gap: 20px;
`;

const StyledCardContentElement = styled.div`
  padding: 10px 20px;
  gap: 20px;
`;

const StyledCardTitle = styled.h2`
  background-color: hotpink;
`;

const StyledCardModuleList = styled.ul`
  text-align: justify;
  padding: 0px;
  display: inline-block;
  justify-content: space-between;
`;

const StyledCardModuleListItem = styled.li`
  display: inline-block;
  padding: 0px 5px;
  margin-left: -5px;
`;

const StyledListContainer = styled.ul`
  padding 5px 5px 10% 5px
`;

const StyledHeader = styled.h1`
  color: #fff;
  background-color: #6e1e6e;
`;

export {
  StyledCard,
  StyledCardContent,
  StyledCardContentElement,
  StyledCardTitle,
  StyledCardModuleList,
  StyledCardModuleListItem,
  StyledListContainer,
  StyledHeader,
};
