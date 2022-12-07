import { Select } from "./SelectRole.styled";

export default function SelectRole() {
  return (
    <>
      <label htmlFor="select_role">Select Role:</label>
      <Select id="select_role" defaultValue="" name="select_role" required>
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
