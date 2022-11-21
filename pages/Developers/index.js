export default function Developers({ personsData }) {
  return (
    <>
      <main>
        <h1>Developers</h1>
        <ul>
          {personsData
            .filter((dev) => dev.role === "dev")
            .map((person) => {
              return (
                <li key={person.personal_Id}>
                  {person.firstname} {person.lastname}
                </li>
              );
            })}
        </ul>
      </main>
    </>
  );
}
