import { useRouter } from "next/router.js";
import { StyledHeader } from "../../components/Card/Card.styled";
import ButtonNew from "../../components/Button";
import Fuse from "fuse.js";

export default function Persons({
  solutionsData,
  modulesData,
  personsData,
  deletePerson,
}) {
  const router = useRouter();
  const query = router.query;

  const solutionid = query.SolutionId;
  const moduleName = query.Module;

  const searchOptionsModule = {
    includeScore: true,
    includeMatches: true,
    useExtendedSearch: true,
    keys: ["developer", "bpa"],
  };

  const searchOptionsSolutions = {
    includeScore: true,
    includeMatches: true,
    useExtendedSearch: true,
    keys: ["bpe", "bseint", "bsegr", "leadDeveloper", "cbo"],
  };

  let devs = personsData.filter((dev) => dev.role === "dev");
  let bpas = personsData.filter((dev) => dev.role === "bc");

  if (solutionid !== undefined && moduleName !== undefined) {
    const solutionData = solutionsData.find(
      (solution) => solution.solution_Id === solutionid
    );

    const moduleData = solutionData.modules.find(
      (module) => module.module === moduleName
    );
    devs = moduleData.developer;
  }

  if (solutionid !== undefined && moduleName !== undefined) {
    const solutionData = solutionsData.find(
      (solution) => solution.solution_Id === solutionid
    );

    const moduleData = solutionData.modules.find(
      (module) => module.module === moduleName
    );
    bpas = moduleData.bpa;
  }

  function editPerson(event) {
    const personal_id = event.target.parentElement.id;

    router.push({
      pathname: "/createPerson",
      query: { personal_Id: personal_id },
    });
  }

  function removePerson(event) {
    const personal_id = event.target.parentElement.id;
    const fuse = new Fuse(modulesData, searchOptionsModule);
    const solfuse = new Fuse(solutionsData, searchOptionsSolutions);
    const solutionResult = solfuse.search(`=${personal_id}`);
    const moduleResult = fuse.search(`=${personal_id}`);

    if (solutionResult.length > 0 || moduleResult.length > 0) {
      console.log("Person still in use, abort deletion");
    } else {
      deletePerson(personal_id);
    }
  }

  return (
    <>
      <StyledHeader>Persons</StyledHeader>
      <ul>
        Developers:
        {devs.map((person) => {
          return (
            <li key={person.personal_Id} id={person.personal_Id}>
              {person.firstname} {person.lastname}{" "}
              <ButtonNew type="button" onClick={editPerson}>
                Edit
              </ButtonNew>
              <ButtonNew type="button" onClick={removePerson}>
                delete
              </ButtonNew>
            </li>
          );
        })}
      </ul>
      <ul>
        BPAs:
        {bpas.map((person) => {
          return (
            <li key={person.personal_Id} id={person.personal_Id}>
              {person.firstname} {person.lastname}{" "}
              <ButtonNew type="button" onClick={editPerson}>
                Edit
              </ButtonNew>
              <ButtonNew type="button" onClick={removePerson}>
                delete
              </ButtonNew>
            </li>
          );
        })}
      </ul>
    </>
  );
}
