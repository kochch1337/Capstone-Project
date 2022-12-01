import { useRouter } from "next/router.js";
import SolutionChanger from "../../components/SolutionChanger";

export default function Create({ solutionsData, personsData, addSolution }) {
  const router = useRouter();

  return (
    <>
      <SolutionChanger
        solutionsData={solutionsData}
        personsData={personsData}
        addSolution={addSolution}
      />
    </>
  );
}
