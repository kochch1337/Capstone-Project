import { useRouter } from "next/router.js";
import ModuleChanger from "../../components/ModuleChanger";

export default function Create({
  solutionsData,
  personsData,
  modulesData,
  addModule,
  updateModule,
}) {
  const router = useRouter();
  const query = router.query;

  const module = modulesData.find((mod) => mod.module_Id === query.module_Id);

  return (
    <>
      <ModuleChanger
        solutionsData={solutionsData}
        personsData={personsData}
        module={module}
        addModule={addModule}
        updateModule={updateModule}
      />
    </>
  );
}
