import { useRouter } from "next/router.js";
import {
  FormsBase,
  TextElement,
  ButtonContainer,
} from "../InputForm/InputForm.styled";
import ButtonNew from "../../components/Button";
import SelectPerson from "../SelectPerson";
import SelectSolution from "../SelectSolution";
import { useState } from "react";
import { StyledHeader } from "../Card/Card.styled";
import SnackBar from "../SnackBar";
import PersonListItem from "../PersonListItem";
import { useEffect } from "react";

const maxModuleLength = 8;
const minModuleLength = 2;

export default function ModuleChanger({
  solutionsData,
  personsData,
  addModule,
}) {
  const router = useRouter();

  const [showSnack, setShowSnack] = useState(false);
  const [inputCounterModule, setInputCounterModule] = useState(maxModuleLength);
  const [inputDeveloper, setInputDeveloper] = useState();
  const [devList, setDevList] = useState([]);
  const [inputBpa, setInputBpa] = useState();
  const [bpaList, setBpaList] = useState([]);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const { module_name, select_solution } = Object.fromEntries(data);

    let moduleName = module_name.trim();
    moduleName = moduleName.toUpperCase();
    if (moduleName.length === 0) {
      alert(
        `Please enter a solution name with at least ${minModuleLength} chars that are not whitespaces`
      );
      return;
    }

    let moduleFound = false;
    solutionsData.forEach((solution) => {
      const found = solution.modules.find(
        (module) => module.module === moduleName
      );

      if (found) {
        moduleFound = found;
      }
    });

    if (moduleFound) {
      alert(
        `Module ${moduleName} already exists. Please use another unique name`
      );
      return;
    }

    if (devList < 1) {
      alert(`Please assaign at least one developer`);
      return;
    }

    if (bpaList < 1) {
      alert(`Please assaign at least one BPA`);
      return;
    }

    const solution = solutionsData.find(
      (sol) => sol.solution_Id === select_solution
    );

    const newModule = {
      module_Id: crypto.randomUUID(),
      module: moduleName,
      developer: devList,
      bpa: bpaList,
    };

    addModule(newModule, solution.solution_Id);

    setShowSnack(true);
  }

  function addDeveloper() {
    const personalIdAsString = inputDeveloper.toString();

    if (inputDeveloper === undefined || inputDeveloper === "noSelect") {
      console.log("No person selected");
    } else {
      if (!devList.includes(personalIdAsString)) {
        setDevList((devList) => [...devList, personalIdAsString]);
      }
    }
  }

  function deleteDeveloper(personal_Id) {
    setDevList((devlist) =>
      devList.filter((personalid) => personalid !== personal_Id)
    );
  }

  function addBpa() {
    const personalIdAsString = inputBpa.toString();

    if (inputBpa === undefined || inputBpa === "noSelect") {
      console.log("No person selected");
    } else {
      if (!bpaList.includes(personalIdAsString)) {
        setBpaList((bpaList) => [...bpaList, personalIdAsString]);
      }
    }
  }

  function deleteBpa(personal_Id) {
    setBpaList((bpaList) =>
      bpaList.filter((personalid) => personalid !== personal_Id)
    );
  }

  return (
    <>
      <StyledHeader>Add new solution</StyledHeader>
      <FormsBase onSubmit={onSubmit}>
        <SelectSolution solutionsData={solutionsData}></SelectSolution>
        <label htmlFor="module_name">New Module:</label>
        <input
          type="text"
          name="module_name"
          id="module_name"
          placeholder="Please enter Module name"
          minLength={minModuleLength}
          maxLength={maxModuleLength}
          onChange={(event) => {
            setInputCounterModule(maxModuleLength - event.target.value.length);
          }}
          required
        ></input>
        <TextElement>{inputCounterModule} characters left</TextElement>
        <SelectPerson
          personsData={personsData}
          filter="dev"
          responsibility="dev"
          titleHeader="Developer"
          onChange={(event) => setInputDeveloper(event.target.value)}
        />
        <ButtonNew type="button" onClick={addDeveloper}>
          Add Developer
        </ButtonNew>
        <ul>
          {devList.map((personalId) => {
            const person = personsData.find(
              (pers) => pers.personal_Id == personalId
            );
            return (
              <PersonListItem
                person={person}
                deletePerson={deleteDeveloper}
                key={person.personal_Id}
              ></PersonListItem>
            );
          })}
        </ul>
        <SelectPerson
          personsData={personsData}
          filter="bc"
          responsibility="bpa"
          titleHeader="BPA:"
          onChange={(event) => setInputBpa(event.target.value)}
        />
        <ButtonNew type="button" onClick={addBpa}>
          Add BPA
        </ButtonNew>
        <ul>
          {bpaList.map((personalId) => {
            const person = personsData.find(
              (pers) => pers.personal_Id == personalId
            );
            return (
              <PersonListItem
                person={person}
                deletePerson={deleteBpa}
                key={person.personal_Id}
              ></PersonListItem>
            );
          })}
        </ul>
        {showSnack && (
          <SnackBar
            text={"Solution saved"}
            onClose={() => {
              console.log("on close started");
              router.push(`/`);
            }}
          />
        )}
        {!showSnack && <></>}
        <ButtonContainer>
          <ButtonNew type="reset" variant="reset">
            Reset
          </ButtonNew>
          <ButtonNew type="submit" variant="submit">
            Add new Module
          </ButtonNew>
        </ButtonContainer>
      </FormsBase>
    </>
  );
}
