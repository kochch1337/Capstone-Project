import { StyledSelectSolution } from "./SelectSolution.styled";

export default function SelectSolution({ solutionsData, preselectSolution }) {
  return (
    <>
      <label htmlFor="select_solution">Module for Solution:</label>
      <StyledSelectSolution
        id="select_solution"
        defaultValue={
          preselectSolution != undefined ? preselectSolution.solution_Id : ""
        }
        name="select_solution"
        required
      >
        <option key="none" value="" disabled>
          Please select a solution
        </option>
        {solutionsData.map((solution) => {
          return (
            <option key={solution.solution_Id} value={solution.solution_Id}>
              {solution.solution}
            </option>
          );
        })}
      </StyledSelectSolution>
    </>
  );
}
