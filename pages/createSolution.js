import styled from "styled-components";
import { useRouter } from "next/router.js";
import SolutionChanger from "../components/SolutionChanger";

export default function Create({ mainData, personsData, addSolution }) {
  const router = useRouter();

  return (
    <>
      <SolutionChanger
        mainData={mainData}
        personsData={personsData}
        addSolution={addSolution}
      />
    </>
  );
}
