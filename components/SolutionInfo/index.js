import Link from "next/link";
import {
  StyledCard,
  StyledCardContent,
  StyledCardContentElement,
  StyledCardTitle,
  StyledCardModuleList,
  StyledCardModuleListItem,
} from "../Card/Card.styled";

export default function SolutionInfo({ solution }) {
  return (
    <>
      <StyledCard key={solution.solution_Id}>
        <StyledCardContent>
          <StyledCardTitle>
            <Link
              href={{
                pathname: "/Modules",
                query: {
                  SolutionId: solution.solution_Id,
                },
              }}
              passHref
            >
              {solution.solution}
            </Link>
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
            BPE: {solution.bpe.firstname} {solution.bpe.lastname}
          </StyledCardContentElement>
          <StyledCardContentElement>
            BSEINT: {solution.bseint.firstname} {solution.bseint.lastname}
          </StyledCardContentElement>
          <StyledCardContentElement>
            BSEGR: {solution.bsegr.firstname} {solution.bsegr.lastname}
          </StyledCardContentElement>
          <StyledCardContentElement>
            Lead Developer: {solution.leadDeveloper.firstname}{" "}
            {solution.leadDeveloper.lastname}
          </StyledCardContentElement>
          <StyledCardContentElement>
            CBO: {solution.cbo.firstname} {solution.cbo.lastname}
          </StyledCardContentElement>
          <StyledCardContentElement>
            <StyledCardModuleList>
              Modules:
              {solution.modules.map((module) => {
                return (
                  <StyledCardModuleListItem key={module.module}>
                    <Link
                      href={{
                        pathname: "/Modules",
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
