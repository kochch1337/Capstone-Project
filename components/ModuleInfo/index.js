import Link from "next/link";
import {
  StyledCard,
  StyledCardContent,
  StyledCardContentElement,
  StyledCardTitle,
  StyledCardModuleList,
  StyledCardModuleListItem,
} from "../Card/Card.styled";

export default function ModuleInfo({ solution, module }) {
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
              <StyledCardModuleListItem>Developers: </StyledCardModuleListItem>
              {module.developer.map((dev) => {
                return (
                  <StyledCardModuleListItem key={dev.personal_Id}>
                    {dev.firstname} {dev.lastname}
                  </StyledCardModuleListItem>
                );
              })}
            </StyledCardModuleList>
          </StyledCardContentElement>
          <StyledCardContentElement>
            <StyledCardModuleList>
              <StyledCardModuleListItem>BPA: </StyledCardModuleListItem>
              {module.bpa.map((bpa) => {
                return (
                  <StyledCardModuleListItem key={bpa.personal_Id}>
                    {bpa.firstname} {bpa.lastname}
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
