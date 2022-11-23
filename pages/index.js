import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router.js";
import SolutionInfo from "../components/SolutionInfo";

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

const StyledListContainer = styled.ul`
  padding 5px 5px 10% 5px
`;

const StyledHeader = styled.h1`
  font-color: red;
`;
