import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../helpers/hooks";
import data from "../helpers/api";
import persons from "../helpers/persons";

function MyApp({ Component, pageProps }) {
  const [mainData, setMainData] = useLocalStorage("mainData", data);
  const [personsData, setPersonsData] = useLocalStorage("personsData", persons);

  function addSolution(newSolution) {
    setMainData([...mainData, newSolution]);
  }

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component
          {...pageProps}
          mainData={mainData}
          addSolution={addSolution}
          personsData={personsData}
        />
      </Layout>
    </>
  );
}

export default MyApp;
