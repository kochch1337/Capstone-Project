import { useRouter } from "next/router.js";
import ModuleInfo from "../../components/ModuleInfo";
import {
  StyledHeader,
  StyledListContainer,
} from "../../components/Card/Card.styled";

export default function Modules({
  solutionsData,
  modulesData,
  personsData,
  deleteModule,
}) {
  const router = useRouter();
  const query = router.query;

  const solutionid = query.SolutionId;
  let moduleId = query.ModuleId;
  let data = [];

  data = solutionsData.map((solution) => solution);

  if (solutionid !== undefined) {
    data = solutionsData
      .filter((solution) => solution.solution_Id === solutionid)
      .map((solution) => solution);
  }

  if (moduleId !== undefined) {
    moduleId = moduleId.toString();
    data = solutionsData
      .filter((solution) => solution.solution_Id === solutionid)
      .map((solution) => {
        return {
          ...solution,
          modules: solution.modules.filter((moduleID) => moduleID === moduleId),
        };
      });
  }

  return (
    <>
      <StyledHeader>Modules</StyledHeader>
      <StyledListContainer>
        {data.map((solution) => {
          return solution.modules.map((moduleId) => {
            const module = modulesData.find(
              (moduledata) => moduledata.module_Id == moduleId
            );
            return (
              <ModuleInfo
                key={module.module}
                solution={solution}
                module={module}
                solutionsData={solutionsData}
                modulesData={modulesData}
                personsData={personsData}
                deleteModule={deleteModule}
              />
            );
          });
        })}
      </StyledListContainer>
    </>
  );
}
