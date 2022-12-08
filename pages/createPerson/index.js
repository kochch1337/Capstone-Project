import { useRouter } from "next/router.js";
import PersonChanger from "../../components/PersonChanger";

export default function CreatePerson({ addPerson, personsData, updatePerson }) {
  const router = useRouter();
  const query = router.query;

  const person = personsData.find(
    (pers) => pers.personal_Id === query.personal_Id
  );

  return (
    <>
      <PersonChanger
        addPerson={addPerson}
        updatePerson={updatePerson}
        person={person}
      />
    </>
  );
}
