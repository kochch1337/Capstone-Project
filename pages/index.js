import { fakeFetcher } from "../helpers/api";
import useSWR from "swr";
const apiUrl = "/api/data";

export default function Solution() {
  const { data, error } = useSWR(apiUrl, fakeFetcher);

  if (error) {
    return <h1>Data could not be fetched</h1>;
  }

  if (!data) {
    return <h1>loading</h1>;
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
