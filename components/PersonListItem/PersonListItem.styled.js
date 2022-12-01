import styled from "styled-components";

const StyledPersonListItem = styled.li`
  position: relative;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const StyledPersonListItemContent = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

const StyledPersonListItemPersonName = styled.p``;

const DeleteButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 3px;
  height: 1.5rem;
  width: 1.5rem;
  background-color: ${(props) => props.theme.colors.primaryColor};
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  color: #fff;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverColor};
    transition: 0.7s;
  }
`;

export {
  StyledPersonListItem,
  StyledPersonListItemContent,
  DeleteButtonStyled,
  StyledPersonListItemPersonName,
};
