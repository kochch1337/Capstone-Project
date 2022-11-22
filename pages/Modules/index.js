export default function Modules({ mainData, personsData }) {
  return (
    <>
      <main>
        <h1>Modules</h1>
        <ul>
          {mainData.map((solution) => {
            return solution.modules.map((module) => {
              return <li key={module.module}>{module.module}</li>;
            });
          })}
        </ul>
      </main>
    </>
  );
}
