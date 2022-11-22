import { useRouter } from "next/router.js";
export default function Bps({ mainData, personsData }) {
  const router = useRouter();
  const query = router.query;

  const solutionid = query.SolutionId;
  const moduleName = query.Module;

  let data = personsData.filter((dev) => dev.role === "bc");

  if (solutionid !== undefined && moduleName !== undefined) {
    const solutionData = mainData.find(
      (solution) => solution.solution_Id === solutionid
    );

    const moduleData = solutionData.modules.find(
      (module) => module.module === moduleName
    );

    data = moduleData.bpa;
  }

  return (
    <>
      <h1>BPA</h1>
      <ul>
        {data.map((person) => {
          return (
            <li key={person.personal_Id}>
              {person.firstname} {person.lastname}
            </li>
          );
        })}
      </ul>
    </>
  );
}
