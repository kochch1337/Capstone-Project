import { Select } from "./SelectPerson.styled";

export default function SelectPerson({
  personsData,
  filter,
  responsibility,
  setPersonId,
}) {
  let filteredPersons = personsData;

  if (filter !== undefined) {
    filteredPersons = personsData.filter((person) => person.role === filter);
  }

  function handleChange(event) {
    setPersonId(event.target.value);
  }

  return (
    <>
      <label htmlFor="select-person">{responsibility}:</label>
      <Select
        id="select-person"
        defaultValue={""}
        onChange={(event) => handleChange(event)}
        required
      >
        <option key="none" value="" disabled>
          Please select a person
        </option>
        {filteredPersons.map((person) => {
          return (
            <option key={person.personal_Id} value={person.personal_Id}>
              {person.firstname} {person.lastname}
            </option>
          );
        })}
      </Select>
    </>
  );
}
