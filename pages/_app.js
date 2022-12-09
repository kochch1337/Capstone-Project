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

  function deleteSolution(solution_Id) {
    setSolutionsData((current) =>
      current.filter((solution) => solution.solution_Id !== solution_Id)
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

  function deleteModule(module_Id, solution_Id) {
    if (solution_Id != undefined) {
      setSolutionsData(
        solutionsData.map((sol) => {
          let solution = { ...sol };

          if (solution.solution_Id === solution_Id) {
            solution.modules = solution.modules.filter(
              (module) => module !== module_Id
            );
          }

          return solution;
        })
      );
    }

    setModulesData((current) =>
      current.filter((module) => module.module_Id !== module_Id)
    );
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

  function deletePerson(personel_Id) {
    setPersonsData((current) =>
      current.filter((person) => person.personal_Id !== personel_Id)
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
          deleteSolution={deleteSolution}
          addModule={addModule}
          updateModule={updateModule}
          deleteModule={deleteModule}
          addPerson={addPerson}
          updatePerson={updatePerson}
          deletePerson={deletePerson}
        />
      </Layout>
    </>
  );
}

export default MyApp;
