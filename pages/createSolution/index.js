import { useRouter } from "next/router.js";
import SolutionChanger from "../../components/SolutionChanger";

export default function Create({
  solutionsData,
  personsData,
  addSolution,
  updateSolution,
}) {
  const router = useRouter();
  const query = router.query;

  const solution = solutionsData.find(
    (sol) => sol.solution_Id === query.solution_Id
  );

  return (
    <>
      <SolutionChanger
        solutionsData={solutionsData}
        solution={solution}
        personsData={personsData}
        addSolution={addSolution}
        updateSolution={updateSolution}
      />
    </>
  );
}
