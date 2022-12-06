import { useRouter } from "next/router.js";
import PersonChanger from "../../components/PersonChanger";

export default function CreatePerson({ addPerson }) {
  const router = useRouter();

  return (
    <>
      <PersonChanger addPerson={addPerson} />
    </>
  );
}
