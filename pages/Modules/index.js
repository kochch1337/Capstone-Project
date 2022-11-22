import Link from "next/link";
import { useRouter } from "next/router.js";

export default function Modules({ mainData }) {
  const router = useRouter();
  const query = router.query;

  const solutionid = query.SolutionId;

  let data = mainData;

  if (solutionid !== undefined) {
    data = mainData.filter((solution) => solution.solution_Id === solutionid);
  }

  return (
    <>
      <h1>Modules</h1>
      <ul>
        {data.map((solution) => {
          return solution.modules.map((module) => {
            return (
              <li key={module.module}>
                <Link
                  href={{
                    pathname: "/Developers",
                    query: {
                      SolutionId: solution.solution_Id,
                      Module: module.module,
                    },
                  }}
                  passHref
                >
                  {module.module} Developer
                </Link>
                -
                <Link
                  href={{
                    pathname: "/Bps",
                    query: {
                      SolutionId: solution.solution_Id,
                      Module: module.module,
                    },
                  }}
                  passHref
                >
                  {module.module} BPS
                </Link>
              </li>
            );
          });
        })}
      </ul>
    </>
  );
}
