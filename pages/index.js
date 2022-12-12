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
  const query = router.query;
  const solution_Id = query.SolutionId;

  let solutions = [...solutionsData];

  solutions = [
    ...solutions.sort((a, b) =>
      a.solution > b.solution ? 1 : b.solution > a.solution ? -1 : 0
    ),
  ];

  if (solution_Id != undefined) {
    solutions = solutionsData.filter(
      (solution) => solution.solution_Id === solution_Id
    );
  }

  return (
    <>
      <StyledHeader aria-label="Headline">Solutions</StyledHeader>
      <StyledListContainer aria-label="List of Solutions">
        {solutions.map((solution) => {
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
