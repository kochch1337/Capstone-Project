import styled from "styled-components";
import { useRouter } from "next/router.js";
import SolutionChanger from "../components/SolutionChanger";

export default function Create({
  mainData,
  personsData,
  setMainData,
  setPersonsData,
}) {
  const router = useRouter();
  const query = router.query;

  return (
    <>
      <SolutionChanger
        mainData={mainData}
        personsData={personsData}
        setMainData={setMainData}
        setPersonsData={setPersonsData}
      />
    </>
  );
}

function AppendCard(cardsState, setCardsState, question, answer, tags) {
  const ids = cardsState.map((card) => {
    return card.id;
  });
  const maxId = Math.max(...ids);
  const newCard = {
    id: maxId + 1,
    question: question,
    answer: answer,
    tags: Array.from(tags),
  };

  setCardsState([...cardsState, newCard]);
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
