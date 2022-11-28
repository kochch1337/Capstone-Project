import { useRouter } from "next/router.js";
import {
  FormsBase,
  TextElement,
  ButtonContainer,
} from "./SolutionChanger.styled";
import ButtonNew from "../../components/Button";
import SelectPerson from "../SelectPerson";
import { useState } from "react";
import { StyledHeader } from "../Card/Card.styled";

const maxSolutionLength = 20;
const minSolutionLength = 2;
const maxTeamLength = 4;
const minTeamLength = 2;
const maxSupportGroupLength = 30;
const minSupportGroupLength = 2;

export default function SolutionChanger({
  mainData,
  personsData,
  addSolution,
}) {
  const router = useRouter();

  const [inputCounterSolution, setInputCounterSolution] =
    useState(maxSolutionLength);
  const [inputCounterTeam, setInputCounterTeam] = useState(maxTeamLength);
  const [inputCounterSupportGroup, setInputCounterSupportGroup] = useState(
    maxSupportGroupLength
  );

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = new FormData(event.target.form);

    const solutionName = data.get("solution_name").trim();
    if (solutionName.length === 0) {
      alert(
        `Please enter a solution name with at least ${minSolutionLength} chars that are not whitespaces`
      );
      return;
    }

    const teamName = data.get("team_name").trim();
    if (teamName.length === 0) {
      alert(
        `Please enter a team name with at least ${minTeamLength} chars that are not whitespaces`
      );
      return;
    }

    const supportGroupName = data.get("support_group").trim();
    if (supportGroupName.length === 0) {
      alert(
        `Please enter a support-group with at least ${minSupportGroupLength} chars that are not whitespaces`
      );
      return;
    }

    const newSolution = {
      solution_Id: crypto.randomUUID(),
      solution: solutionName,
      team: teamName,
      bpe: personsData.find((person) => person.personal_Id === data.get("BPE")),
      bseint: personsData.find(
        (person) => person.personal_Id === data.get("BSEINT")
      ),
      bsegr: personsData.find(
        (person) => person.personal_Id === data.get("BSEGR")
      ),
      leadDeveloper: personsData.find(
        (person) => person.personal_Id === data.get("Lead Developer")
      ),
      cbo: personsData.find((person) => person.personal_Id === data.get("CBO")),
      supportGroup: supportGroupName,
      modules: [],
    };

    addSolution(newSolution);
    alert("Solution saved");
    router.push("/");
  }

  return (
    <>
      <StyledHeader>Add new solution</StyledHeader>
      <FormsBase data-js="form" onSubmit={onSubmit}>
        <label htmlFor="solution_name">Name of the solution:</label>
        <input
          type="text"
          name="solution_name"
          id="solution_name"
          placeholder="Please enter the name of the solution (2-20 chars)"
          minLength={minSolutionLength}
          maxLength={maxSolutionLength}
          onChange={(event) => {
            setInputCounterSolution(
              maxSolutionLength - event.target.value.length
            );
          }}
          required
        ></input>
        <TextElement data-js="solution_left">
          {inputCounterSolution} characters left
        </TextElement>
        <label htmlFor="team_name">Team:</label>
        <input
          type="text"
          name="team_name"
          id="team_name"
          placeholder="Please enter Team name"
          minLength={minTeamLength}
          maxLength={maxTeamLength}
          onChange={(event) => {
            setInputCounterTeam(maxTeamLength - event.target.value.length);
          }}
          required
        ></input>
        <TextElement data-js="team_left">
          {inputCounterTeam} characters left
        </TextElement>
        <label htmlFor="support_group">Support-Group:</label>
        <input
          type="text"
          name="support_group"
          id="support_group"
          placeholder="Please enter the name of the support group"
          minLength={minSupportGroupLength}
          maxLength={maxSupportGroupLength}
          onChange={(event) => {
            setInputCounterSupportGroup(
              maxSupportGroupLength - event.target.value.length
            );
          }}
          required
        />
        <TextElement data-js="support_left">
          {inputCounterSupportGroup} characters left
        </TextElement>
        <SelectPerson
          personsData={personsData}
          filter="bc"
          responsibility="BPE"
        />
        <SelectPerson
          personsData={personsData}
          filter="bc"
          responsibility="BSEINT"
        />
        <SelectPerson
          personsData={personsData}
          filter="bc"
          responsibility="BSEGR"
        />
        <SelectPerson
          personsData={personsData}
          filter="dev"
          responsibility="Lead Developer"
        />
        <SelectPerson
          personsData={personsData}
          filter="bc"
          responsibility="CBO"
        />
        <ButtonContainer>
          <ButtonNew
            type="cancel"
            variant="cancel"
            onClick={(event) => {
              event.preventDefault();
              router.push("/New");
            }}
          >
            Cancel
          </ButtonNew>
          <ButtonNew type="submit" variant="submit">
            Add new Solution
          </ButtonNew>
        </ButtonContainer>
      </FormsBase>
    </>
  );
}
