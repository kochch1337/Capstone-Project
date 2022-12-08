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
  modulesData,
  personsData,
  addModule,
  updateModule,
  module,
}) {
  const router = useRouter();

  const [showSnack, setShowSnack] = useState(false);
  const [showSolutionSnack, setShowSolutionSnack] = useState(false);
  const [showModuleSnack, setModuleShowSnack] = useState(false);
  const [showDeveloperSnack, setShowDeveloperSnack] = useState(false);
  const [showBpaSnack, setShowBpaSnack] = useState(false);
  const [inputCounterModule, setInputCounterModule] = useState(maxModuleLength);
  const [inputDeveloper, setInputDeveloper] = useState();
  const [devList, setDevList] = useState([]);
  const [inputBpa, setInputBpa] = useState();
  const [bpaList, setBpaList] = useState([]);
  const [moduleNameExists, setModuleNameExists] = useState();
  let preselectSolution;
  let moduleName;

  if (module != undefined) {
    useEffect(() => {
      setDevList(module.developer);
      setBpaList(module.bpa);

      setInputDeveloper(module.developer[0]);
      setInputBpa(module.bpa[0]);
    }, []);

    preselectSolution = solutionsData.find((sol) =>
      sol.modules.includes(module.module_Id)
    );
  }

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const { module_name, select_solution } = Object.fromEntries(data);

    moduleName = module_name.trim();
    moduleName = moduleName.toUpperCase();
    if (moduleName.length === 0) {
      setShowSolutionSnack(true);
      return;
    }

    console.log(modulesData);
    console.log(moduleName);

    const moduleFound = modulesData.find(
      (module) => module.module === moduleName
    );

    console.log(moduleFound);

    if (moduleFound != undefined) {
      setModuleNameExists(moduleName);
      setModuleShowSnack(true);
      return;
    }

    if (devList < 1) {
      setShowDeveloperSnack(true);
      return;
    }

    if (bpaList < 1) {
      setShowBpaSnack(true);
      return;
    }

    const solution = solutionsData.find(
      (sol) => sol.solution_Id === select_solution
    );

    if (module != undefined) {
      const newModule = {
        module_Id: module.module_Id,
        module: moduleName,
        developer: devList,
        bpa: bpaList,
      };

      updateModule(
        newModule,
        solution.solution_Id,
        preselectSolution.solution_Id
      );
    } else {
      const newModule = {
        module_Id: crypto.randomUUID(),
        module: moduleName,
        developer: devList,
        bpa: bpaList,
      };

      addModule(newModule, solution.solution_Id);
    }

    setShowSnack(true);
  }

  function addDeveloper() {
    if (inputDeveloper === undefined || inputDeveloper === "noSelect") {
    } else {
      const personalIdAsString = inputDeveloper.toString();
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
    if (inputBpa === undefined || inputBpa === "noSelect") {
    } else {
      const personalIdAsString = inputBpa.toString();
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
        <SelectSolution
          solutionsData={solutionsData}
          preselectSolution={preselectSolution}
        ></SelectSolution>
        <label htmlFor="module_name">New Module:</label>
        <input
          type="text"
          name="module_name"
          id="module_name"
          defaultValue={module != undefined ? module.module : ""}
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
          defaultPerson={
            module != undefined ? module.developer[0].toString() : ""
          }
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
          defaultPerson={module != undefined ? module.bpa[0].toString() : ""}
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
            text={"Module saved"}
            backColor="green"
            onClose={() => {
              router.push(`/modules`);
            }}
          />
        )}
        {!showSnack && <></>}
        {showSolutionSnack && (
          <SnackBar
            text={`Please enter a module name with at least ${minModuleLength} chars that are not whitespaces`}
            backColor="red"
          />
        )}
        {!showSolutionSnack && <></>}
        {showModuleSnack && (
          <SnackBar
            text={`Module ${moduleNameExists} already exists. Please use another unique name`}
            backColor="red"
          />
        )}
        {!showModuleSnack && <></>}
        {showDeveloperSnack && (
          <SnackBar
            text={`Please assaign at least one developer`}
            backColor="red"
          />
        )}
        {!showDeveloperSnack && <></>}
        {showBpaSnack && (
          <SnackBar text={`Please assaign at least one BPA`} backColor="red" />
        )}
        {!showBpaSnack && <></>}
        <ButtonContainer>
          <ButtonNew type="reset" variant="reset">
            Reset
          </ButtonNew>
          <ButtonNew type="submit" variant="submit">
            {module != undefined ? "update" : "save"}
          </ButtonNew>
        </ButtonContainer>
      </FormsBase>
    </>
  );
}
