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

export default function ModuleInfo({ solution, module, personsData }) {
  const router = useRouter();

  function editModule(event) {
    event.preventDefault();
    const module_id = event.target.parentElement.parentElement.parentElement.id;
    router.push({
      pathname: "/createModule",
      query: { module_Id: module_id },
    });
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
          <StyledCardContentElement>
            <ButtonNew type="button" onClick={editModule}>
              edit
            </ButtonNew>
          </StyledCardContentElement>
        </StyledCardContent>
      </StyledCard>
    </>
  );
}
