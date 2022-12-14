import Link from "next/link";
import {
  StyledCard,
  StyledCardContent,
  StyledCardTitle,
  StyledCardPersonElement,
  StyledCardPersonList,
  StyledCardPersonListItem,
} from "../Card/Card.styled";
import ButtonNew from "../Button";
import { useRouter } from "next/router.js";
import Fuse from "fuse.js";
import SnackBar from "../SnackBar";
import { useState } from "react";

export default function PersonInfo({
  solutionsData,
  modulesData,
  person,
  deletePerson,
}) {
  const router = useRouter();

  const [showSnack, setShowSnack] = useState(false);
  const [showPersonInUseSnack, setShowPersonInUseSnack] = useState(false);

  const searchOptionsSolutions = {
    includeMatches: true,
    useExtendedSearch: true,
    keys: ["bpe", "bseint", "bsegr", "leadDeveloper", "cbo"],
  };

  const searchOptionsSolutionsModules = {
    includeMatches: true,
    useExtendedSearch: true,
    keys: ["modules"],
  };

  const searchOptionsModuleDetails = {
    includeMatches: true,
    useExtendedSearch: true,
    keys: ["developer", "bpa"],
  };

  const personal_id = person.personal_Id;
  const fuse = new Fuse(modulesData, searchOptionsModuleDetails);
  const solfuse = new Fuse(solutionsData, searchOptionsSolutions);
  const solutionResult = solfuse.search(`=${personal_id}`);
  const moduleResult = fuse.search(`=${personal_id}`);

  let modulesAsDeveloper = [];
  let modulesAsBpa = [];
  let solutionsOverview = [];

  function editPerson(event) {
    const personal_id = event.target.parentElement.parentElement.id;

    router.push({
      pathname: "/createPerson",
      query: { personal_Id: personal_id },
    });
  }

  function removePerson(event) {
    if (solutionResult.length > 0 || moduleResult.length > 0) {
      setShowPersonInUseSnack(true);
    } else {
      setShowSnack(true);
      deletePerson(personal_id);
    }
  }

  if (moduleResult.length > 0) {
    moduleResult.forEach((result) => {
      const module = result.item;
      const solMod = new Fuse(solutionsData, searchOptionsSolutionsModules);
      const solModResult = solMod.search(`=${module.module_Id}`);

      solModResult.forEach((res) => {
        module.solution_Id = res.item.solution_Id;
      });

      result.matches.forEach((match) => {
        if (match.key === "developer") {
          if (!modulesAsDeveloper.includes(module)) {
            modulesAsDeveloper.push(module);
          }
        }
        if (match.key === "bpa") {
          if (!modulesAsBpa.includes(module)) {
            modulesAsBpa.push(module);
          }
        }
      });
    });
  }

  if (solutionResult.length > 0) {
    solutionResult.forEach((result) => {
      const solution = result.item;
      let roles = [];
      result.matches.forEach((match) => {
        roles.push(match.key);
      });
      const solObject = { solution, roles };
      solutionsOverview.push(solObject);
    });
  }

  function DeveloperList() {
    if (modulesAsDeveloper.length > 0) {
      return (
        <StyledCardPersonElement aria-label="Devloper overview">
          <StyledCardPersonList aria-label="List of modules as devloper">
            <StyledCardPersonListItem
              key="devList"
              aria-label="Devloper headline item"
            >
              <b>Developer for: </b>
            </StyledCardPersonListItem>
            {modulesAsDeveloper.map((module) => {
              return (
                <StyledCardPersonListItem
                  key={module.module_Id}
                  aria-label="Devloper for module"
                >
                  <Link
                    aria-label="Link to module"
                    href={{
                      pathname: "/modules",
                      query: {
                        SolutionId: module.solution_Id,
                        ModuleId: module.module_Id,
                      },
                    }}
                    passHref
                  >
                    {module.module}
                  </Link>
                </StyledCardPersonListItem>
              );
            })}
          </StyledCardPersonList>
        </StyledCardPersonElement>
      );
    }
  }

  function BpaList() {
    if (modulesAsBpa.length > 0) {
      return (
        <StyledCardPersonElement aria-label="BPA overview">
          <StyledCardPersonList aria-label="List of modules as bpa">
            <StyledCardPersonListItem
              key="bpaList"
              aria-label="BPA headline item"
            >
              <b>BPA for:</b>
            </StyledCardPersonListItem>
            {modulesAsBpa.map((module) => {
              return (
                <StyledCardPersonListItem
                  key={module.module_Id}
                  aria-label="BPA for module"
                >
                  <Link
                    aria-label="Link to bpa"
                    href={{
                      pathname: "/modules",
                      query: {
                        SolutionId: module.solution_Id,
                        ModuleId: module.module_Id,
                      },
                    }}
                    passHref
                  >
                    {module.module}
                  </Link>
                </StyledCardPersonListItem>
              );
            })}
          </StyledCardPersonList>
        </StyledCardPersonElement>
      );
    }
  }

  function SolutionList() {
    if (solutionsOverview.length > 0) {
      return (
        <StyledCardPersonElement aria-label="Solution overview">
          <StyledCardPersonList aria-label="List of solutions">
            {solutionsOverview.map((solObj) => {
              return (
                <div
                  key={person.personal_Id + "_" + solObj.solution.solution_Id}
                >
                  <StyledCardPersonListItem
                    key={solObj.solution.solution_Id}
                    aria-label="Person in solution"
                  >
                    <Link
                      aria-label="Link to solution"
                      href={{
                        pathname: "/",
                        query: {
                          SolutionId: solObj.solution.solution_Id,
                        },
                      }}
                      passHref
                    >
                      <b>{solObj.solution.solution}</b>
                    </Link>
                  </StyledCardPersonListItem>
                  {solObj.roles.map((role) => {
                    return (
                      <StyledCardPersonListItem
                        aria-label="Role in solution"
                        key={person.personal_Id + "_" + role}
                      >
                        {role}
                      </StyledCardPersonListItem>
                    );
                  })}
                </div>
              );
            })}
          </StyledCardPersonList>
        </StyledCardPersonElement>
      );
    }
  }

  return (
    <>
      <StyledCard
        key={person.personal_Id}
        id={person.personal_Id}
        aria-label="Person overview"
      >
        <StyledCardContent>
          <ButtonNew
            type="button"
            variant="edit"
            onClick={editPerson}
            aria-label="Edit person button"
          >
            Edit
          </ButtonNew>
          <ButtonNew
            type="button"
            variant="delete"
            onClick={removePerson}
            aria-label="Delete person button"
          >
            Delete
          </ButtonNew>
        </StyledCardContent>
        <StyledCardContent aria-label="Person role">
          {person.role}
        </StyledCardContent>
        <StyledCardContent>
          <StyledCardTitle aria-label="Person name">
            {person.firstname} {person.lastname}
          </StyledCardTitle>
        </StyledCardContent>
        <StyledCardContent>
          <DeveloperList />
          <BpaList />
          <SolutionList />
        </StyledCardContent>
      </StyledCard>
      {showSnack && <SnackBar text={`Person deleted`} backColor="green" />}
      {!showSnack && <></>}
      {showPersonInUseSnack && (
        <SnackBar
          text={`${person.firstname} ${person.lastname} is still attatched to solutions or modules. Please remove first before deletion`}
          backColor="red"
          setParentSnackState={setShowPersonInUseSnack}
        />
      )}
      {!showPersonInUseSnack && <></>}
    </>
  );
}
