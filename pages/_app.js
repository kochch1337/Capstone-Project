import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../helpers/hooks";
import solutions from "../helpers/solutions";
import persons from "../helpers/persons";
import modules from "../helpers/modules";

function MyApp({ Component, pageProps }) {
  const [solutionsData, setSolutionsData] = useLocalStorage(
    "solutionsData",
    solutions
  );
  const [modulesData, setModulesData] = useLocalStorage("modulesData", modules);
  const [personsData, setPersonsData] = useLocalStorage("personsData", persons);

  function addSolution(newSolution) {
    setSolutionsData([...solutionsData, newSolution]);
  }

  function updateSolution(updatedSolution) {
    setSolutionsData(
      solutionsData.map((sol) =>
        sol.solution_Id === updatedSolution.solution_Id ? updatedSolution : sol
      )
    );
  }

  function addModule(newModule, solutionId) {
    setModulesData([...modulesData, newModule]);

    setSolutionsData(
      solutionsData.map((solution) => {
        let newSolution = { ...solution };

        if (newSolution.solution_Id === solutionId) {
          newSolution.modules.push(newModule.module_Id);
        }
        return newSolution;
      })
    );
  }

  function updateModule(changedModule, solutionId, oldSolutionId) {
    setModulesData(
      modulesData.map((module) =>
        module.module_Id === changedModule.module_Id ? changedModule : module
      )
    );

    if (solutionId !== oldSolutionId) {
      setSolutionsData(
        solutionsData.map((sol) => {
          let solution = { ...sol };

          if (solution.solution_Id === oldSolutionId) {
            solution.modules = solution.modules.filter(
              (module) => module !== changedModule.module_Id
            );
          } else if (solution.solution_Id === solutionId) {
            solution.modules.push(changedModule.module_Id);
          }

          return solution;
        })
      );
    }
  }

  function addPerson(newPerson) {
    setPersonsData([...personsData, newPerson]);
  }

  function updatePerson(person) {
    setPersonsData(
      personsData.map((pers) =>
        pers.personal_Id === person.personal_Id ? person : pers
      )
    );
  }

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component
          {...pageProps}
          solutionsData={solutionsData}
          modulesData={modulesData}
          personsData={personsData}
          addSolution={addSolution}
          updateSolution={updateSolution}
          addModule={addModule}
          updateModule={updateModule}
          addPerson={addPerson}
          updatePerson={updatePerson}
        />
      </Layout>
    </>
  );
}

export default MyApp;
