import {
  StyledPersonListItem,
  StyledPersonListItemContent,
  DeleteButtonStyled,
  StyledPersonListItemPersonName,
} from "./PersonListItem.styled";

export default function PersonListItem({ person, deletePerson }) {
  function deleteSelectedPerson() {
    deletePerson(person.personal_Id);
  }

  return (
    <>
      <StyledPersonListItem>
        <StyledPersonListItemContent>
          <StyledPersonListItemPersonName>
            {person.firstname} {person.lastname}
          </StyledPersonListItemPersonName>
          <DeleteButtonStyled type="button" onClick={deleteSelectedPerson}>
            x
          </DeleteButtonStyled>
        </StyledPersonListItemContent>
      </StyledPersonListItem>
    </>
  );
}
