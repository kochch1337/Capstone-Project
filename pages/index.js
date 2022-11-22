import Link from "next/link";
import { useRouter } from "next/router.js";

export default function Solution({ mainData }) {
  const router = useRouter();

  return (
    <>
      <h1>Solutions</h1>
      <ul>
        {mainData.map((solution) => {
          return (
            <li key={solution.solution_Id}>
              <Link
                href={{
                  pathname: "/Modules",
                  query: { SolutionId: solution.solution_Id },
                }}
                passHref
              >
                {solution.solution}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
