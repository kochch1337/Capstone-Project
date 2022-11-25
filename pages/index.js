import { useRouter } from "next/router.js";
import SolutionInfo from "../components/SolutionInfo";
import {
  StyledHeader,
  StyledListContainer,
} from "../components/Card/Card.styled";

export default function Solution({ mainData }) {
  const router = useRouter();

  return (
    <>
      <StyledHeader>Solutions</StyledHeader>
      <StyledListContainer>
        {mainData.map((solution) => {
          return (
            <SolutionInfo key={solution.solution_Id} solution={solution} />
          );
        })}
      </StyledListContainer>
    </>
  );
}
