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

const ButtonSubmit = styled.button`
  margin: auto;
  width: fit-content;
`;

const TextElement = styled.p`
  text-align: right;
`;

const FormsBase = styled.p`
  max-width: 45rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
