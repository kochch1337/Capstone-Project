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
  const solutionid = query.SolutionId;
  const moduleName = query.Module;

  const searchOptionsModule = {
    includeScore: true,
    includeMatches: true,
    useExtendedSearch: true,
    keys: ["developer", "bpa"],
  };

  const searchOptionsSolutions = {
    includeScore: true,
    includeMatches: true,
    useExtendedSearch: true,
    keys: ["bpe", "bseint", "bsegr", "leadDeveloper", "cbo"],
  };

  let devs = personsData.filter((dev) => dev.role === "dev");
  let bpas = personsData.filter((dev) => dev.role === "bc");

  if (solutionid !== undefined && moduleName !== undefined) {
    const solutionData = solutionsData.find(
      (solution) => solution.solution_Id === solutionid
    );

    const moduleData = solutionData.modules.find(
      (module) => module.module === moduleName
    );
    devs = moduleData.developer;
  }

  if (solutionid !== undefined && moduleName !== undefined) {
    const solutionData = solutionsData.find(
      (solution) => solution.solution_Id === solutionid
    );

    const moduleData = solutionData.modules.find(
      (module) => module.module === moduleName
    );
    bpas = moduleData.bpa;
  }

  return (
    <>
      <StyledHeader>Developers</StyledHeader>
      <StyledListContainer>
        {devs.map((person) => {
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
      <StyledHeader>BPAs:</StyledHeader>
      <StyledListContainer>
        {bpas.map((person) => {
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
