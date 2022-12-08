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
    console.log(event.target);
    const module_id = event.target.parentElement.parentElement.id;
    console.log(module_id);

    const fuse = new Fuse(solutionsData, searchOptionsSolutions);
    const moduleResult = fuse.search(`=${module_id}`);

    console.log(fuse);
    console.log(moduleResult);

    if (moduleResult.length > 0) {
      console.log("Module still in use, abort deletion");
    } else {
      deleteModule(module_id);
      setShowSnack(true);
    }
  }

  return (
    <>
      <StyledCard key={module.module_Id} id={module.module_Id}>
        <StyledCardContent>
          <StyledCardTitle>
            <Link
              href={{
                pathname: "/",
              }}
              passHref
            >
              {solution.solution}
            </Link>
            - {module.module}
          </StyledCardTitle>
          <ButtonNew type="button" variant="edit" onClick={editModule}>
            Edit
          </ButtonNew>
          <ButtonNew type="button" variant="delete" onClick={removeModule}>
            Delete
          </ButtonNew>
        </StyledCardContent>
        <StyledCardContent>
          <StyledCardContentElement>
            Team: {solution.team}
          </StyledCardContentElement>
          <StyledCardContentElement>
            SupportGroup: {solution.supportGroup}
          </StyledCardContentElement>
          <StyledCardContentElement>
            BPE:{" "}
            {solution.bpe.map((personalid) => {
              const person = personsData.find(
                (pers) => pers.personal_Id == personalid
              );
              return ` ${person.firstname} ${person.lastname}`;
            })}
          </StyledCardContentElement>
          <StyledCardContentElement>
            BSEINT:{" "}
            {solution.bseint.map((personalid) => {
              const person = personsData.find(
                (pers) => pers.personal_Id == personalid
              );
              return `${person.firstname} ${person.lastname}`;
            })}
          </StyledCardContentElement>
          <StyledCardContentElement>
            BSEGR:{" "}
            {solution.bsegr.map((personalid) => {
              const person = personsData.find(
                (pers) => pers.personal_Id == personalid
              );
              return `${person.firstname} ${person.lastname}`;
            })}{" "}
          </StyledCardContentElement>
          <StyledCardContentElement>
            Lead Developer:{" "}
            {solution.leadDeveloper.map((personalid) => {
              const person = personsData.find(
                (pers) => pers.personal_Id == personalid
              );
              return `${person.firstname} ${person.lastname}`;
            })}
          </StyledCardContentElement>
          <StyledCardContentElement>
            CBO:{" "}
            {solution.cbo.map((personalid) => {
              const person = personsData.find(
                (pers) => pers.personal_Id == personalid
              );
              return `${person.firstname} ${person.lastname}`;
            })}
          </StyledCardContentElement>
          <StyledCardContentElement>
            <StyledCardModuleList>
              <StyledCardModuleListItem>Developers: </StyledCardModuleListItem>
              {module.developer.map((dev) => {
                const person = personsData.find(
                  (pers) => pers.personal_Id == dev
                );
                return (
                  <StyledCardModuleListItem key={person.personal_Id}>
                    {person.firstname} {person.lastname}
                  </StyledCardModuleListItem>
                );
              })}
            </StyledCardModuleList>
          </StyledCardContentElement>
          <StyledCardContentElement>
            <StyledCardModuleList>
              <StyledCardModuleListItem>BPA: </StyledCardModuleListItem>
              {module.bpa.map((bpa) => {
                const person = personsData.find(
                  (pers) => pers.personal_Id == bpa
                );
                return (
                  <StyledCardModuleListItem key={person.personal_Id}>
                    {person.firstname} {person.lastname}
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
