import { useRouter } from "next/router.js";
import { StyledHeader } from "../../components/Card/Card.styled";
import ButtonNew from "../../components/Button";

export default function Persons({ solutionsData, personsData }) {
  const router = useRouter();
  const query = router.query;

  const solutionid = query.SolutionId;
  const moduleName = query.Module;

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
            </li>
          );
        })}
      </ul>
    </>
  );
}
