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

  function addPerson(newPerson) {
    setPersonsData([...personsData, newPerson]);
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
          addModule={addModule}
          addPerson={addPerson}
        />
      </Layout>
    </>
  );
}

export default MyApp;
