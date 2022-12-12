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
import Fuse from "fuse.js";
import SnackBar from "../SnackBar";
import { useState } from "react";

export default function ModuleInfo({
  solution,
  module,
  solutionsData,
  personsData,
  deleteModule,
}) {
  const router = useRouter();

  const [showSnack, setShowSnack] = useState(false);

  const searchOptionsSolutions = {
    includeScore: true,
    includeMatches: true,
    useExtendedSearch: true,
    keys: ["modules"],
  };

  function editModule(event) {
    event.preventDefault();
    const module_id = event.target.parentElement.parentElement.id;
    router.push({
      pathname: "/createModule",
      query: { module_Id: module_id },
    });
  }

  function removeModule(event) {
    event.preventDefault();
    const module_id = event.target.parentElement.parentElement.id;

    const fuse = new Fuse(solutionsData, searchOptionsSolutions);
    const moduleResult = fuse.search(`=${module_id}`);

    if (moduleResult.length > 0) {
      if (
        confirm(
          "Module is still in use! Do you really want to delete this module?"
        )
      ) {
        const solutionId = moduleResult[0].item.solution_Id;
        deleteModule(module_id, solutionId);
        setShowSnack(true);
      }
    } else {
      deleteModule(module_id);
      setShowSnack(true);
    }
  }

  return (
    <>
      <StyledCard key={module.module_Id} id={module.module_Id}>
        <StyledCardContent aria-label="Module details">
          <StyledCardTitle aria-label="Module title">
            <Link
              aria-label="Link to solution"
              href={{
                pathname: "/",
                query: {
                  SolutionId: solution.solution_Id,
                },
              }}
              passHref
            >
              {solution.solution}
            </Link>
            - {module.module}
          </StyledCardTitle>
          <ButtonNew
            type="button"
            variant="edit"
            onClick={editModule}
            aria-label="Edit module button"
          >
            Edit
          </ButtonNew>
          <ButtonNew
            type="button"
            variant="delete"
            onClick={removeModule}
            aria-label="Delete module button"
          >
            Delete
          </ButtonNew>
        </StyledCardContent>
        <StyledCardContent>
          <StyledCardContentElement aria-label="Module team">
            Team: {solution.team}
          </StyledCardContentElement>
          <StyledCardContentElement aria-label="Module support group">
            SupportGroup: {solution.supportGroup}
          </StyledCardContentElement>
          <StyledCardContentElement aria-label="Module BPE">
            <b>BPE: </b>
            {solution.bpe.map((personalid) => {
              const person = personsData.find(
                (pers) => pers.personal_Id == personalid
              );
              return (
                <Link
                  aria-label="Link to BPE"
                  key={personalid}
                  href={{
                    pathname: "/persons",
                    query: {
                      personal_Id: person.personal_Id,
                    },
                  }}
                  passHref
                >
                  {person.firstname} {person.lastname}
                </Link>
              );
            })}
          </StyledCardContentElement>
          <StyledCardContentElement aria-label="Module BSEINT">
            BSEINT:{" "}
            {solution.bseint.map((personalid) => {
              const person = personsData.find(
                (pers) => pers.personal_Id == personalid
              );
              return (
                <Link
                  aria-label="Link to BSEINT"
                  key={personalid}
                  href={{
                    pathname: "/persons",
                    query: {
                      personal_Id: person.personal_Id,
                    },
                  }}
                  passHref
                >
                  {person.firstname} {person.lastname}
                </Link>
              );
            })}
          </StyledCardContentElement>
          <StyledCardContentElement aria-label="Module BSEGR">
            BSEGR:{" "}
            {solution.bsegr.map((personalid) => {
              const person = personsData.find(
                (pers) => pers.personal_Id == personalid
              );
              return (
                <Link
                  aria-label="Link to BSEGR"
                  key={personalid}
                  href={{
                    pathname: "/persons",
                    query: {
                      personal_Id: person.personal_Id,
                    },
                  }}
                  passHref
                >
                  {person.firstname} {person.lastname}
                </Link>
              );
            })}
          </StyledCardContentElement>
          <StyledCardContentElement aria-label="Module lead developer">
            Lead Developer:{" "}
            {solution.leadDeveloper.map((personalid) => {
              const person = personsData.find(
                (pers) => pers.personal_Id == personalid
              );
              return (
                <Link
                  aria-label="Link to lead developer"
                  key={personalid}
                  href={{
                    pathname: "/persons",
                    query: {
                      personal_Id: person.personal_Id,
                    },
                  }}
                  passHref
                >
                  {person.firstname} {person.lastname}
                </Link>
              );
            })}
          </StyledCardContentElement>
          <StyledCardContentElement aria-label="Module CBO">
            CBO:{" "}
            {solution.cbo.map((personalid) => {
              const person = personsData.find(
                (pers) => pers.personal_Id == personalid
              );
              return (
                <Link
                  aria-label="Link to CBO"
                  key={personalid}
                  href={{
                    pathname: "/persons",
                    query: {
                      personal_Id: person.personal_Id,
                    },
                  }}
                  passHref
                >
                  {person.firstname} {person.lastname}
                </Link>
              );
            })}
          </StyledCardContentElement>
          <StyledCardContentElement>
            <StyledCardModuleList aria-label="Module developers list">
              <StyledCardModuleListItem aria-label="Module developers headline">
                <b>Developers: </b>
              </StyledCardModuleListItem>
              {module.developer.map((dev) => {
                const person = personsData.find(
                  (pers) => pers.personal_Id == dev
                );
                return (
                  <StyledCardModuleListItem
                    key={person.personal_Id}
                    aria-label="Module developer"
                  >
                    <Link
                      aria-label="Link to module developer"
                      key={person.personal_Id}
                      href={{
                        pathname: "/persons",
                        query: {
                          personal_Id: person.personal_Id,
                        },
                      }}
                      passHref
                    >
                      {person.firstname} {person.lastname}
                    </Link>
                  </StyledCardModuleListItem>
                );
              })}
            </StyledCardModuleList>
          </StyledCardContentElement>
          <StyledCardContentElement>
            <StyledCardModuleList aria-label="Module bpa list">
              <StyledCardModuleListItem aria-label="Module bpa headline">
                <b>BPA: </b>
              </StyledCardModuleListItem>
              {module.bpa.map((bpa) => {
                const person = personsData.find(
                  (pers) => pers.personal_Id == bpa
                );
                return (
                  <StyledCardModuleListItem
                    key={person.personal_Id}
                    aria-label="Module bpa"
                  >
                    <Link
                      aria-label="Link to module bpa"
                      key={person.personal_Id}
                      href={{
                        pathname: "/persons",
                        query: {
                          personal_Id: person.personal_Id,
                        },
                      }}
                      passHref
                    >
                      {person.firstname} {person.lastname}
                    </Link>
                  </StyledCardModuleListItem>
                );
              })}
            </StyledCardModuleList>
          </StyledCardContentElement>
        </StyledCardContent>
      </StyledCard>
      {showSnack && <SnackBar text={`Module deleted`} backColor="green" />}
      {!showSnack && <></>}
    </>
  );
}
