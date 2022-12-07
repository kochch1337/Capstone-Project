import { useRouter } from "next/router.js";
import {
  FormsBase,
  TextElement,
  ButtonContainer,
} from "../InputForm/InputForm.styled";
import ButtonNew from "../../components/Button";
import { useState } from "react";
import { StyledHeader } from "../Card/Card.styled";
import SnackBar from "../SnackBar";
import SelectRole from "../SelectRole";

const maxFirstnameLength = 80;
const minFirstnameLength = 2;
const maxLastnameLength = 80;
const minLastnameLength = 2;

export default function PersonChanger({ addPerson, updatePerson, person }) {
  const router = useRouter();

  const [showSnack, setShowSnack] = useState(false);

  const [inputCounterFirstname, setInputCounterFirstname] =
    useState(maxFirstnameLength);
  const [inputCounterLastanme, setInputCounterLastname] =
    useState(maxLastnameLength);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const { select_role, person_firstname, person_lastname } =
      Object.fromEntries(data);

    const firstName = person_firstname.trim();
    if (firstName.length === 0) {
      alert(
        `Please enter a firstname name with at least ${minFirstnameLength} chars that are not whitespaces`
      );
      return;
    }

    const lastName = person_lastname.trim();
    if (lastName.length === 0) {
      alert(
        `Please enter a lastname with at least ${minLastnameLength} chars that are not whitespaces`
      );
      return;
    }

    if (person != undefined) {
      const newPerson = {
        personal_Id: person.personal_Id,
        firstname: firstName,
        lastname: lastName,
        role: select_role,
      };

      updatePerson(newPerson);
    } else {
      const newPerson = {
        personal_Id: crypto.randomUUID(),
        firstname: firstName,
        lastname: lastName,
        role: select_role,
      };

      addPerson(newPerson);
    }

    setShowSnack(true);
  }

  return (
    <>
      <StyledHeader>Add new person</StyledHeader>
      <FormsBase data-js="form" onSubmit={onSubmit}>
        <label htmlFor="person_firstname">Firstname:</label>
        <input
          type="text"
          name="person_firstname"
          id="person_firstname"
          defaultValue={person != undefined ? person.firstname : ""}
          placeholder={`Please enter the first name of the person (${minFirstnameLength}-${maxFirstnameLength} chars)`}
          minLength={minFirstnameLength}
          maxLength={maxFirstnameLength}
          onChange={(event) => {
            setInputCounterFirstname(
              maxFirstnameLength - event.target.value.length
            );
          }}
          required
        ></input>
        <TextElement>{inputCounterFirstname} characters left</TextElement>
        <label htmlFor="person_lastname">Lastname:</label>
        <input
          type="text"
          name="person_lastname"
          id="person_lastname"
          defaultValue={person != undefined ? person.lastname : ""}
          placeholder={`Please enter the lastname of the person (${minLastnameLength}-${maxLastnameLength} chars)`}
          minLength={minLastnameLength}
          maxLength={maxLastnameLength}
          onChange={(event) => {
            setInputCounterLastname(
              maxLastnameLength - event.target.value.length
            );
          }}
          required
        ></input>
        <TextElement>{inputCounterLastanme} characters left</TextElement>
        <SelectRole person={person} />
        {showSnack && (
          <SnackBar
            text={"Person saved"}
            onClose={() => {
              router.push(`/persons`);
            }}
          />
        )}
        {!showSnack && <p> </p>}
        <ButtonContainer>
          <ButtonNew type="reset" variant="reset">
            Reset
          </ButtonNew>
          <ButtonNew type="submit" variant="submit">
            {person != undefined ? "update" : "save"}
          </ButtonNew>
        </ButtonContainer>
      </FormsBase>
    </>
  );
}
