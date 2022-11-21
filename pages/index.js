export default function Solution({ mainData }) {
  return (
    <>
      <main>
        <h1>Solutions</h1>
        <ul>
          {mainData.map((solution) => {
            return <li key={solution.solution_Id}>{solution.solution}</li>;
          })}
        </ul>
      </main>
    </>
  );
}
