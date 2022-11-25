import { useRouter } from "next/router.js";
import { FormsBase, TextElement } from "./SolutionChanger.styled";
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
  setMainData,
  setPersonsData,
}) {
  const router = useRouter();
  const query = router.query;

  const [inputCounterSolution, setInputCounterSolution] =
    useState(maxSolutionLength);
  const [inputCounterTeam, setInputCounterTeam] = useState(maxTeamLength);
  const [inputCounterSupportGroup, setInputCounterSupportGroup] = useState(
    maxSupportGroupLength
  );

  const [bpe, setBpe] = useState();
  const [bseint, setBseint] = useState();
  const [bsegr, setBsegr] = useState();
  const [leadDev, setLeadDev] = useState();
  const [cbo, setCbo] = useState();

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log("Button submitted");
    console.log(data);
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
          data-js="solution_name"
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
          data-js="team_name"
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
          name="support_group-group"
          id="support_group-group"
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
          setPersonId={setBpe}
        />
        <SelectPerson
          personsData={personsData}
          filter="bc"
          responsibility="BSEINT"
          setPersonId={setBseint}
        />
        <SelectPerson
          personsData={personsData}
          filter="bc"
          responsibility="BSEGR"
          setPersonId={setBsegr}
        />
        <SelectPerson
          personsData={personsData}
          filter="dev"
          responsibility="Lead Developer"
          setPersonId={setLeadDev}
        />
        <SelectPerson
          personsData={personsData}
          filter="bc"
          responsibility="CBO"
          setPersonId={setCbo}
        />
        <ButtonNew type="submit" data-js="submit" variant="submit">
          Add new Solution
        </ButtonNew>
        <ButtonNew
          type="cancel"
          data-js="cancel"
          variant="cancel"
          onClick={(event) => {
            event.preventDefault();
            router.push("/New");
          }}
        >
          Cancel
        </ButtonNew>
      </FormsBase>
    </>
  );
}

function AppendCard(cardsState, setCardsState, question, answer, tags) {
  const ids = cardsState.map((card) => {
    return card.id;
  });
  const maxId = Math.max(...ids);
  const newCard = {
    id: maxId + 1,
    question: question,
    answer: answer,
    tags: Array.from(tags),
  };

  setCardsState([...cardsState, newCard]);
}
