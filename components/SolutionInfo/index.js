import Link from "next/link";
import {
  StyledCard,
  StyledCardContent,
  StyledCardContentElement,
  StyledCardTitle,
  StyledCardModuleList,
  StyledCardModuleListItem,
} from "../Card/Card.styled";
import ButtonNew from "../Button";
import { useRouter } from "next/router.js";
import SnackBar from "../SnackBar";
import { useState } from "react";

export default function SolutionInfo({
  solution,
  modulesData,
  personsData,
  deleteSolution,
}) {
  const router = useRouter();
  const [showSnack, setShowSnack] = useState(false);
  const [showModulesSnack, setShowModulesSnack] = useState(false);

  function editSolution(event) {
    event.preventDefault();

    const solution_id = event.target.parentElement.parentElement.id;

    router.push({
      pathname: "/createSolution",
      query: { solution_Id: solution_id },
    });
  }

  function removeSolution(event) {
    event.preventDefault();
    const solution_id = event.target.parentElement.parentElement.id;

    if (solution.modules.length > 0) {
      setShowModulesSnack(true);
    } else {
      deleteSolution(solution_id);
      setShowSnack(true);
    }
  }

  return (
    <>
      <StyledCard key={solution.solution_Id} id={solution.solution_Id}>
        <StyledCardContent>
          <StyledCardTitle>
            {solution.modules.length > 0 && (
              <Link
                href={{
                  pathname: "/modules",
                  query: {
                    SolutionId: solution.solution_Id,
                  },
                }}
                passHref
              >
                {solution.solution}
              </Link>
            )}
            {solution.modules.length === 0 && solution.solution}
          </StyledCardTitle>
          <ButtonNew type="button" variant="edit" onClick={editSolution}>
            Edit
          </ButtonNew>
          <ButtonNew type="button" variant="delete" onClick={removeSolution}>
            Delete
          </ButtonNew>
        </StyledCardContent>

        <StyledCardContent>
          <StyledCardContentElement>
            <b>Team: </b>
            {solution.team}
          </StyledCardContentElement>
          <StyledCardContentElement>
            <b>SupportGroup: </b>
            {solution.supportGroup}
          </StyledCardContentElement>
          <StyledCardContentElement>
            <b>BPE: </b>
            {solution.bpe.map((personalid) => {
              const person = personsData.find(
                (pers) => pers.personal_Id == personalid
              );
              return ` ${person.firstname} ${person.lastname}`;
            })}
          </StyledCardContentElement>
          <StyledCardContentElement>
            <b>BSEINT: </b>
            {solution.bseint.map((personalid) => {
              const person = personsData.find(
                (pers) => pers.personal_Id == personalid
              );
              return `${person.firstname} ${person.lastname}`;
            })}
          </StyledCardContentElement>
          <StyledCardContentElement>
            <b>BSEGR: </b>
            {solution.bsegr.map((personalid) => {
              const person = personsData.find(
                (pers) => pers.personal_Id == personalid
              );
              return `${person.firstname} ${person.lastname}`;
            })}
          </StyledCardContentElement>
          <StyledCardContentElement>
            <b>Lead Developer: </b>
            {solution.leadDeveloper.map((personalid) => {
              const person = personsData.find(
                (pers) => pers.personal_Id == personalid
              );
              return `${person.firstname} ${person.lastname}`;
            })}
          </StyledCardContentElement>
          <StyledCardContentElement>
            <b>CBO: </b>
            {solution.cbo.map((personalid) => {
              const person = personsData.find(
                (pers) => pers.personal_Id == personalid
              );
              return `${person.firstname} ${person.lastname}`;
            })}
          </StyledCardContentElement>
          <StyledCardContentElement>
            <StyledCardModuleList>
              <b>Modules:</b>
              {solution.modules.map((moduleid) => {
                const module = modulesData.find(
                  (moduledata) => moduledata.module_Id === moduleid
                );
                return (
                  <StyledCardModuleListItem key={module.module}>
                    <Link
                      href={{
                        pathname: "/modules",
                        query: {
                          SolutionId: solution.solution_Id,
                          ModuleId: module.module_Id,
                        },
                      }}
                      passHref
                    >
                      {module.module}
                    </Link>
                  </StyledCardModuleListItem>
                );
              })}
            </StyledCardModuleList>
          </StyledCardContentElement>
        </StyledCardContent>
      </StyledCard>
      {showSnack && <SnackBar text={"Solution deleted"} backColor="green" />}
      {!showSnack && <></>}
      {showModulesSnack && (
        <SnackBar
          text={`Solution has still modules, please remove them first`}
          backColor="red"
          setParentSnackState={setShowModulesSnack}
        />
      )}
      {!showModulesSnack && <p> </p>}
    </>
  );
}
