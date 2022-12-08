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

export default function SolutionInfo({ solution, modulesData, personsData }) {
  const router = useRouter();

  function editSolution(event) {
    event.preventDefault();

    const solution_id = event.target.parentElement.parentElement.id;

    router.push({
      pathname: "/createSolution",
      query: { solution_Id: solution_id },
    });
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
        <StyledCardContent>
          <ButtonNew type="button" onClick={editSolution}>
            Edit
          </ButtonNew>
        </StyledCardContent>
      </StyledCard>
    </>
  );
}
