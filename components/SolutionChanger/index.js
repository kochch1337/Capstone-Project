import { useRouter } from "next/router.js";
import {
  FormsBase,
  TextElement,
  ButtonContainer,
} from "../InputForm/InputForm.styled";
import ButtonNew from "../../components/Button";
import SelectPerson from "../SelectPerson";
import { useState } from "react";
import { StyledHeader } from "../Card/Card.styled";
import SnackBar from "../SnackBar";

const maxSolutionLength = 20;
const minSolutionLength = 2;
const maxTeamLength = 4;
const minTeamLength = 2;
const maxSupportGroupLength = 30;
const minSupportGroupLength = 2;

export default function SolutionChanger({
  solutionsData,
  personsData,
  addSolution,
}) {
  const router = useRouter();

  const [showSnack, setShowSnack] = useState(false);

  const [inputCounterSolution, setInputCounterSolution] =
    useState(maxSolutionLength);
  const [inputCounterTeam, setInputCounterTeam] = useState(maxTeamLength);
  const [inputCounterSupportGroup, setInputCounterSupportGroup] = useState(
    maxSupportGroupLength
  );

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const {
      solution_name,
      team_name,
      bpe,
      bseint,
      bsegr,
      leadDeveloper,
      cbo,
      support_group,
    } = Object.fromEntries(data);

    const solutionName = solution_name.trim();
    if (solutionName.length === 0) {
      alert(
        `Please enter a solution name with at least ${minSolutionLength} chars that are not whitespaces`
      );
      return;
    }

    if (
      solutionsData.filter((solution) => solution.solution === solutionName)
        .length > 0
    ) {
      alert(
        `Solution ${solutionName} already exists. Please choose a unique name.`
      );
      return;
    }

    const teamName = team_name.trim();
    if (teamName.length === 0) {
      alert(
        `Please enter a team name with at least ${minTeamLength} chars that are not whitespaces`
      );
      return;
    }

    const supportGroupName = support_group.trim();
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
      bpe: [bpe],
      bseint: [bseint],
      bsegr: [bsegr],
      leadDeveloper: [leadDeveloper],
      cbo: [cbo],
      supportGroup: supportGroupName,
      modules: [],
    };

    addSolution(newSolution);
    setShowSnack(true);
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
          responsibility="bpe"
          titleHeader="BPE"
        />
        <SelectPerson
          personsData={personsData}
          filter="bc"
          responsibility="bseint"
          titleHeader="BSEINT"
        />
        <SelectPerson
          personsData={personsData}
          filter="bc"
          responsibility="bsegr"
          titleHeader="BSEGR"
        />
        <SelectPerson
          personsData={personsData}
          filter="dev"
          responsibility="leadDeveloper"
          titleHeader="Lead Developer"
        />
        <SelectPerson
          personsData={personsData}
          filter="bc"
          responsibility="cbo"
          titleHeader="CBO"
        />
        {showSnack && (
          <SnackBar
            text={"Solution saved"}
            onClose={() => {
              router.push(`/`);
            }}
          />
        )}
        {!showSnack && <p> </p>}
        <ButtonContainer>
          <ButtonNew type="reset" variant="reset">
            Reset
          </ButtonNew>
          <ButtonNew type="submit" variant="submit">
            Add new Solution
          </ButtonNew>
        </ButtonContainer>
      </FormsBase>
    </>
  );
}
