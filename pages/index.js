import { fakeFetcher } from "../helpers/api";
import useSWR from "swr";

export default function Solution() {
  const { data, error } = useSWR("/api/data", fakeFetcher);

  if (error) {
    return (
      <main>
        <h1>Data could not be fetched</h1>
      </main>
    );
  }

  if (!data) {
    return (
      <main>
        <h1>loading</h1>;
      </main>
    );
  }

  return (
    <main>
      <h1>Solutions</h1>
      <ul>
        {data.map((solution) => {
          return <li key={solution.solution_Id}>{solution.solution}</li>;
        })}
      </ul>
    </main>
  );
}
