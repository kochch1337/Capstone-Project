export default function Bps({ personsData }) {
  return (
    <>
      <main>
        <h1>BPA</h1>
        <ul>
          {personsData
            .filter((dev) => dev.role === "bc")
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
