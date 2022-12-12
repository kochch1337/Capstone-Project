import { useRouter } from "next/router.js";
import {
  StyledHeader,
  StyledListContainer,
} from "../../components/Card/Card.styled";
import ButtonNew from "../../components/Button";
import Fuse from "fuse.js";
import { useState } from "react";
import SnackBar from "../../components/SnackBar";
import PersonInfo from "../../components/PersonInfo/index.js";

export default function Persons({
  solutionsData,
  modulesData,
  personsData,
  deletePerson,
}) {
  const router = useRouter();
  const query = router.query;
  const [showSnack, setShowSnack] = useState(false);
  const personal_Id = query.personal_Id;

  let persons = [
    ...personsData.sort((a, b) =>
      a.lastname > b.lastname ? 1 : b.lastname > a.lastname ? -1 : 0
    ),
  ];

  if (personal_Id != undefined) {
    persons = personsData.filter(
      (person) => person.personal_Id === personal_Id
    );
  }

  return (
    <>
      <StyledHeader aria-label="Headline" r>
        <b>Persons: </b>
      </StyledHeader>
      <StyledListContainer aria-label="List of persons">
        {persons.map((person) => {
          return (
            <PersonInfo
              key={person.personal_Id}
              solutionsData={solutionsData}
              modulesData={modulesData}
              personsData={personsData}
              person={person}
              deletePerson={deletePerson}
            ></PersonInfo>
          );
        })}
      </StyledListContainer>
      {showSnack && (
        <SnackBar
          text={"Person still in use, abort deletion"}
          backColor="red"
          setParentSnackState={setShowSnack}
        />
      )}
      {!showSnack && <></>}
    </>
  );
}
