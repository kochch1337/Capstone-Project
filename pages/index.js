import { useRouter } from "next/router.js";
import SolutionInfo from "../components/SolutionInfo";
import {
  StyledHeader,
  StyledListContainer,
} from "../components/Card/Card.styled";

export default function Solution({
  solutionsData,
  modulesData,
  personsData,
  deleteSolution,
}) {
  const router = useRouter();

  return (
    <>
      <StyledHeader>Solutions</StyledHeader>
      <StyledListContainer>
        {solutionsData.map((solution) => {
          return (
            <SolutionInfo
              key={solution.solution_Id}
              solution={solution}
              modulesData={modulesData}
              personsData={personsData}
              deleteSolution={deleteSolution}
            />
          );
        })}
      </StyledListContainer>
    </>
  );
}
