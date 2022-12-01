import { useRouter } from "next/router.js";
import ModuleChanger from "../../components/ModuleChanger";

export default function Create({ solutionsData, personsData, addModule }) {
  const router = useRouter();

  return (
    <>
      <ModuleChanger
        solutionsData={solutionsData}
        personsData={personsData}
        addModule={addModule}
      />
    </>
  );
}
