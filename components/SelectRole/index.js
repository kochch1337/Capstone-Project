import { Select } from "./SelectRole.styled";

export default function SelectRole({ person }) {
  return (
    <>
      <label htmlFor="select_role">Select Role:</label>
      <Select
        id="select_role"
        defaultValue={person != undefined ? person.role : ""}
        name="select_role"
        required
      >
        <option key="none" value="" disabled>
          Please select a role
        </option>

        <option key="dev" value="dev">
          Developer
        </option>
        <option key="bc" value="bc">
          Consultant
        </option>
      </Select>
    </>
  );
}
