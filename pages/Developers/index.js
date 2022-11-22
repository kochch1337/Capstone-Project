import { useRouter } from "next/router.js";
export default function Developers({ mainData, personsData }) {
  const router = useRouter();
  const query = router.query;

  const solutionid = query.SolutionId;
  const moduleName = query.Module;

  let data = personsData.filter((dev) => dev.role === "dev");

  if (solutionid !== undefined && moduleName !== undefined) {
    const solutionData = mainData.find(
      (solution) => solution.solution_Id === solutionid
    );

    const moduleData = solutionData.modules.find(
      (module) => module.module === moduleName
    );
    data = moduleData.developer;
  }

  return (
    <>
      <h1>Developers</h1>
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
