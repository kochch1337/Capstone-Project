import Link from "next/link";
import {
  StyledCard,
  StyledCardContent,
  StyledCardContentElement,
  StyledCardTitle,
  StyledCardModuleList,
  StyledCardModuleListItem,
} from "../Card/Card.styled";

export default function SolutionInfo({ solution, personsData }) {
  return (
    <>
      <StyledCard key={solution.solution_Id}>
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
        </StyledCardContent>
        <StyledCardContent>
          <StyledCardContentElement>
            Team: {solution.team}
          </StyledCardContentElement>
          <StyledCardContentElement>
            SupportGroup: {solution.supportGroup}
          </StyledCardContentElement>
          <StyledCardContentElement>
            BPE:
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
            })}
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
              Modules:
              {solution.modules.map((module) => {
                return (
                  <StyledCardModuleListItem key={module.module}>
                    <Link
                      href={{
                        pathname: "/modules",
                        query: {
                          SolutionId: solution.solution_Id,
                          Module: module.module,
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
    </>
  );
}
