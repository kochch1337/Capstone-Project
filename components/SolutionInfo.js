import styled from "styled-components";
import Link from "next/link";

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

const StyledCard = styled.li`
  position: relative;
  color: var(--granite);
  width: 100%;

  border-radius: 5px;
  overflow: hidden;
  background-color: var(--water);
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const StyledCardContent = styled.div`
  padding: 10px 20px;
  display: flexbox;
  flex-wrap: wrap;
  gap: 20px;
`;

const StyledCardContentElement = styled.div`
  padding: 10px 20px;
  gap: 20px;
`;

const StyledCardTitle = styled.h2`
  background-color: hotpink;
`;

const StyledCardModuleList = styled.ul`
  text-align: left;
  padding: 0px;
`;

const StyledCardModuleListItem = styled.li`
  display: inline;
  padding: 10px;
  gap: 20px;
`;
