import Link from "next/link";
import {
  StyledCard,
  StyledCardContent,
  StyledCardContentElement,
  StyledCardTitle,
  StyledCardModuleList,
  StyledCardModuleListItem,
} from "../Card/Card.styled";

export default function ModuleInfo({ solution, module, personsData }) {
  return (
    <>
      <StyledCard key={module.module}>
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
        </StyledCardContent>
      </StyledCard>
    </>
  );
}
