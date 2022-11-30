import { useRouter } from "next/router.js";
import ModuleInfo from "../../components/ModuleInfo";
import {
  StyledHeader,
  StyledListContainer,
} from "../../components/Card/Card.styled";

export default function Modules({ mainData }) {
  const router = useRouter();
  const query = router.query;

  const solutionid = query.SolutionId;
  const moduleName = query.Module;

  let data = [];

  data = mainData.map((solution) => solution);

  if (solutionid !== undefined) {
    data = mainData
      .filter((solution) => solution.solution_Id === solutionid)
      .map((solution) => solution);
  }

  if (moduleName !== undefined) {
    data = mainData
      .filter((solution) => solution.solution_Id === solutionid)
      .map((solution) => {
        return {
          ...solution,
          modules: solution.modules.filter(
            (module) => module.module === moduleName
          ),
        };
      });
  }

  return (
    <>
      <StyledHeader>Modules</StyledHeader>
      <StyledListContainer>
        {data.map((solution) => {
          return solution.modules.map((module) => {
            return (
              <ModuleInfo
                key={module.module}
                solution={solution}
                module={module}
              />
            );
          });
        })}
      </StyledListContainer>
    </>
  );
}
